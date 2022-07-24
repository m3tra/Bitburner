import {scanNetwork} from "scan.js"

var hacks = []

/** @param {import('.').NS} ns */
function tryHack(ns, server) {
	if (server['ports_req'] >= (hacks.length))
		return
	for (let i = 0; i < server['ports_req']; i++) {
		const e = hacks[i];
		switch (e) {
			case "value":

				break;
		}
	}
	ns.print("nuking: ", server['name'])
	ns.nuke(server['name'])
}

/** @param {import('.').NS} ns */
function procServer(ns, server){
	if (server === undefined)
		return
	if (server['has_child'])
		for (let i = 0; i < server['children'].length; i++) {
			const e = server['children'][i];
			procServer(ns, e)
		}
	if (!ns.hasRootAccess(server['name']))
		tryHack(ns, server)
}

/** @param {import('.').NS} ns */
export async function main(ns) {
	ns.disableLog('ALL');
	(ns.ls('home')).forEach(element => {
		if (element.endsWith('.exe') && !hacks.includes(element))
			hacks.push(element)
	});
	procServer(ns, scanNetwork(ns))
}
