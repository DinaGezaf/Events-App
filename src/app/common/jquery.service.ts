import { InjectionToken } from "@angular/core"

export const JQ_TOKEN = new InjectionToken<Object>('jQuery')
declare let $: any;