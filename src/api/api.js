import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/',
}

async function fetchNewsList() {
    try {
        const response = await axios.get(`${config.baseUrl}news/1.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchAskList() {
    try {
        const resonse = await axios.get(`${config.baseUrl}ask/1.json`);
        return resonse;
    } catch (error) {
        console.log(error);
    }
}

async function fetchJobList() {
    try {
        const response = await axios.get(`${config.baseUrl}jobs/1.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchUserInfo(username) {
    try {
        const response = await axios.get(`${config.baseUrl}user/${username}.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchItemInfo(askId) {
    try {
        const response = await axios.get(`${config.baseUrl}item/${askId}.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchList(pageName) {
    try {
        const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
        return response
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
}