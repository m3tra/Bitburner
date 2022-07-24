var scanned = []

/** @param {import('.').NS} ns */
function scan(ns, host) {
	return ns.scan(host)
}

/** @param {import('.').NS} ns */
function getInfo(ns, host) {
	return {
		'name': host,
		'growth': ns.getServerGrowth(host),
		'max_money': ns.getServerMaxMoney(host),
		'max_ram': ns.getServerMaxRam(host),
		'min_sec_lvl': ns.getServerMinSecurityLevel(host),
		'money': ns.getServerMoneyAvailable(host),
		'ports_req': ns.getServerNumPortsRequired(host),
		'req_hacking_lvl': ns.getServerRequiredHackingLevel(host),
		'sec_lvl': ns.getServerSecurityLevel(host),
		'used_ram': ns.getServerUsedRam(host),
	};
}

/** @param {import('.').NS} ns */
function crawl(ns, list) {
	var all = [];
	for (let i = 0; i < list.length; i++) {
		const element = list[i];
		if (scanned.includes(element)) {
			continue;
		}
		//ns.print("Scanning ", element)
		scanned.push(element)
		let children = crawl(ns, scan(ns, element));
		let server = getInfo(ns, element);
		if (children.length != 0) {
			server['has_child'] = true
			server['children'] = children
		} else {
			server['has_child'] = false
		}
		all.push(server)
	}
	return all;
}

/** @param {import('.').NS} ns */
function infoToPrint(ns, server) {
	let plvl = ns.getPlayer().hacking
	let ret = server['name']
	ret += ' - '
	ret += server['req_hacking_lvl']
	ret += ' - '
	ret += server['ports_req']
	return ret
}

/** @param {import('.').NS} ns */
export function scanNetwork(ns) {
	scanned = []
	return crawl(ns, ['home'])[0]
}

/** @param {import('.').NS} ns */
function print_servers(ns, server, indent) {
	var ret = ''
	ret += '    '.repeat(indent)
	ns.print(server)
	if (true) {
		ret += infoToPrint(ns, server)
		ret += '\n'
	}
	if (!server['has_child'])
		return ret
	for (let i = 0; i < server['children'].length; i++) {
		const e = server['children'][i];
		ns.print(e)
		ret += print_servers(ns, e, indent + 1)
	}
	return ret
}

/** @param {import('.').NS} ns */
export async function main(ns) {
	ns.disableLog('ALL')
	let all = scanNetwork(ns)
	ns.tprint('\n', print_servers(ns, all, 0))
}
