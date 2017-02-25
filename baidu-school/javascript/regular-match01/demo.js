(() => {

    let repeatWord = (text) => {
        // 重点，\b 是匹配一个单词的开始和结尾
        // \1 是对 (\w) 的分组
        let reg = /\b(\w+)\s\1\b/;
        return reg.test(text);
    };

    console.log(repeatWord('foo foo bar'));
    console.log(repeatWord('foo bar foo bar'));
    console.log(repeatWord('foo foobar bar'));

    let checkPhone = (phone) => {
        // 手机号码格式参考 https://zhidao.baidu.com/question/2201697602146787788.html?fr=iks&word=%D6%D0%B9%FA%CA%D6%BB%FA%BA%C5%C2%EB%B6%BC%D3%D0%C4%C4%D0%A9&ie=gbk
        // 1、移动号段有134,135,136,137,138,139,147,150,151,152,157,158,159,178,182,183,184,187,188
        // 2、联通号段有130，131，132，155，156，185，186，145，176。
        // 3、电信号段有133，153，177，180，181，189。
        let reg = /^(13[0-9]|14[57]|15[012356789]|17[678]|18[0-9])\d{8}$/;
        return reg.test(phone);
    };
    console.log(checkPhone('18812011232'));
    console.log(checkPhone('18812312'));
    console.log(checkPhone('12345678910'));
})();