import axiosClient from './axios';

const getLaunchData = async (startDate: string, endDate: string) => {
    console.log('startDate::: ', startDate);
    console.log('endDate:: ', endDate);
    const response = await axiosClient.get(`/launch?window_start__gte=${startDate}&window_end_lte=${endDate}`);
    console.log('response::', response);
    const launches = response?.data?.results;
    const launchData = launches?.map((launch: any) => {
        return {
            name: launch?.name,
            coordinates: [launch?.pad?.longitude || 0, launch?.pad?.latitude || 0],
            start_time: launch?.window_start || '',
            end_time: launch?.window_end,
            launch_pad: launch?.pad?.name,
            agency: launch?.pad?.agency_id || 'Unknown',
        };
    });
    return launchData;
};

const getDefaultLaunchData = async () => {
    const date = new Date();
    const startDate = new Date().toISOString();
    const endDate = new Date(date.setMonth(date.getMonth() + 3)).toISOString();
    return getLaunchData(startDate, endDate);
};

const services = {
    getLaunchData,
    getDefaultLaunchData,
};

export default services;