/** @param {NS} ns */
export async function weaken(ns, hostname) {
	var minSec = ns.getServerMinSecurityLevel(hostname);
	var currSec = ns.getServerSecurityLevel(hostname);

	if (currSec != minSec) {
		ns.print("Weakening...");
	}
	while (currSec > minSec) {
		currSec = ns.getServerSecurityLevel(hostname);
		await ns.weaken(hostname);
	}
}

export async function grow(ns, hostname) {
	var maxMoney = ns.getServerMaxMoney(hostname);
	var currMoney = ns.getServerMoneyAvailable(hostname);

	if (currMoney != maxMoney)
		ns.print("Growing...");
	while (currMoney < maxMoney) {
		currMoney = ns.getServerMoneyAvailable(hostname);
		await ns.grow(hostname);
	}
}

export async function hack(ns, hostname) {
	await ns.hack(hostname);
}
