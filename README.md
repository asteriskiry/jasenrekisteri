# Jäsenrekisteri-backend
Membership register backend API for Asteriski ry / Jäsenrekisterin backend API Asteriski ry:n tarpeisiin

Author: [Maks Turtiainen](https://github.com/mjturt)

React frontend is here <https://github.com/asteriskiry/jasenrekisteri-frontend>.

### Tech
- Node.js
- Passport.js
- Express.js
- MongoDB

Minimal [API documentation](./API.md).

### Start

First copy ecosystem.config.js-sample to ecosystem.config.js (and configure it if needed):
```bash
cp ecosystem.config.js-sample ecosystem.config.js
```

Install Docker and Docker-compose. Start Docker and run:
```bash
docker-compose up
```
After that backend is listening at <http://localhost:3001>

Or you can do things manually:

### Manual install

Install node.js, npm and MongoDB.

Start MongoDB with `systemctl start mongodb` or `mongod`.
```bash
cp ecosystem.config.js-sample ecosystem.config.js
npm install
npm start
```
Configure `ecosystem.config.js`-file if needed.

Create default database entries with:
```bash
npm run create-defaults
```
This creates `admin@example.com` -account with password `password`. It creates 3 default products too. In production delete this account after you create some real user account.

Alternatively you can make admin account manually with:
```bash
npm run create-user
```

## Importing data

You can import CSV files with:
```bash
npm run import "<full-path-to-csv>" "<jasenrekisteri-token>" "<id>"
```
For example:
```bash
npm run import "/home/mjt/data.csv" "JWT 12345" "123"
```
You can get id and jasenrekisteri-token by logging in to jäsenrekisteri with admin account and checking cookies with developer tools (Application -> Cookies).

CSV data must be in this format:
```bash
firstname;lastname;utu_mail;membership_approved;membership_ends;hometown;tyy_member;tivia_member;board;
```

## Mail sending

You can send mail to all members with:
```bash
npm run mass-mailer -- -s <subject> -e <path to file that contains email body>
```

## Payment integration

Membership registry has payment integration with [Checkout Finland](https://checkout.fi) provided by finnish bank Osuuspankki.


You can create new products with:
```bash
npm run create-product
```

## Other

Every night backend exports list of members with access rights to our office to be available to university facilities managment.

---
© Maks Turtiainen, Asteriski ry
