function analyze()
{
    var t = document.getElementById("txt1").value
    // handle empty
    if(t.trim() == "")
    {
        alert("please write something")
        document.getElementById("output").innerHTML = ""
        return
    }

    // character count
    var c = t.length

    // word count (handling multiple spaces)
    var arr = t.trim().split(" ")
    var count = 0

    for(var i=0; i<arr.length; i++)
    {
        if(arr[i] != "")
        {
            count = count + 1
        }
    }

    // reverse text
    var rev = ""
    var temp = t.split("")
    var revArr = temp.reverse()

    for(var j=0; j<revArr.length; j++)
    {
        rev = rev + revArr[j]
    }

    document.getElementById("output").innerHTML =
    "Total Characters: " + c + "<br>" +
    "Total Words: " + count + "<br>" +
    "Reverse Text: " + rev

}
