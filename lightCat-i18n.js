var $lightCat = {
  lang: null,
  data: {},
  i18n: function (langfile) {
    var defaults = {
      language: 'zh-cn.json'
    };
    var settings = Object.assign({}, defaults, langfile);
    var lightlang = new XMLHttpRequest();
    lightlang.open('GET', settings.language, true);
    lightlang.onload = function () {
      if (lightlang.status === 200) {
        $lightCat.lang = lightlang.responseURL.split('.')[0];
        $lightCat.data[$lightCat.lang] = JSON.parse(lightlang.responseText);
        $lightCat.translate();
      }
    }
    lightlang.send();
  },
  translate: function () {
    var key = document.querySelectorAll('[light-i18n]');
    for (var i = 0; i < key.length; i++) {
      var i18nkey = key[i].getAttribute('light-i18n');
      if ($lightCat.data[$lightCat.lang].hasOwnProperty(i18nkey)) { 
        key[i].innerHTML = $lightCat.data[$lightCat.lang][i18nkey];
      }
    }
    var inputs = document.querySelectorAll('[light-i18n-p], [light-i18n-v]');
    for (var j = 0; j < inputs.length; j++) {
      var placeholderKey = inputs[j].getAttribute('light-i18n-p');
      if ($lightCat.data[$lightCat.lang].hasOwnProperty(placeholderKey)) {
        inputs[j].setAttribute('placeholder', $lightCat.data[$lightCat.lang][placeholderKey]);
      }

      var valueKey = inputs[j].getAttribute('light-i18n-v');
      if ($lightCat.data[$lightCat.lang].hasOwnProperty(valueKey)) {
        inputs[j].setAttribute('value', $lightCat.data[$lightCat.lang][valueKey]);
      }
    }
  }
};
