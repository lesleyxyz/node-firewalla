import { FWGroupApi } from "../api/index.js";
import { FWGetMessage, FWInitMessage, FWHost } from "../models/index.js";
import { FWGroupService } from "./FWGroupService.js";


interface FWInitSpeedResult {
    timestamp: number,
    result: {
      upload: number,
      download: number,
      latency: number,
      jitter: number,
      ploss: number,
      dlMbytes: number,
      ulMbytes: number
    },
    manual: boolean
}

interface EMember {
    name: string,
    eid: string,
    dName?: string,
    lastVisit?: string
}


interface FWInitResult {
    ruleGroups: any,
    network: {
        name: string,
        uuid: string,
        mac_address: string,
        ip_address: string,
        subnet: string,
        gateway_ip: string,
        gateway: string,
        ip4_addresses: [string],
        ip4_subnets: [string],
        ip4_masks: [string],
        ip6_addresses?: [string],
        ip6_subnets?: [string],
        ip6_masks?: [string],
        gateway6: string,
        dns: [string],
        resolver?: any,
        resolverFromWan: boolean,
        conn_type: string,
        type: string,
        rtid: number,
        searchDomains: [any],
        ready: boolean,
        active: boolean,
        pendingTest: boolean,
        origDns?: any,
        subnetAddress4: {
            valid: boolean,
            address: string,
            groups: number,
            v4: boolean,
            subnet: string,
            subnetMask: number,
            parsedSubnet: string,
            addressMinusSuffix: string,
            parsedAddress: [string]
        }
    },
    cpuid: string,
    uptime: number,
    language: string,
    releaseType: string,
    virtWanGroups: [any],
    vipProfiles: [any],
    policy: any,
    scan: any,
    safeSearchConfig: any,
    activeAlarmCount: number,
    archivedAlarmCount: number,
    jwt: string,
    groupName: string,
    dataUsagePlan: {
        total: number,
        date: number
    },
    btMac: string,
    ddns: string,
    internetSpeedtestResults: [FWInitSpeedResult],
    unboundConfig: {
        upstream: string,
        dnssec: boolean
    },
    mode: string,
    latestAllStateEvents: any,
    latestStateEventsError: any,
    ovpnClientProfiles: [any],
    sslvpnClientProfiles: [any],
    ztvpnClientProfiles: [any],
    nebulavpnClientProfiles: [any],
    trojanvpnClientProfiles: [any],
    clashvpnClientProfiles: [any],
    ipsecvpnClientProfiles: [any],
    tsvpnClientProfiles: [any],
    firmwareReleaseType: string,
    timezone: string,
    features: {
        archiveAlarm: boolean,
        alarmMoreItems: boolean,
        ignoreAlarm: boolean,
        reportAlarm: boolean
        [k: string]: boolean,
    },
    runtimeFeatures: {
        porn: boolean,
        video: boolean,
        game: boolean,
        vpn: boolean,
        large_upload: boolean,
        abnormal_bandwidth_usage: boolean,
        data_plan: boolean,
        data_plan_alarm: boolean,
        new_device: boolean,
        new_device_block: boolean,
        device_online: boolean,
        device_offline: boolean,
        alarm_upnp: boolean,
        alarm_subnet: boolean,
        spoofing_device: boolean,
        vpn_client_connection: boolean,
        cyber_security: boolean,
        "cyber_security.autoBlock": boolean,
        "cyber_security.autoUnblock": boolean,
        vulnerability: boolean,
        redirect_httpd: boolean,
        social_hour: boolean,
        api_relay: boolean,
        vpn_relay: boolean,
        upstream_dns: boolean,
        insane_mode: boolean,
        cpu_monitor: boolean,
        speed_test: boolean,
        doh: boolean,
        safe_search: boolean,
        network_stats: boolean,
        link_stats: boolean,
        network_speed_test: boolean,
        vpn_restore: boolean,
        vpn_disconnect: boolean,
        local_domain: boolean,
        external_scan: boolean,
        alarm_openport: boolean,
        device_service_scan: boolean,
        wireguard: boolean,
        ipv6: boolean,
        adblock: boolean,
        family_protect: boolean,
        internal_scan: boolean,
        acl_audit: boolean,
        acl_alarm: boolean,
        new_device_tag: boolean,
        dual_wan: boolean,
        clash: boolean,
        single_wan_conn_check: boolean,
        accounting: boolean,
        event_collect: boolean,
        network_metrics: boolean,
        network_monitor: boolean,
        dns_proxy: boolean,
        fast_intel: boolean,
        country: boolean,
        dnsmasq_log_allow: boolean,
        digitalfence: boolean,
        compress_flows: boolean,
        rekey: boolean,
        pcap_zeek: boolean,
        pcap_suricata: boolean,
        category_filter: boolean,
        rule_stats: boolean,
        unbound: boolean,
        sys_patch: boolean,
        clashdns: boolean,
        mesh_vpn: boolean,
        [k: string]: boolean
    },
    runtimeDynamicFeatures: {
        ipv6: string,
        dns_proxy: string,
        network_monitor: string,
        adblock: string,
        data_plan: string,
        doh: string,
        new_device_tag: string,
        unbound: string,
        device_service_scan: string,
        family_protect: string,
        safe_search: string,
        [k: string]: string
    },
    isBeta: boolean,
    updateTime: number,
    eMembers: [EMember],
    networkMonitorEvents: [any],
    newAlarms: [any],
    dohConfig: {
        selectedServers: string,
        allServers: [string],
        customizedServers: [any]
    },
    policyRules: [any],
    screentimeRules: [any],
    exceptionRules: [any],
    monthlyDataUsage: {
        monthlyBeginTs: number,
        monthlyEndTs: number,
        totalUpload: number,
        totalDownload: number,
    },
    hosts: [FWHost],
    systemDebug: boolean,
    version: number,
    longVersion: string,
    lastCommitDate: number,
    device: string,
    publicIp: string,
    publicIp6s: [string],
    remoteSupport: boolean
    model: string,
    variant: string
    branch: string,
    license: any,
    ept: {
        gid: string,
        group_member_cnt: string,
        eid: string,
        url: string
    },
    publicIps: {
        [iface: string]: string
    },
    no_auto_upgrade: boolean,
    osUptime, number,
    fanSpeed: string,
    sysMetrics: any,
    wanTestResult: any,
    wlan: any,
    networkConfig: any,
    guardians: [any],
    networkMetrics: any,
    networkProfiles: any,
    last60: any,
    newLast24: any,
    last30: any,
    last12Months: any,
    dhcpPoolUsage: any,
    wgPeers: [any],
    extension: any,
    systemFlows: any,
    vpnProfiles: [any],
    wgvpnClientProfiles: [any]
    nicSpeed?: any,
    nicStates: any,
    versionUpdate: {
        version: number,
        time: number
    },
    customizedCategories: any,
    tags: any,
    profiles: any,
    nameInNotif?: any,
    forceNotifLocal: boolean,
    firstBinding: string,
    bootingComplete: boolean,
    isBindingOpen: number,
    localDomainSuffix: string,
    rkey: any,
    cloudConnected: boolean,
}


export class InitService extends FWGroupService {
    /**
     * @param {string} target - ?? unknown parameter
     */
    async init(target = "0.0.0.0"): Promise<FWInitResult>{
        let msg = new FWInitMessage(target)
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    async liveStats() {
        let msg = new FWGetMessage("liveStats", {
            type: "system",
            target: "",
            queries: {
                throughput: {},
                activeConn: {}
            }
        })
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }
}