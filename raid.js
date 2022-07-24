import { scanNetwork } from './scan';

/** @param {import('.').NS} ns */
function runOnServer(ns, server, target){
	if (server['has_child'])
		for (let i = 0; i < server['children'].length; i++) {
			const e = server['children'][i];
			runOnServer(ns, e, target)
		}
	if (ns.hasRootAccess(server['name'])){
		//let ram = ns.getScriptRam("default.js")
		let ram = 3.5
		let thread = Math.floor(server['max_ram'] / ram)
		ns.print("lauching on: ", server['name']," with threads: ", thread)
		ns.exec("Delivery/default.js", server['name'], thread, target)
	}
}

/** @param {import('.').NS} ns */
export async function main(ns) {
	if (!ns.args[0] || ns.args.length != 1) {
		ns.tprint("Required target hostname as only argument");
		return;
	}
	let hostname = ns.args[0];
	runOnServer(ns, scanNetwork(ns), hostname)
}
