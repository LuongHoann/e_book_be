import { I18nContext, I18nService } from "nestjs-i18n";


export function translate( i18n : I18nService,  mes ){
    return i18n.t(mes, { lang: I18nContext.current()?.lang });
}
