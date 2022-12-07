# node-firewalla
Package to talk your firewalla box & API

If you want to get your firewalla token, or want to help reverse engineering firewalla, checkout [firewalla-tools](https://github.com/lesleyxyz/firewalla-tools/)

If you like my work, give this repository a `⭐` or consider [Buying Me A Coffee ☕](https://www.buymeacoffee.com/lesleydk)

# Installation
```bash
npm install node-firewalla
```

# Examples
```js
import { SecureUtil, NetworkService, FWGroup, FWGroupApi, HostService } from 'node-firewalla'

// Import your public & private key (by file name)
SecureUtil.importKeyPair(publicKey, privateKey)

// Login & get firewalla box
let { groups } = await FWGroupApi.login()
let fwGroup = FWGroup.fromJson(groups[0])

// Send a ping message
let networkService = new NetworkService(fwGroup)
let pingResult = await networkService.ping()

// List all hosts connected to your firewalla
let hostService = new HostService(fwGroup)
let hosts = await hostService.getAll()
```

# Authenticating
## First time
To authenticate the first time with your firewalla box, use the [create-etp-token script in firewalla-tools](https://github.com/lesleyxyz/firewalla-tools/).
This will generate a public & private key that you need to keep.

## Other times
Now you simply have to use SecureUtil to import your keys.
```javascript
import { SecureUtil } from 'node-firewalla'

// using a file name e.g. etp.public.pem
SecureUtil.importKeyPair(publicKeyPath, privateKeyPath)

// using a string e.g. "----BEGIN PUBLIC KEY---- ..."
SecureUtil.importKeyFromString(publicKeyPath, privateKeyPath)
```

Then to get your firewalla box(es) (a.k.a FWGroup), you will have to login first.
```javascript
import { FWGroupApi, FWGroup } from 'node-firewalla'

let { groups } = await FWGroupApi.login()
let fwGroup = FWGroup.fromJson(groups[0], "192.168.1.1")
```
Currently this package doesn't fully support cloud communication, so you will still have to supply your box's IP like above.

Now you can use all the service classes to your hearts content :)

# Services
To use a service, you first have to supply the FWGroup (box) to its constructor, e.g.
```javascript
import { AlarmService } from 'node-firewalla'

// Ignore all current alarms
let alarmService = new AlarmService(fwGroup)
let pingResult = await alarmService.ignoreAll()
```
## AlarmService
Manage alarms
### .getAll
### .getById
### .getDetailsById
### .ignoreAll
### .ignoreById

---

## BoxService
Manage your box
### .shutdown
### .shutdownCancel
### .reboot
### .upgrade

---

## FeatureService
Manage features that your box uses
### .enableFeature
### .disableFeature

---

## HostService
Manage hosts connected to your box
### .getAll
### .wakeHost

---

## InitService
Get initial data of your box
### .init
### .liveStats

---

## NetworkService
Manage your firewalla network
### .ping
### .runSpeedTest
### .getSpeedtestResults
### .getMonthlyDataUsage
### .getLast12MonthlyDataUsage
### .getNetworkMonitorData
### .getDataPlan
### .getMyPublicKey
