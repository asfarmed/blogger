 
 $(document).on('change keyup', '.form-control', function(e){
   let Disabled = true;
    $(".form-control").each(function() {
      let value = this.value
      if ((value)&&(value.trim() !=''))
          {
            Disabled = false
          }else{
            Disabled = true
            return false
          }
    });
   
  
 });


$( "#gens" ).click(function() {



  var stName = $("#cs-ass-name").val();



$("#gencontent").hide();
$("#demoandsave").show();



  var stUrl = $("#cs-ass-url").val();
  var stAddress =$("#cs-ass-address").val();
  var stCity = $("#cs-ass-city").val();
  var stState = $("#cs-ass-state option:selected").text();
  var stMail = $("#cs-ass-mail").val();
  var stZip =$("#cs-ass-zip").val();



var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();
var date = d.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;




var prvc ="<div dir='rtl'> <center> <h3>سياسة الخصوصية لموقع <a href='"+stUrl+"'>"+stName+"</a></h3> </center> <p>يعطي موقع <a href='"+stUrl+"'>"+stName+"</a> بالغ الأهمية للاحتفاظ بسرية وأمان معلوماتكم الشخصية، وهي أي معلومات عنكم تزودوننا بها عند استخدام موقعنا، ومثال المعلومات التي تقدمونها عند التسجيل للحصول على حساب مستخدم أو عند الدخول في تعاملات عبر الموقع والتي قد تتضمن (على سبيل المثال لا الحصر) اسمك ومعلومات الاتصال والجنس وتاريخ الميلاد والمهنة وبريدك الالكتروني ؛ كما أن أي إشارة لـ 'نحن' و'لنا' و 'نا' تُعتبَر إشارة إلى اسم الموقع.</p> <p>قد يخضع هذا الإشعار للتعديل أو التحديث من وقت لآخر بحيث يعكس التغيرات الطارئة على ممارساتنا فيما يتعلق بمعالجة البيانات الشخصية، أو حسبما يقتضي القانون. ونحن نحثكم على قراءة الإشعار بعناية، ومتابعة هذه الصفحة بانتظام للاطلاع على أي تغييرات قد نجريها وفق شروط هذا الإشعار.</p> <h3> ما هي المعلومات التي نجمعها؟</h3> <p>نقوم بتجميع المعلومات منك عند الاشتراك في نشرتنا الإخبارية.</p> <p>سيتم تحديد أي بيانات نطلبها غير مطلوبة على أنها اختيارية أو غير اختيارية.</p> <p>عند الطلب أو التسجيل على موقع <a href='"+stUrl+"'>"+stName+"</a> ، حسب الاقتضاء ، قد يُطلب منك إدخال: الاسم ، أو البريد الإلكتروني ، أو رقم الهاتف. يمكنك، ومع ذلك يمكنك الدخول والتعليق في الموقع بصفة مجهول .</p> <h3>في ماذا نستخدم المعلومات الخاصة بك؟</h3> <p>يمكن استخدام أي من المعلومات التي نجمعها منك لإرسال رسائل بريد إلكتروني دورية.</p> <p>يمكن استخدام عنوان البريد الإلكتروني الذي تقدمه لمعالجة الطلب ، لإرسال معلومات وتحديثات تتعلق بطلبك أو استفسارك ، بالإضافة إلى ارسال أخبار الشركة ، أو تحديثات ، أو عروض ترويجية ، أو معلومات متعلقة بالمنتج أو الخدمة ، إلخ.</p> <p><b>ملاحظة:</b> إذا كنت ترغب في أي وقت في إلغاء الاشتراك من تلقي رسائل البريد الإلكتروني في المستقبل ، فإننا نقوم بتضمين تعليمات إلغاء الاشتراك التفصيلية في أسفل كل رسالة بريد إلكتروني.</p> <h3>كيف نحمي معلوماتك؟</h3> <p>ننفذ مجموعة من الإجراءات الأمنية للحفاظ على سلامة معلوماتك الشخصية عند إدخال المعلومات الشخصية أو إرسالها أو الوصول إليها. تتضمن إجراءات الأمان هذه: الدلائل المحمية بكلمة مرور وقواعد البيانات لحماية المعلومات الخاصة بك.</p> <p>نحن نقدم استخدام خادم آمن. يتم نقل جميع المعلومات الحساسة / الائتمانية المقدمة عبر تقنية طبقة المقابس الآمنة (SSL) ثم يتم تشفيرها في قاعدة بيانات مزودي بوابات الدفع فقط للوصول إليها من قبل المفوضين ذوي حقوق الوصول الخاصة لهذه الأنظمة ، والمطلوب للحفاظ على سرية المعلومات.</p> <p>بعد المعاملة ، لن يتم تخزين معلوماتك الخاصة (بطاقات الائتمان ، أرقام الضمان الاجتماعي ، البيانات المالية ، إلخ) على خوادمنا.</p> <h3>هل نستخدم ملفات تعريف الارتباط؟</h3> <p>موقع <a href='"+stUrl+"'>"+stName+"</a> قد يستخدم الكوكيز لتخزين المعلومات عن إعدادات الزوار ، و يتم تسجيل معلومات محددة عن المستخدم عند دخول أو زيارة إحدى الصفحات ، و يتم تخصيص محتوى صفحة ويب استنادا إلى نوع المتصفح الزوار أو معلومات أخرى عندما يرسل الزائر معلومات عبر المتصفح.</p> <h3>هل نفصح عن أي معلومات للأطراف الخارجية؟</h3> <p>نحن لا نبيع أو نتاجر أو ننقل معلوماتك الشخصية إلى الأطراف الخارجية. لا يشمل ذلك الجهات الخارجية الموثوقة التي تساعدنا في تشغيل موقعنا على الويب ، أو إجراء أعمالنا ، أو خدمتك ، طالما أن هذه الأطراف توافق على الحفاظ على سرية هذه المعلومات. يجوز لنا أيضًا الإفصاح عن معلوماتك عندما نعتقد أن ذلك مناسب للامتثال للقانون ، أو فرض سياسات موقعنا ، أو حماية حقوقنا أو حقوق الآخرين أو الممتلكات أو السلامة.</p> <p> ومع ذلك ، يمكن تقديم معلومات الزوار التي لا تمكن من التعرف على شخصيتهم لأطراف أخرى للتسويق أو الإعلان أو استخدامات أخرى. الالتزام بقانون حماية الخصوصية على الإنترنت.</p> <p>نظرًا لأننا نقدر خصوصيتك ، فقد اتخذنا الاحتياطات اللازمة للامتثال لقانون حماية خصوصية عبر الإنترنت. لذلك لن نقوم بتوزيع معلوماتك الشخصية إلى أطراف خارجية دون موافقتك.</p> <h3>السبام والرسائل غير المرغوب فيها</h3> <p>لقد اتخذنا الخطوات اللازمة لضمان التزامنا بقانون <a href='https://en.wikipedia.org/wiki/CAN-SPAM_Act_of_2003'>CAN-SPAM</a> لعام 2003 من خلال عدم إرسال معلومات مضللة أبدًا.</p> <h3>سياسة الخصوصية على الإنترنت فقط</h3> <p>تنطبق سياسة الخصوصية عبر الإنترنت هذه فقط على المعلومات التي يتم جمعها من خلال موقعنا الإلكتروني وليس على المعلومات التي يتم جمعها دون الاتصال بالإنترنت.</p> <h3>الأحكام والشروط</h3> <p>يرجى أيضًا زيارة قسم الشروط والأحكام لدينا الذي يحدد الاستخدام وإخلاء المسؤولية وحدود المسؤولية التي تحكم استخدام موقعنا على الويب.</p> <h3>موافقتك</h3> <p>باستخدام موقعنا ، فإنك توافق على سياسة الخصوصية الخاصة بنا.</p> <h3>التغييرات على سياسة الخصوصية الخاصة بنا</h3> <p>إذا قررنا تغيير سياسة الخصوصية الخاصة بنا ، سنقوم بنشر هذه التغييرات على هذه الصفحة ، و / أو تحديث تاريخ تعديل سياسة الخصوصية أدناه. لن يتم تطبيق تغييرات السياسة إلا على المعلومات التي تم جمعها بعد تاريخ التغيير. </p> <p>آخر تعديل لهذه السياسة هو <b>"+date+"</b></p> <h3>الاتصال بنا</h3> <p>إذا كان هناك أي أسئلة بخصوص سياسة الخصوصية هذه ، فيمكنك الاتصال بنا باستخدام المعلومات أدناه :</p> البريد الالكتروني : <b>"+stMail+"</b> <br/> العنوان الخاص بنا : <b>"+stAddress+"</b> <br/> المدينة : <b>"+stCity+"</b> <br/>الدولة :<b>"+stState+"</b> <br/> صندوق البريد :<b>"+stZip+"</b> <h3>تعهد موقع بشأن سياسة الخصوصية</h3> <p>نتعهد لك ، عملائنا ، بأننا بذلنا جهودًا متفانية لجعل سياسة الخصوصية الخاصة بنا تتماشى مع قوانين ومبادئ الخصوصية الهامة التالية: </p> <p>قانون التجارة الفيدرالية العادلة </p> <p>قانون حماية الخصوصية على الإنترنت </p> <p>تحالف الخصوصية الذي يتحكم في الاعتداء على غير التماس قانون المطبوعات والتسويق </p> <p>حماية الخصوصية الخصوصية المتطلبات</p> <p>القوانين المحلية الخاصة بالانترنت.</p> <br/> <b>انتهى</b> </div>";

  


$("#prvcnt").val(prvc);
$("#demo-output-privacy").append(prvc);
$(".demoprv").show();


});
 //]]>
 
function download(filename, text) {
event.preventDefault();
  var pom = document.createElement(&#39;a&#39;);
  pom.setAttribute(&#39;href&#39;, &#39;data:text/plain;charset=utf-8,&#39; + 

encodeURIComponent(text));
  pom.setAttribute(&#39;download&#39;, filename);

  pom.style.display = &#39;none&#39;;
  document.body.appendChild(pom);

  pom.click();

  document.body.removeChild(pom);
}

function addTextHTML()
{
    document.addtext.name.value = document.addtext.name.value + &quot;.html&quot;
}

function addTextTXT()
{
    document.addtext.name.value = document.addtext.name.value + &quot;.txt&quot;
}



//<![CDATA[    
function saveSettings() {
    localStorage.name = $('#cs-ass-name').val();
    localStorage.url = $('#cs-ass-url').val();
    localStorage.address = $('#cs-ass-address').val();
    localStorage.city = $("#cs-ass-city").val();
    localStorage.state = $("#cs-ass-state option:selected").text();
    localStorage.mail = $("#cs-ass-mail").val();
    localStorage.zip = $("#cs-ass-zip").val();

}


$("#gen").on('click', function(){
    saveSettings();
});
var currentTab = 0; 
showTab(currentTab); 
function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("prevBtn").style.display = "none";

    document.getElementById("nextBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").innerHTML = "التالي";
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}


function download(){
    var text = document.getElementById("prvcnt").value;
    text = text.replace(/\n/g, "\r\n"); 
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "Prevacy.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
