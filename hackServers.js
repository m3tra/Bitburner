import {scanNetwork} from "scan.js"

var hacks = []
var count = 0

/** @param {import('.').NS} ns */
function tryHack(ns, server) {
	if (server['ports_req'] > (hacks.length))
		return
	for (let i = 0; i < server['ports_req']; i++) {
		const e = hacks[i];
		switch (e) {
			case "BruteSSH.exe":
				ns.brutessh(server['name'])
				break;
			case "FTPCrack.exe":
				ns.ftpcrack(server['name'])
				break;
			case "relaySMTP.exe":
				ns.relaysmtp(server['name'])
				break;
			case "HTTPWorm.exe":
				ns.httpworm(server['name'])
				break;
			case "SQLInject.exe":
				ns.sqlinject(server['name'])
				break;
		}
	}
	ns.print("nuking: ", server['name'])
	count++
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
	else
		count++
}

/** @param {import('.').NS} ns */
export async function main(ns) {
	ns.disableLog('ALL');
	(ns.ls('home')).forEach(element => {
		if (!["fl1ght.exe", "NUKE.exe", "AutoLink.exe", "Formulas.exe", "DeepscanV1.exe", "DeepscanV2.exe", "ServerProfiler.exe"].includes(element)
			&& element.endsWith('.exe') && !hacks.includes(element))
			hacks.push(element)
	});
	count = 0
	procServer(ns, scanNetwork(ns))
	ns.tprint("You have access to ", count, " servers.")
}
