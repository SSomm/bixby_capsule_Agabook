
// 내위치를 기반으로 Daum Place API 호출하여 소아과 5곳을 
var http = require('http');
var console = require('console');
var fail = require('fail');

module.exports.function = function getNearHospital (pointPair) {

  var kakao_key = 'KakaoAK 54674a3caaf700359fd2fd5233c81b4c';

  let options = { 
    format: 'json',
    headers: {
      'Authorization': kakao_key
    },
    query: {
      //query :'소아과',      //검색 텍스트
      x : pointPair.longitude,
      y : pointPair.latitude,
      radius: 2000    //검색 시작 위치 '126.827496,37.567910'
    },
    encoding:'utf-8'
  };


  let ret_json = http.getUrl('https://dapi.kakao.com/v2/local/search/keyword.json?query=소아과', options);

  console.log("all json str: " + ret_json);
  
  var cnt = ret_json.meta.total_count;  // json hospital counts
  var name_list = [];
  var address_list = [];
  var phone_list = [];
  var url_list = []; 
  var x_list = [];
  var y_list = [];

  for (var i=0; i<cnt-3; i++) {
    console.log(ret_json.documents[i]);
    name_list.push(ret_json.documents[i].place_name);
    console.log(ret_json.documents[i].place_name);
    address_list.push(ret_json.documents[i].road_address_name);
    phone_list.push(ret_json.documents[i].phone);
    url_list.push(ret_json.documents[i].place_url);
    x_list.push(ret_json.documents[i].x);
    y_list.push(ret_json.documents[i].y);
    // console.log(ret_json.documents[i]);
  }

  return {
    hospitalName : name_list,
    hospitalAddress : address_list,   //도로주소
    hospitalPhone: phone_list,
    placeUrl : url_list,
    xcoordinates : x_list,
    ycoordinates: y_list
  };
  
}
