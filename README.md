Package to talk your firewalla box & API

If you want to get your firewalla token, or want to help reverse engineering firewalla, checkout [firewalla-tools](https://github.com/lesleyxyz/firewalla-tools/)

# Examples
```js
import {SecureUtil, FWPingMessage, FWGroup, FWGroupApi} from 'node-firewalla'

// Import your public & private key
SecureUtil.importKeyPair(publicKey, privateKey)

// Login & get firewalla box
let {groups} = await FWGroupApi.login(email)
let fwGroup = FWGroup.fromJson(groups[0], "192.168.1.1")

// Send a ping message
let pingResult = await FWGroupApi.sendMessageBox(fwGroup, true, new FWPingMessage())
```

# API implementations in this repository
## my-firewalla
Requires a fireguard token.

Code to easily access the My Firewalla API

## src
Requires an ETP token & public/private key pair

Code to easily access both the Internal Box API and My Firewalla API.
