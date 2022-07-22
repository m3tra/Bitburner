/** @param {NS} ns */
export async function weaken(ns, hostname) {
	let minSec = ns.getServerMinSecurityLevel(hostname);
	let currSec = ns.getServerSecurityLevel(hostname);
	let prediction = ns.weakenAnalyze(1);

	ns.print("prediction: " + prediction);
	if (currSec - prediction < minSec)
		return;
	while (currSec > minSec) {
		ns.print("Weakening...");
		currSec = ns.getServerSecurityLevel(hostname);
		await ns.weaken(hostname);
	}
}

export async function grow(ns, hostname) {
	let maxMoney = ns.getServerMaxMoney(hostname);
	let currMoney = ns.getServerMoneyAvailable(hostname);
	let growthParam = ns.getServerGrowth(hostname);

	ns.print("growthParam: " + growthParam);
	if (currMoney * (growthParam / 100) > maxMoney)
		return;
	while (currMoney < maxMoney) {
		ns.print("Growing...");
		currMoney = ns.getServerMoneyAvailable(hostname);
		await ns.grow(hostname);
		await weaken(ns, hostname);
	}
}

export async function hack(ns, hostname) {
	await ns.hack(hostname);
}
