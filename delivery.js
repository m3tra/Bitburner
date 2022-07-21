/** @param {NS} ns */
export async function main(ns) {
	var target;
	var deliveryFiles;
	
	if (!ns.args[0] || ns.args.length != 1) {
		ns.tprint("Required target hostname as only argument");
		return;
	}
	target = ns.args[0];
	deliveryFiles = ns.ls("home", "Delivery");
	await ns.scp(deliveryFiles, target);
}
