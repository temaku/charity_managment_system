const formatter = {
  tin(v) {
    if (!v || v === undefined) return v;
    else {
      var r = v.replace(/\D/g, "");
      if (r.length > 9) {
        r = r.replace(/^(\d\d)(\d{2})(\d{0,4}).*/, "$1-$2$3");
        return r;
      } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,3})/, "$1-$2");
      } else {
        r = r.replace(/^(\d*)/, "$1");
      }
      return r;
    }
  },
  date(v) {
    if (!v || v === undefined) return v;
    else {
      var r = v.replace(/\D/g, "");
      if (r.length > 9) {
        r = r.replace(/^(\d\d)(\d{2})(\d{0,4}).*/, "$1/$2/$3");
        return r;
      } else if (r.length > 4) {
        r = r.replace(/^(\d\d)(\d{2})(\d{0,4}).*/, "$1/$2/$3");
      } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,3})/, "$1/$2");
      } else {
        r = r.replace(/^(\d*)/, "$1");
      }
      return r;
    }
  },
  currency(amount) {
    let number = `${amount}`.replaceAll(",", "");
    if (!isNaN(parseFloat(number))) {
      return Number(number).toLocaleString();
    } else return "";
  },
  usaSSN(v) {
    if (!v || v === undefined) return v;
    else {
      var r = v.replace(/\D/g, "");
      if (r.length > 9) {
        r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/, "$1-$2-$3");
        return r;
      } else if (r.length > 4) {
        r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/, "$1-$2-$3");
      } else if (r.length > 2) {
        r = r.replace(/^(\d\d\d)(\d{0,3})/, "$1-$2");
      } else {
        r = r.replace(/^(\d*)/, "$1");
      }
      return r;
    }
    // if (!val || val === undefined) return val;
    // else {
    //   val = val.replace(/\D/g, "");
    //   val = val.replace(/^(\d{3})/, "$1-");
    //   val = val.replace(/-(\d{2})/, "-$1-");
    //   val = val.replace(/(\d)-(\d{4}).*/, "$1-$2");
    //   return val;
    // }
  },
  zipcode(zipcode) {
    var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
    return zipCodePattern.test(zipcode);
  },
  phone(phone) {
    if (!phone || phone === undefined) return phone;
    else {
      let val = phone
        .replace(/\D/g, "")
        .replace(/^(\d)/, "($1")
        .replace(/^(\(\d{3})(\d)/, "$1) $2")
        .replace(/(\d{3})(\d{1,5})/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");

      return val;
    }
  },
};

export default formatter;
