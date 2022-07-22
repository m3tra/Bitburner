/** @param {NS} ns */
import { scanNetwork } from './scan.js'

let ownedServers = [];

export function getOwnedServers(ns, i, server) {
	let currServer;

	if (server['has_child']) {
		for (let i = 0; i < server['children'].length; i++) {
			currServer = server['children'][i];
			if (currServer['has_child'])
				getOwnedServers(ns, i, currServer);
			if (ns.hasRootAccess(currServer['name']))
				ownedServers.push(currServer['name']);
		}
	}
}

export function printOwnedServers(ns) {
	ns.tprint("Owned servers:\n");
	for (let i = 0; i < ownedServers.length; i++)
		ns.tprint("\t\t" + ownedServers[i]);
}

export async function spreadToOwnedServers(ns, files) {
	for (let i = 0; i < ownedServers.length; i++) {
		await ns.scp(files, ownedServers[i]);
		ns.tprint("Delivered payload to: " + ownedServers[i]);
	}
}

export async function main(ns) {
	var target;
	var files;
	let servers = scanNetwork(ns);

	if (!ns.args[0] || ns.args.length != 1) {
		ns.tprint("Required target hostname as only argument (use 'all' to spread to servers with root access)");
		return;
	}
	target = ns.args[0];
	files = ns.ls("home", "Delivery");
	if (target == "all") {
		getOwnedServers(ns, 0, servers);
		printOwnedServers(ns);
		await spreadToOwnedServers(ns, files);
	}
	else
		await ns.scp(files, target);
}
