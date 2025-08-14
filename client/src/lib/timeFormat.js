const timeFormat = (minutes)=> {
    const hour = Math.floor(minutes / 60);
    const minutesRemainder = minutes % 60;
    return `${hour} h and ${minutesRemainder} m`;
}

export default timeFormat;