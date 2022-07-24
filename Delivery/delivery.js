import { scanNetwork } from './scan.js'

let ownedServers = [];

/** @param {import('.').NS} ns */
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

/** @param {import('.').NS} ns */
export function printOwnedServers(ns) {
	ns.tprint("Owned servers:\n");
	for (let i = 0; i < ownedServers.length; i++)
		ns.tprint("\t\t" + ownedServers[i]);
}

/** @param {import('.').NS} ns */
export async function spreadToOwnedServers(ns, files) {
	for (let i = 0; i < ownedServers.length; i++) {
		await ns.scp(files, ownedServers[i]);
		ns.tprint("Delivered payload to: " + ownedServers[i]);
	}
}

/** @param {import('.').NS} ns */
export async function main(ns) {
	var files;
	var target;
	let servers = scanNetwork(ns);

	files = ns.ls("home", "Delivery");
	if (!ns.args[0] || ns.args.length != 1) {
		getOwnedServers(ns, 0, servers);
		printOwnedServers(ns);
		await spreadToOwnedServers(ns, files);
		return;
	}
	target = ns.args[0];
	await ns.scp(files, target);
}
