/** @param {import('.').NS} ns */
import { weaken, grow, hack } from './Delivery/attack.js'
export async function main(ns) {
// Send hostname as argument
	var hostname;
	
	if (!ns.args[0] || ns.args.length != 1) {
		ns.tprint("Required target hostname as only argument");
		return;
	}
	hostname = ns.args[0];
	while (true) {
		await weaken(ns, hostname);
		await grow(ns, hostname);
		await hack(ns, hostname);
	}
}
