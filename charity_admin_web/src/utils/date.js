const date = {
    filter(d) {
        let options = { year: "numeric", month: "long", day: "numeric" };
        let val = d.toLocaleDateString("en-US", options);
        return val;
    },
    format(d) {
        let order = date.setOrder(parseInt(d.getDate()));

        return `${d.toLocaleString("en-us", {
            weekday: "short",
        })},${d.toLocaleString("en-us", {
            month: "short",
        })} ${d.getDate()} ${order}`;
    },

    usaDate(d) {
        let date = new Date(d);
        let newdate = `${date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
            }`;
        return newdate;
    },
    usaTime(d) {
        let date = new Date(d);
        let newdate = `${date.getHours() + 1 + ":" + date.getMinutes() + ":" + date.getSeconds()
            }`;
        return newdate;
    },
    setOrder(day) {
        if (day > 3 && day < 21) return "th";
        switch (day % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
};

export default date;