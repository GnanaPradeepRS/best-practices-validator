const childKeywordChecker = (br , parent , child) => {
    let keywordIndex = br.indexOf(parent);
    if (keywordIndex !== -1) {
        let braceStartIndex = br.indexOf('[' , keywordIndex);
        let braceEndIndex = null
    
        for (let i = braceStartIndex ; i < br.length; i++) {
              if (matchString(br.slice(braceStartIndex , i+1))) {
                  braceEndIndex = i;
                  break;
              }
        }

    return br.slice(braceStartIndex , braceEndIndex).includes(child)
    }
    else{
        return false
    }
}

const matchString = (str) =>{
    let stack = [];
    let flag = true;
    for (let char of str) {
        if (char === '['){
            stack.push(char)
        }
        else if (char === ']') {
            if (stack.length === 0) {
                flag = false
            }
            let topElement = stack.pop()
            
            if ((compare(topElement , char) === false)) {
                flag = false
            }
        }     
    }
    if (stack.length !== 0) {
        flag = false
    }
    if (flag === false) {
        return false
    }
    else{
        return true
    }
}

const compare = (open , close) => {
    if (open === '[' && close === ']'){
        return true
    }
}

const counter = (keyword , br) => {
    let kew = RegExp(keyword)
    return br.split(kew).length-1;
}

module.exports = {
    childKeywordChecker : childKeywordChecker,
    matchString : matchString,
    compare : compare,
    counter : counter
}