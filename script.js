async function getEvents() {
    const resp = await fetch("https://history.muffinlabs.com/date", { mode: 'no-cors'});
    const respData = await resp.json();
    console.log(respData);
}

getEvents();
