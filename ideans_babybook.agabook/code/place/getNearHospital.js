
// 내위치를 기반으로 Naver Place API 호출하여 소아과 5곳을 

var http = require('http');
var console = require('console');
var config = require('config');
var fail = require('fail');

module.exports.function = function getNearHospital (pointPair) {
  const NAVER_CLIENT_ID     = 'etz33vqbyp';
  var secretValue = secret.get('SECRETKEY');

  var location_str = pointPair.longitude + ',' + pointPair.latitude;

  let options = { 
    format: 'json',
    headers: {
      'X-NCP-APIGW-API-KEY-ID':NAVER_CLIENT_ID,
      'X-NCP-APIGW-API-KEY': secretValue
    },
    query: {
      query :'소아과',      //검색 텍스트
      coordinate : location_str    //검색 시작 위치 '126.827496,37.567910'
      //orderBy:'popularity'    //  weight: 내부 알고리즘에 따른 순서(기본값), popularity: 인기순
    }
  };


  let ret_json = http.getUrl('https://naveropenapi.apigw.ntruss.com/map-place/v1/search?', options);

  if (ret_json.status != "OK") {
    throw Error ("APIError"); // 맞나 모르겠넹...
  
  } else {
    console.log("all json str: " + ret_json);
    console.log("first item name: " + ret_json.places[0].name);

    var cnt = ret_json.meta.count;  // json hospital counts
    var name_list = [];
    var address_list = [];
    var phone_list = [];


    for (var i=0; i<cnt; i++) {
      name_list.push(ret_json.places[i].name);
      address_list.push(ret_json.places[i].road_address);
      phone_list.push(ret_json.places[i].phone_number);
    }

    return {
      hospitalName : name_list,
      hospitalAddress : address_list,   //도로주소
      hospitalPhone: phone_list
    };

  }
  
}
