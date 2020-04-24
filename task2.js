function sortArray(arr, order) {
    const properArray = arr.filter(obj => {
      // there is an ivalid date in the example Array '21.13.2002'
      if(Object.keys(obj).length > 0 && new Date(obj["date"]) != "Invalid Date") return obj;
    });

    return order === "asc"
      ? properArray.sort((obj1, obj2) => (new Date(obj1["date"])) - (new Date(obj2["date"])) )
      : properArray.sort((obj1, obj2) => (new Date(obj2["date"])) - (new Date(obj1["date"])) );
  }

  const arrayToSort = [{date: '10.01.2017'}, {date: '05.11.2016'}, {date: '21.13.2002'}];
  console.log(sortArray(arrayToSort, "asc"));
  console.log(sortArray(arrayToSort, "desc"));