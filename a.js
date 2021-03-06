function print(text){
	document.getElementById("m").innerHTML+=(text);
}

function new_syllable(lenmax,lenmin,slblist){
	var strlen = Math.floor(Math.random()*(lenmax-lenmin)+(lenmin-0));
	var word = "";
	for(var i=0;i<strlen;i++){
		word += choice(slblist);
	}
	return word;
}

function choice(arr){
		return arr[Math.random()*arr.length|0];
	}


function main(){

	var elements = ['私','あなた','彼','私たち','あなたたち','彼ら','これ','あれ','ここ','そこ','誰','何','いつ','どう','ない','ある','すべて','多い','少ない','他','一','二','三','四','五','六','七','八','九','十','大きい','小さい','長い','広い','厚い','重い','小さい','短い','狭い','細い','女','男','人','魔物','神','悪魔','魔法','言葉','する','話す','作る','子','妻','夫','母','父','動物','命','魚','鳥','犬','猫','虱','蛇','虫','木','森','枝','草','実','種','葉','根','樹皮','花','縄','糸','皮膚','血','骨','脂','卵','角','尾','羽','髪','頭','耳','目','鼻','口','歯','舌','爪','足','脚','膝','手','翼','腹','腸','肝','首','背中','胸','心','飲む','食べる','噛む','吸う','吐く','息する','笑う','見る','聞く','知る','思う','嗅ぐ','恐れる','寝る','生きる','死ぬ','殺す','戦う','狩る','打つ','切る','割る','刺す','掻く','書く','掘る','泳ぐ','歩く','来る','横たわる','座る','立つ','回る','落ちる','与える','持つ','絞る','擦る','洗う','拭く','引く','押す','投げる','結ぶ','縫う','数える','縫う','言う','歌う','遊ぶ','浮く','流れる','膨らむ','凍る','太陽','月','星','水','雨','川','湖','海','塩','石','砂','塵','土','雲','虹','霧','空','山','風','雪','氷','煙','火','灰','燃える','道','赤','緑','黄','白','黒','青','色','夜','日（暦）','月（暦）','年','あたたかい','寒い','満ちた','新しい','古い','良い','悪い','腐った','汚い','まっすぐ','丸い','鋭い','鈍い','滑らか','乾燥した','濡れた','正しい','遠い','近い','右','左','とても','まだ','すでに','上手に','こんにちは','ありがとう','さようなら','ごめんなさい','～である','～を','～は','～で','～の中で','～とともに','そして','しかし','～こと','～したい','～できる','～した（過去）','～だろう（未来）','～しなければならない','～ではない','～しろ','～するな','～ならば','～しなくてもいい','ほしい','好き','愛する','～だから','名前','固有名詞1','固有名詞2','固有名詞3','固有名詞4','固有名詞5','固有名詞6']

	print('語彙自動生成システム<br>')

	var con = prompt('コンマで区切って子音を入力:','k,s,t,n,ph,tl')
	var vow = prompt('コンマで区切って母音を入力:','a,i,u,e,o,aa,oy,eau,uh,ar')

	do{
		var slb = prompt('コンマで区切って音節構造を入力（C=子音 V=母音）:','V,CV,VC,CVC,CCV,CCVC,CVV')
		if(slb.replace(/C/g,'').replace(/V/g,'').replace(/,/g,'') !== "") {
			alert('エラー：この項目はC/V以外の文字を入力しないでください')
		} else {break;}
	}while(true)

	

	var lenmin = prompt('単語の音節の最小数は:',3)
	var lenmax = prompt('単語の音節の最大数は:',6)
	var conlist = con.split(',')
	var vowlist = vow.split(',')
	var slblist = slb.split(',')

	

	

	print("【辞書】<br>")
	var dictionary = {};
	for(var i=0;i<elements.length;i++){
		var newword="";	
		var syll = new_syllable(lenmax,lenmin,slblist);
		for(var j=0;j<syll.length;j++){
			newword += syll[j] === 'C' ? choice(conlist) : choice(vowlist)
		}
		dictionary[elements[i]] = newword;
		print(elements[i] + " " + newword + "<br>");
	}


	var race = ['人間','オーク','エルフ','獣人','精霊']
	var race1 = choice(race);
	var race2
	do{
		race2 = choice(race);
	}while(race2 === race1)

	var nation = ['絶対王政','民主化','無血革命','武力政変','恐るべき呪い','平和への祈り','魔術','科学の力','魔王の支配','魔力の暴走','テクノロジーの過剰な発達','生命の異常進化']
	var nation_name1 = ['','','','','','','神聖','新','第二','第三']
	var nation_name2 = ['共和国','帝国','王国','同盟','連合王国','連邦民主共和国','自由国','連合共和国','連邦','','']
	var conflict1 = ['良好である。','良好で、互いに文化的な交流が保たれている。','良好ではないが、平和の道が模索されている。','不良で、種族間の争いが絶えない。']
	var conflict2 = ['思わしくない。','友好である。','常に敵対しており、長年にわたって戦争が続いている。','良好である。','良く、商業や文化面での交流が盛んである。']
	var climate = ['温暖湿潤で、農業に適している','温暖で快適である。','寒冷で、土地の大部分が雪に覆われている。','極めて乾燥しており、ほとんど砂漠に近い荒野が広がっている。','主に雨季と乾季からなる。','豊かな四季を持っている。','地域により様々である。','人為的に管理されている。','厳しく生存には困難を伴う。']
	var population = ['増え続けている。','減少の一途をたどっている。','長らく変化していない。']
	var culture = ['宗教','魔術','放牧','魔法','高度に発達した科学技術','歯車とゼンマイによる機械','情報ネットワーク','農業','軍事産業','宇宙開発事業','性産業','商業']
	var god = ['非常に緩い教義であり、力を失いつつある。','規律が極めて厳しい。','厳格な一神教である。','呪術を中心とした土着宗教である。','精霊信仰などの自然崇拝である。','すでに形骸化している。','聖典を持たず口伝を重視している。']
	var socialstate = ['長い文字記録の歴史を持つ。','文字として記録されるようになってからの歴史は浅い。','種族や文化の違いにより、複数の文字体系で記述される。','彼らの神話では、はるか古代に神から与えられた原初の言葉であるとされている。','正書記法は確立されていない。','方言の差異は激しく、互いに疎通困難である。','豊かな文学が発達している。','この言語は儀式において非常に重視されている。','この言語で記された壮大な叙事詩は有名である。','標準語の普及が進んで久しく、国家の全域で母語として使用されている。','他の少数言語も用いられているようだが、種族間の共通語として重要である。']
	var accent = ['アクセントは平板であり重視されない。','アクセントは話者により一定しない。','アクセントは単語の末尾から2番目の母音に置かれる。','アクセントは単語の最初の母音に置かれる。','アクセントは語末に置かれる','アクセントは品詞により異なる。','アクセントは単語により一定しない。','声調言語としての性質を持つが、記述されないことが多い。']
	var syntax1 = ['SVO','英語同様のSVO','英語に似たSVO','SOV','日本語同様のSOV','日本語に似たSOV','VSO','VOS','OSV','OVS']
	var syntax2 = ['膠着語としての性質を持つ。','活用のない孤立語である。','格は語順により示されることが普通である。','人称による動詞変化がある。','抱合語としての性質を持つ。','かつては複雑な語形変化を有していたが、近年ではクレオール化が進んでおり、過去の言語とはまったく異なる孤立語であると考えられている。']
	var zengo1 = ['先行する。','後置される。']
	var zengo2 = ['前','後ろ']
	var question = ['疑問を表す単語を文頭につける。','疑問を表す単語を文末につける。','文のイントネーションで表され、文の構造に影響を与えない。','語順の変化で示される。','話題になっている単語に、疑問を示す単語を添え、その部分を軽く強調して発音する。']
	
	print('【総説】<br>本書は魔導師scientia minervaにより伝えられた異世界の記録である。この世界に存在する国家は「'+(choice(nation_name1))+(dictionary['固有名詞1'])+(choice(nation_name2))+'」と呼ばれ、今から'+(100*Math.ceil(Math.random()*100))+'年前、'+(choice(nation))+'によって建国された歴史を持つ。主な国民は'+race1+'であるが、少数の'+race2+'も存在している。両者の関係は'+(choice(conflict1))+'気候は'+(choice(climate))+'総人口は'+(1000*Math.ceil(Math.random()*150000))+'と推定され、その数は'+(choice(population))+'隣国である'+(choice(nation_name1))+(dictionary['固有名詞2'])+(choice(nation_name2))+'との関係は'+(choice(conflict2))+'社会の中核をなしているのは'+(choice(culture))+'であり、彼らが信仰する宗教は'+(dictionary['固有名詞3'])+'と呼ばれ、'+(choice(god))+'彼らの話す言語は'+(dictionary['固有名詞4'])+'と呼ばれ、首都のある'+(dictionary['固有名詞5'])+'の方言が標準語とされている。'+(choice(socialstate))+ '音素としては'+(conlist.length)+'種類の子音と、'+(vowlist.length)+'種類の母音が区別され、'+(choice(accent))+'文法の詳細は不明であり、さらなる研究が必要であるが、確認されている情報によれば、基本的語順は'+(choice(syntax1))+'であり、形容詞は名詞に'+(choice(zengo1))+(choice(syntax2))+ '否定を表す単語は、否定したい部分の'+(choice(zengo2))+'に置かれる。一般疑問文は、'+(choice(question))+'なお当調査にあたっては、'+(dictionary['固有名詞4'])+'のネイティブ話者である'+(dictionary['固有名詞6'])+'氏に協力していただいた。以下に現在知られている基礎語彙の一覧を示す。')

}