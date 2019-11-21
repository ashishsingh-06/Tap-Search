const InvertedIndex = require('mnemonist/inverted-index');
const word = require('lodash/words');
var index = new InvertedIndex(word);

var document=[];

exports.indexIn = async(result)=>{

        document.push(result);  
        
        document.forEach(element => {
                index.add(element);
        });

}

exports.search = async(result)=>{

        let resultPara = await index.get(result);
        let uniqueArray = [];

        for(let i=0;i<resultPara.length;i++)
        {
                if(uniqueArray.indexOf(resultPara[i])===-1)
                {
                        uniqueArray.push(resultPara[i]);
                }
        }       
        
        return uniqueArray;
}

exports.clear = async()=>{
        resultPara = [];
        index.clear();
        document=[];
}
