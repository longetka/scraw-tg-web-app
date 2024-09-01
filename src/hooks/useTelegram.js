var tg = window.Telegram.WebApp

export function useTelegram() {

    function onClose () {
        tg.close()
    }

    function onAppReady () {
        tg.ready()
    }

    function appExpand () {
        tg.expand()
    }

    return {
        onClose,
        onAppReady,
        appExpand,
        user: tg.initDataUnsafe?.user
    }

}
