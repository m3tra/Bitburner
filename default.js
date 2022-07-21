/** @param {NS} ns */
export async function main(ns) {
// Send hostname as argument
	var hostname = ns.args[0];
	var minSec = ns.getServerMinSecurityLevel(hostname);
	while (true) {
		var currSec = ns.getServerSecurityLevel(hostname);
		if (currSec >= minSec + 2) {
			await ns.weaken(hostname);
		}
		var currMoney = ns.getServerMoneyAvailable(hostname);
		if (currMoney < 20000) {
			ns.grow(hostname);
		}
		await ns.hack(hostname);
	}
}
