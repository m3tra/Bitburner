/** @param {NS} ns */
import { scanNetwork } from './scan.js'
// import * as namespace from './scan.js'

let best = {
	'name': '',
	'maxMoney': 0,
};

export function availableHacks(ns) {
	let hacks = ["BruteSSH.exe", "FTPCrack.exe", "relaySMTP.exe", "HTTPWorm.exe", "SQLInject.exe"];
	let ownedHacks = [];

	for (let i = 0; i < hacks.length; i++)
		if (ns.fileExists(hacks[i]))
			ownedHacks.push(hacks[i]);
	return ownedHacks;
}

export function nAvailableHacks(ns) {
	let ownedHacks = availableHacks(ns);
	let nHacks = 0;

	for (let i = 0; i < ownedHacks.length; i++)
		if (ns.fileExists(ownedHacks[i]))
			nHacks++;
	return nHacks;
}

export function canHack(ns, server) {
	let playerHackLvl = ns.getHackingLevel();

	if (playerHackLvl < server['req_hacking_lvl'] || nAvailableHacks(ns) < server['ports_req'])
		return false;
	return true;
}

export async function pwnServer(ns, hostname) {
	if (!canHack(ns, hostname))
		return;
	let ownedHacks = availableHacks(ns);

	ns.print("Pwning: " + hostname);
	ownedHacks.push("NUKE.exe")
	for (let i = 0; i < ownedHacks.length; i++)
		ns.run(ownedHacks[i]);
	// ns.installBackdoor();
}

export function findBestTarget(ns, server, best) {
	let currServer;

	if (server['has_child']) {
		for (let i = 0; i < server['children'].length; i++) {
			currServer = server['children'][i];
			if (currServer['has_child'])
				findBestTarget(ns, i, best);
			if (!canHack(ns, currServer))
				continue;
			if (currServer['max_money'] > best['maxMoney']) {
				best['name'] = currServer['name'];
				best['maxMoney'] = currServer['max_money'];
			}
		}
	}
	return best;
}

export async function main(ns) {
	let servers = scanNetwork(ns);
	let target = findBestTarget(ns, servers, best);
	let targetName = target['name'];
	ns.tprint("Best target: " + targetName);
	ns.tprint("Best maxMoney: " + target['maxMoney']);
	pwnServer(ns, targetName);
	ns.tprint(targetName + " pwned.");
}
