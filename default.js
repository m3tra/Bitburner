/** @param {import('.').NS} ns */
export async function main(ns) {
// Send hostname as argument
	var hostname = ns.args[0];
	var minSec = ns.getServerMinSecurityLevel(hostname);
	var maxMoney = ns.getServerMaxMoney(hostname);
	var currSec;
	var currMoney;
	while (true) {
		currSec = ns.getServerSecurityLevel(hostname);
		currMoney = ns.getServerMoneyAvailable(hostname);
		if (currSec >= minSec + 2) {
			await ns.weaken(hostname);
		} else if (currMoney <= maxMoney - 20000) {
			ns.grow(hostname);
		} else {
			await ns.hack(hostname);
		}
	}
}
