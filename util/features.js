//Addtion of feature detection functions

export function isTouchDevice() {
    return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}
export function isLocalStorageSupported() {
    try {
        const testKey = '__test__';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }   
}
export function isSessionStorageSupported() {
    try {
        const testKey = '__test__';
        sessionStorage.setItem(testKey, testKey);
        sessionStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }   
}   
export function isGeolocationSupported() {
    return 'geolocation' in navigator;
}   
export function isWebWorkerSupported() {
    return !!window.Worker;
}   
export function isServiceWorkerSupported() {
    return 'serviceWorker' in navigator;
}
export function isNotificationSupported() {
    return 'Notification' in window;
}   
export function isCanvasSupported() {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}   
export function isWebGLSupported() {
    try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
        return false;
    }
}   
export function isWebRTCSupported() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}   
export function isIndexedDBSupported() {
    return 'indexedDB' in window;
}   
export function isFileAPISupported() {
    return !!(window.File && window.FileReader && window.FileList && window.Blob);
}
export function isDragAndDropSupported() {
    const div = document.createElement('div');
    return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
}   
export function isHistoryAPISupported() {
    return !!(window.history && history.pushState);
}