export interface FWHost {
    dtype: {
        human: number
    },
    ip: string,
    ipv6: [string],
    mac: string,
    lastActive: string,
    firstFound: string,
    macVendor: string,
    recentActivity: string,
    dhcpName: string,
    bonjourName: string,
    userLocalDomain: string,
    localDomain: string,
    intf: string,
    stpPort: string,
    bname: string,
    names: [string],
    activities: [any],
    name: string,
    policy: {
        devicePresence: boolean,
        deviceOffline: boolean,
        adblock: boolean,
        blockin: boolean,
        family: boolean,
        monitor: boolean,
        device_service_scan: boolean,
        tags: [string],
        safeSearch: {
          state: boolean
        },
        ipAllocation: {
          allocations: any,
          dhcpIgnore: boolean
        },
        vpnClient: {
          state: boolean
        },
        dnsmasq: {
          dnsCaching: boolean
        },
        doh: {
          state: boolean
        },
        acl: boolean,
        aclTimer: any
    },
    tags: [string],
    flowsummary: {
        inbytes: number,
        outbytes: number,
    },
    openports: {
        lastActiveTimestamp: number
    }
}