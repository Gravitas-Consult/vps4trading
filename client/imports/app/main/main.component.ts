/**
 * Created by jasonk on 5/2/17.
 */
import { Component } from '@angular/core';
import template from "./main.html";

@Component({
    selector: 'vps4trading-app',
    template
})
export class VPS4TradingApp {
    heading = 'VPS4Trading';
    footer = 'Copyrights © 2017 All Rights Reserved by Caprico Ltd.';
    disclaimer = 'Microsoft, MetaTrader, Equinix, and other trademarks are properties of their respective owners.';
    extra_disclaimer = 'VPS4TRADING.com cannot be held liable for system downtime, crashes, or data loss. We cannot be held liable for any predicted estimate of profits in which a client would have gained if their site was functioning. Certain services provided by VPS4TRADING.com are resold. Thus, certain equipment, routing, software, and programming used by VPS4Trading.com are not directly owned or written by VPS4TRADING.com. Moreover, VPS4TRADING.com holds no responsibility for the use of our clients accounts. If any terms or conditions are failed to be followed, the account in question will be automatically deactivated. We reserve the right to remove any account without advanced notice for any reason without restitution as VPS4TRADING.com sees fit. FURTHERMORE, VPS4TRADING.com explicitly retains the right to change any or all of the above Policies, Guidelines, and Disclaimer without notification.';
}