import { scanNetwork } from './scan';

/** @param {import('.').NS} ns */
function killAll(ns, server){
	if (server['has_child'])
		for (let i = 0; i < server['children'].length; i++) {
			const e = server['children'][i];
			killAll(ns, e)
		}
	if (ns.hasRootAccess(server['name'])){
		ns.killall(server['name'])
	}
}

/** @param {import('.').NS} ns */
export async function main(ns) {
	killAll(ns, scanNetwork(ns))
}
