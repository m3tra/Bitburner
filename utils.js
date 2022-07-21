/** @param {NS}; ns */
export function alert(ns, msg) { ns.alert(msg); }
export function asleep(ns, millis) { ns.asleep(millis); }
export function atExit(ns, f) { ns.atExit(f); }
export function brutessh(ns, host) { ns.brutessh(host); }
export function clear(ns, handle) { ns.clear(handle); }
export function clearLog(ns) { ns.clearLog(); }
export function clearPort(ns, handle) { ns.clearPort(handle); }
export function closeTail(ns, pid) { ns.closeTail(pid); }
export function deleteServer(ns, host) { ns.deleteServer(host); }
export function disableLog(ns, fn) { ns.disableLog(fn); }
export function enableLog(ns, fn) { ns.enableLog(fn); }
export function exec(ns, script, host, numThreads, args) { ns.exec(script, host, numThreads, args); }
export function exit(ns) { ns.exit(); }
export function fileExists(ns, filename, host) { ns.fileExists(filename, host); }
export function flags(ns, schema) { ns.flags(schema); }
export function ftpcrack(ns, host) { ns.ftpcrack(host); }
export function getBitNodeMultipliers(ns) { ns.getBitNodeMultipliers(); }
export function getFavorToDonate(ns) { ns.getFavorToDonate(); }
export function getGrowTime(ns, host) { ns.getGrowTime(host); }
export function getHackingLevel(ns) { ns.getHackingLevel(); }
export function getHackingMultipliers(ns) { ns.getHackingMultipliers(); }
export function getHacknetMultipliers(ns) { ns.getHacknetMultipliers(); }
export function getHackTime(ns, host) { ns.getHackTime(host); }
export function getHostname(ns) { ns.getHostname(); }
export function getOwnedSourceFiles(ns) { ns.getOwnedSourceFiles(); }
export function getPlayer(ns) { ns.getPlayer(); }
export function getPortHandle(ns, port) { ns.getPortHandle(port); }
export function getPurchasedServerCost(ns, ram) { ns.getPurchasedServerCost(ram); }
export function getPurchasedServerLimit(ns) { ns.getPurchasedServerLimit(); }
export function getPurchasedServerMaxRam(ns) { ns.getPurchasedServerMaxRam(); }
export function getPurchasedServers(ns) { ns.getPurchasedServers(); }
export function getRecentScripts(ns) { ns.getRecentScripts(); }
export function getRunningScript(ns, filename, hostname, args) { ns.getRunningScript(filename, hostname, args); }
export function getScriptExpGain(ns) { ns.getScriptExpGain(); }
export function getScriptExpGain(ns, script, host, args) { ns.getScriptExpGain(script, host, args); }
export function getScriptIncome(ns) { ns.getScriptIncome(); }
export function getScriptIncome(ns, script, host, args) { ns.getScriptIncome(script, host, args); }
export function getScriptLogs(ns, fn, host, args) { ns.getScriptLogs(fn, host, args); }
export function getScriptName(ns) { ns.getScriptName(); }
export function getScriptRam(ns, script, host) { ns.getScriptRam(script, host); }
export function getServer(ns, host) { ns.getServer(host); }
export function getServerBaseSecurityLevel(ns, host) { ns.getServerBaseSecurityLevel(host); }
export function getServerGrowth(ns, host) { ns.getServerGrowth(host); }
export function getServerMaxMoney(ns, host) { ns.getServerMaxMoney(host); }
export function getServerMaxRam(ns, host) { ns.getServerMaxRam(host); }
export function getServerMinSecurityLevel(ns, host) { ns.getServerMinSecurityLevel(host); }
export function getServerMoneyAvailable(ns, host) { ns.getServerMoneyAvailable(host); }
export function getServerNumPortsRequired(ns, host) { ns.getServerNumPortsRequired(host); }
export function getServerRam(ns, host) { ns.getServerRam(host); }
export function getServerRequiredHackingLevel(ns, host) { ns.getServerRequiredHackingLevel(host); }
export function getServerSecurityLevel(ns, host) { ns.getServerSecurityLevel(host); }
export function getServerUsedRam(ns, host) { ns.getServerUsedRam(host); }
export function getSharePower(ns) { ns.getSharePower(); }
export function getTimeSinceLastAug(ns) { ns.getTimeSinceLastAug(); }
export function getWeakenTime(ns, host) { ns.getWeakenTime(host); }
export function grow(ns, host, opts) { ns.grow(host, opts); }
export function growthAnalyze(ns, host, growthAmount, cores) { ns.growthAnalyze(host, growthAmount, cores); }
export function growthAnalyzeSecurity(ns, threads, hostname, cores) { ns.growthAnalyzeSecurity(threads, hostname, cores); }
export function hack(ns, host, opts) { ns.hack(host, opts); }
export function hackAnalyze(ns, host) { ns.hackAnalyze(host); }
export function hackAnalyzeChance(ns, host) { ns.hackAnalyzeChance(host); }
export function hackAnalyzeSecurity(ns, threads, hostname) { ns.hackAnalyzeSecurity(threads, hostname); }
export function hackAnalyzeThreads(ns, host, hackAmount) { ns.hackAnalyzeThreads(host, hackAmount); }
export function hasRootAccess(ns, host) { ns.hasRootAccess(host); }
export function httpworm(ns, host) { ns.httpworm(host); }
export function isLogEnabled(ns, fn) { ns.isLogEnabled(fn); }
export function isRunning(ns, script, host, args) { ns.isRunning(script, host, args); }
export function kill(ns, script) { ns.kill(script); }
export function kill(ns, script, host, args) { ns.kill(script, host, args); }
export function killall(ns, host, safetyguard) { ns.killall(host, safetyguard); }
export function ls(ns, host, grep) { ns.ls(host, grep); }
export function mv(ns, host, source, destination) { ns.mv(host, source, destination); }
export function nFormat(ns, n, format) { ns.nFormat(n, format); }
export function nuke(ns, host) { ns.nuke(host); }
export function peek(ns, port) { ns.peek(port); }
export function print(ns, args) { ns.print(args); }
export function printf(ns, format, args) { ns.printf(format, args); }
export function prompt(ns, txt, options) { ns.prompt(txt, options); }
export function ps(ns, host) { ns.ps(host); }
export function purchaseServer(ns, hostname, ram) { ns.purchaseServer(hostname, ram); }
export function read(ns, handle) { ns.read(handle); }
export function readPort(ns, port) { ns.readPort(port); }
export function relaysmtp(ns, host) { ns.relaysmtp(host); }
export function rm(ns, name, host) { ns.rm(name, host); }
export function run(ns, script, numThreads, args) { ns.run(script, numThreads, args); }
export function scan(ns, host) { ns.scan(host); }
export function scp(ns, files, destination) { ns.scp(files, destination); }
export function scp(ns, files, source, destination) { ns.scp(files, source, destination); }
export function scriptKill(ns, script, host) { ns.scriptKill(script, host); }
export function scriptRunning(ns, script, host) { ns.scriptRunning(script, host); }
export function serverExists(ns, host) { ns.serverExists(host); }
export function share(ns) { ns.share(); }
export function sleep(ns, millis) { ns.sleep(millis); }
export function spawn(ns, script, numThreads, args) { ns.spawn(script, numThreads, args); }
export function sprintf(ns, format, args) { ns.sprintf(format, args); }
export function sqlinject(ns, host) { ns.sqlinject(host); }
export function tail(ns, fn, host, args) { ns.tail(fn, host, args); }
export function tFormat(ns, milliseconds, milliPrecision) { ns.tFormat(milliseconds, milliPrecision); }
export function toast(ns, msg, variant, duration) { ns.toast(msg, variant, duration); }
export function tprint(ns, args) { ns.tprint(args); }
export function tprintf(ns, format, values) { ns.tprintf(format, values); }
export function tryWritePort(ns, port, data) { ns.tryWritePort(port, data); }
export function vsprintf(ns, format, args) { ns.vsprintf(format, args); }
export function weaken(ns, host, opts) { ns.weaken(host, opts); }
export function weakenAnalyze(ns, threads, cores) { ns.weakenAnalyze(threads, cores); }
export function wget(ns, url, target, host) { ns.wget(url, target, host); }
export function write(ns, handle, data, mode) { ns.write(handle, data, mode); }
export function writePort(ns, port, data) { ns.writePort(port, data); }
