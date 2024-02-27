
var cnt = new Array();
cnt[0] = new Array('');
cnt[1] = new Array('구/군','강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구'); //서울
cnt[2] = new Array('구/군','강서구','금정구','남구','동구','동래구','부산진구','북구','사상구','사하구','서구','수영구','연제구','영도구','중구','해운대구','기장군'); //부산
cnt[3] = new Array('구/군','남구','달서구','동구','북구','서구','수성구','중구','달성군'); //
cnt[4] = new Array('구/군','계양구','미추홀구','남동구','동구','부평구','서구','연수구','중구','강화군','옹진군','영종도'); //인천
cnt[5] = new Array('구/군','광산구','남구','동구','북구','서구');
cnt[6] = new Array('구/군','대덕구','동구','서구','유성구','중구');
cnt[7] = new Array('구/군','남구','동구','북구','중구','울주군');
cnt[8] = new Array('구/군','고양시','과천시','광명시','구리시','군포시','남양주시','동두천시','부천시','성남시','수원시','시흥시','안산시','안양시','오산시','의왕시','의정부시','평택시','하남시','가평군','광주시','김포시','안성시','양주시','양평군','여주시','연천군','용인시','이천시','파주시','포천시','화성시');
cnt[9] = new Array('구/군','강릉시','동해시','삼척시','속초시','원주시','춘천시','태백시','고성군','양구군','양양군','영월군','인제군','정선군','철원군','평창군','홍천군','화천군','횡성군');
cnt[10] = new Array('구/군','제천시','청주시','충주시','괴산군','단양군','보은군','영동군','옥천군','음성군','진천군','증평군');
cnt[11] = new Array('구/군','공주시','보령시','서산시','아산시','천안시','금산군','논산시','당진시','부여군','서천군','계룡시','예산군','청양군','태안군','홍성군');
cnt[12] = new Array('구/군','군산시','김제시','남원시','익산시','전주시','정읍시','고창군','무주군','부안군','순창군','완주군','임실군','장수군','진안군');
cnt[13] = new Array('구/군','광양시','나주시','목포시','순천시','여수시','강진군','고흥군','곡성군','구례군','담양군','무안군','보성군','신안군','영광군','영암군','완도군','장성군','장흥군','진도군','함평군','해남군','화순군');
cnt[14] = new Array('구/군','경산시','경주시','구미시','김천시','문경시','상주시','안동시','영주시','영천시','포항시','고령군','군위군','봉화군','성주군','영덕군','영양군','예천군','울릉군','울진군','의성군','청도군','청송군','칠곡군');
cnt[15] = new Array('구/군','거제시','김해시','밀양시','사천시','울산시','진주시','창원시','통영시','거창군','고성군','남해군','산청군','양산시','의령군','창녕군','하동군','함안군','함양군','합천군');
cnt[16] = new Array('구/군','서귀포시','제주시');
cnt[17] = new Array('구/군','세종특별자치시');
function change(add) {
	
	if(signform.city_val) {
		signform.city_val.value = add;
	}
	sel=document.signform.county
	/* 옵션메뉴삭제 */
	for (i=sel.length-1; i>=0; i--){
		sel.options[i] = null
	}
	/* 옵션박스추가 */
	for (i=0; i < cnt[add].length;i++){
		if(cnt[add][i]=='<?=$county?>'){
			sel.options[i].selected = new Option(cnt[add][i], cnt[add][i]);
		}else{
			if(i=="0") {
				sel.options[i] = new Option("구/군", "");
			} else {
				sel.options[i] = new Option(cnt[add][i], cnt[add][i]);
			}
		}
	}
}


function change2(add,add2) {

	if(signform.city_val) {
		//$city_array1 = array('0서울','1부산','2대구','3인천','4광주','5대전','6울산','7경기','8강원','9충청북도','10충청남도','11전라북도','12전라남도','13경상북도','14경상남도','15제주');
		//'1서울','2부산','3대구','4인천','5광주','6대전','7울산','8경기','9강원','10충청북도','11충청남도','12전라북도','13전라남도','14경상북도','15경상남도','16제주'
		if(!add2) {
			if(add==1) {
				add2 = "1";
			} else if(add==2) {
				add2 = "13";
			} else if(add==3) {
				add2 = "8";
			} else if(add==4) {
				add2 = "3";
			} else if(add==5) {
				add2 = "15";
			} else if(add==6) {
				add2 = "5";
			} else if(add==7) {
				add2 = "11";
			} else if(add==8) {
				add2 = "2";
			} else if(add==9) {
				add2 = "12";
			} else if(add==10) {
				add2 = "6";
			} else if(add==11) {
				add2 = "4";
			} else if(add==12) {
				add2 = "9";
			} else if(add==13) {
				add2 = "14";
			} else if(add==14) {
				add2 = "7";
			} else if(add==15) {
				add2 = "10";
			} else if(add==16) {
				add2 = "16";
			} else if(add==17) {
				add2 = "17";
			}
				signform.city_val.value = add2;
		} else {
			signform.city_val.value = add2;
		}
	}
	sel=document.signform.county
	/* 옵션메뉴삭제 */
	for (i=sel.length-1; i>=0; i--){
		sel.options[i] = null
	}
	
	$('#mapareainfo').empty();	//기존내용 비우기
	/* 옵션박스추가 */
	$('#mapareainfo').append('<li><a href="javascript:;" onClick="mapshow();">지도보기</a></li>'); 
	for (i=0; i < cnt[add].length;i++){
		if(cnt[add][i]=='<?=$county?>'){
			sel.options[i].selected = new Option(cnt[add][i], cnt[add][i]);
		}else{
			//option 추가 
			sel.options[i] = new Option(cnt[add][i], cnt[add][i]);
			if(i!="0") {
				val = cnt[add][i];
				idname = "countyid"+i;
				$('#mapareainfo').append('<li><a href="javascript:;" onClick="mapcounty(\''+val+'\')" id='+idname+' class=\'\'>' + cnt[add][i] + '</a></li>'); 
			}
		}
	}
	
	document.getElementById("mapbox").style.display = "none";		//지도 숨김 
	document.getElementById("mapareainfo").style.display="block";	//구/군 출력

}

//지도 보기 
function mapshow() {
	document.getElementById("mapbox").style.display="block";	//지도출력
	document.getElementById("mapareainfo").style.display="none";	//구/군 감추기
}

//구/군 셀렉트처리 
function mapcounty(val) {

	$("#mapareainfo").click(function(e){
        var idval = e.target.getAttribute('id');   // class도 가능             

		var count = $("#mapareainfo a").length; //갯수
		for (i=0; i < count;i++){
			idname = "countyid"+i;

			if(idval==idname) {
				$('#'+idval).addClass('active');	//클릭
			} else {
				$('#'+idname).attr('class','')
			}
		}
		
    });

	$('#county option[value='+val+']').attr('selected', 'selected');	// 구/군 셀렉트 선택 처리
}

