class GoogleAnalytics extends HTMLElement {
    connectedCallback() {
        const data = window.ftd.component_data(this);
        const measurementId = data.measurement_id.get();

        if (!measurementId) {
            console.error('Google Analytics Measurement ID is not provided');
            return;
        }

        if (!window.dataLayer) {
            console.info('Google Analytics dataLayer is not initialized, initializing it now');
            window.dataLayer = [];
            function gtag(){ dataLayer.push(arguments); }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', measurementId);
        }

        if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`)) {
            console.info('Google Analytics script is not loaded, loading it now');
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
            document.head.appendChild(script);
        }

        console.log("%cGoogle Analytics initialized successfully!", "color: green;");
    }
}

customElements.define('google-analytics', GoogleAnalytics);
