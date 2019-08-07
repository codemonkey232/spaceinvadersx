var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.spaceinvadersx;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '3EFCB8F1C8F15D6891DCCB584874913D';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {3:1, 6:1, 10:1, 15:1, 5:1}, $intern_2 = {3:1, 5:1}, $intern_3 = {3:1, 47:1, 83:1}, $intern_4 = {3:1, 6:1, 10:1, 5:1}, $intern_5 = {3:1, 16:1, 8:1, 12:1}, $intern_6 = {3:1, 6:1, 5:1}, $intern_7 = {22:1, 42:1, 3:1, 9:1, 7:1}, $intern_8 = {22:1, 43:1, 3:1, 9:1, 7:1}, $intern_9 = {20:1, 3:1, 9:1, 7:1}, $intern_10 = {22:1, 73:1, 3:1, 9:1, 7:1}, $intern_11 = {22:1, 33:1, 3:1, 9:1, 7:1}, $intern_12 = {78:1, 3:1, 16:1, 8:1, 12:1}, $intern_13 = 4194303, $intern_14 = 524288, $intern_15 = {67:1, 51:1, 60:1, 59:1, 68:1, 45:1, 40:1}, $intern_16 = {114:1}, $intern_17 = {46:1}, $intern_18 = {82:1}, $intern_19 = 65536, $intern_20 = 16777216, $intern_21 = 33554432, $intern_22 = 67108864, $intern_23 = {3:1}, $intern_24 = -2147483648, $intern_25 = 65535, $intern_26 = {3:1, 6:1, 10:1, 15:1, 5:1, 93:1}, $intern_27 = {429:1, 3:1}, $intern_28 = 3.141592653589793, $intern_29 = 6.283185307179586, $intern_30 = {13:1}, $intern_31 = 0.7853981633974483, $intern_32 = {19:1, 3:1}, $intern_33 = {55:1, 13:1}, $intern_34 = {31:1, 3:1}, $intern_35 = 4.71238898038469, $intern_36 = 1.5707963267948966, $intern_37 = 2.356194490192345, $intern_38 = -400, $intern_39 = -0.7853981633974483, $intern_40 = -2.356194490192345, $intern_41 = 16777215, $intern_42 = 16711680, $intern_43 = 65280, $intern_44 = -16777216, $intern_45 = {14:1}, $intern_46 = {24:1, 25:1}, $intern_47 = {38:1, 32:1}, $intern_48 = {38:1, 32:1, 52:1, 58:1}, $intern_49 = 34962, $intern_50 = 34963, $intern_51 = {24:1, 75:1, 25:1}, $intern_52 = {3:1, 9:1, 7:1, 18:1}, $intern_53 = {135:1, 58:1}, $intern_54 = -3.4028234663852886E38, $intern_55 = 3.4028234663852886E38;
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function $toString(this$static){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this$static)) + '@' + (hashCode__I__devirtual$(this$static) >>> 0).toString(16);
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

function toString__Ljava_lang_String___devirtual$(this$static){
  return isJavaString(this$static)?this$static:hasJavaObjectVirtualDispatch(this$static)?this$static.toString$():isJavaArray(this$static)?$toString(this$static):this$static.toString?this$static.toString():'[JavaScriptObject]';
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $toString(this);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 428:1, 9:1, 2:1};
modernizeBrowser();
function charToString(x_0){
  return String.fromCharCode(x_0);
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && (isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId]);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function narrow_short(x_0){
  return x_0 << 16 >> 16;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, $intern_0), -2147483648);
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function $getSimpleName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.simpleName;
}

function Class(){
  this.sequentialId = nextSequentialId++;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(typeId){
  var clazz;
  clazz = new Class;
  clazz.typeName = 'Class$' + (typeId?'S' + typeId:'' + clazz.sequentialId);
  clazz.canonicalName = clazz.typeName;
  clazz.simpleName = clazz.typeName;
  return clazz;
}

function createForClass(typeId){
  var clazz;
  clazz = createClassObject(typeId);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(typeId);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForInterface(){
  var clazz;
  clazz = createClassObject(null);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(primitiveTypeId){
  var clazz;
  clazz = createClassObject(primitiveTypeId);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(142, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName_0(){
  return $getSimpleName(this);
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_12(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
_.sequentialId = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass(1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass(0), Ljava_lang_Class_2_classLit = createForClass(142);
function $clinit_AbstractSound(){
  $clinit_AbstractSound = emptyMethod;
  INITIAL_LOAD_STATE = ($clinit_Sound$LoadState() , LOAD_STATE_UNINITIALIZED);
}

function $addEventHandler(this$static, handler){
  $add_0(this$static.soundHandlerCollection, handler);
  this$static.loadState != INITIAL_LOAD_STATE && $onSoundLoadStateChange(handler, new SoundLoadStateChangeEvent(this$static));
}

function $setLoadState(this$static, loadState){
  if (loadState != this$static.loadState) {
    this$static.loadState = loadState;
    loadState != INITIAL_LOAD_STATE && $fireOnSoundLoadStateChange(this$static.soundHandlerCollection, this$static);
  }
}

function AbstractSound(url_0){
  $clinit_AbstractSound();
  this.soundHandlerCollection = new SoundHandlerCollection;
  this.loadState = INITIAL_LOAD_STATE;
  this.mimeType = 'audio/mpeg';
  this.url_0 = url_0;
  this.streaming = false;
  this.crossOrigin = false;
}

defineClass(111, 1, {});
_.toString$ = function toString_1(){
  return this.getSoundType() + '("' + this.mimeType + '", "' + this.url_0 + '", ' + (this.streaming?'streaming':'not streaming') + ', ' + (this.crossOrigin?'cross origin':'same origin') + ')';
}
;
_.crossOrigin = false;
_.streaming = false;
var INITIAL_LOAD_STATE;
var Lcom_allen_1sauer_gwt_voices_client_AbstractSound_2_classLit = createForClass(111);
function $clinit_FlashSound(){
  $clinit_FlashSound = emptyMethod;
  $clinit_AbstractSound();
  soundList = new ArrayList;
}

function $playbackCompleted(this$static){
  $fireOnPlaybackComplete(this$static.soundHandlerCollection, this$static);
}

function $registerSound(this$static){
  if (!this$static.soundRegistered) {
    $registerSound_0(this$static.voicesMovie, this$static);
    this$static.soundRegistered = true;
  }
}

function $soundLoaded(this$static){
  $setLoadState(this$static, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY));
  this$static.volume_0 != 100 && $setVolume(this$static.voicesMovie, this$static.soundNumber, this$static.volume_0);
  this$static.looping && $setLooping(this$static.voicesMovie, this$static.soundNumber, this$static.looping);
}

function FlashSound(url_0, voicesMovie){
  $clinit_FlashSound();
  AbstractSound.call(this, url_0);
  this.voicesMovie = voicesMovie;
  this.soundNumber = soundList.array.length;
  $add_0(soundList, this);
  $registerSound(this);
}

defineClass(404, 111, {}, FlashSound);
_.getSoundType = function getSoundType(){
  return $clinit_SoundType() , FLASH;
}
;
_.play_0 = function play(){
  $registerSound(this);
  if (this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY)) {
    return $playSound(this.voicesMovie, this.soundNumber);
  }
  return false;
}
;
_.setLooping_0 = function setLooping(looping){
  this.looping = looping;
  this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY) && $setLooping(this.voicesMovie, this.soundNumber, looping);
}
;
_.setVolume_0 = function setVolume(volume){
  this.volume_0 = volume;
  this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY) && $setVolume(this.voicesMovie, this.soundNumber, volume);
}
;
_.stop_0 = function stop_0(){
  this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY) && $stopSound(this.voicesMovie, this.soundNumber);
}
;
_.looping = false;
_.soundNumber = 0;
_.soundRegistered = false;
_.volume_0 = 100;
var soundList;
var Lcom_allen_1sauer_gwt_voices_client_FlashSound_2_classLit = createForClass(404);
function FlashSound$1(val$index){
  this.val$index1 = val$index;
}

defineClass(405, 1, {}, FlashSound$1);
_.execute = function execute(){
  $playbackCompleted($get(($clinit_FlashSound() , soundList), this.val$index1));
}
;
_.val$index1 = 0;
var Lcom_allen_1sauer_gwt_voices_client_FlashSound$1_2_classLit = createForClass(405);
function FlashSound$2(val$index){
  this.val$index1 = val$index;
}

defineClass(406, 1, {}, FlashSound$2);
_.execute = function execute_0(){
  $soundLoaded($get(($clinit_FlashSound() , soundList), this.val$index1));
}
;
_.val$index1 = 0;
var Lcom_allen_1sauer_gwt_voices_client_FlashSound$2_2_classLit = createForClass(406);
function $createAudioElement(this$static){
  var elem;
  !!this$static.endedRegistration && $removeHandler(this$static.endedRegistration.real);
  !!this$static.audio && $removeFromParent(this$static.audio);
  this$static.audio = createIfSupported();
  elem = $getMediaElement(this$static.audio);
  this$static.endedRegistration = $addBitlessDomHandler(this$static.audio, this$static.endedHandler, ($clinit_EndedEvent() , $clinit_EndedEvent() , TYPE));
  $add_2(($clinit_RootPanel() , get_3()), this$static.audio);
  this$static.crossOrigin && $setAttribute(elem, 'crossOrigin', 'anonymous');
  $setSrc(elem, this$static.url_0);
}

function Html5Sound(url_0){
  $clinit_AbstractSound();
  var mimeTypeSupport;
  AbstractSound.call(this, url_0);
  this.endedHandler = new Html5Sound$1(this);
  $createAudioElement(this);
  mimeTypeSupport = getMimeTypeSupport();
  switch (mimeTypeSupport.ordinal) {
    case 2:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_MAYBE_READY));
      break;
    case 0:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
      break;
    case 3:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORT_NOT_KNOWN));
      throw new IllegalArgumentException_0('unexpected MIME type support ' + mimeTypeSupport);
    default:throw new IllegalArgumentException_0('unknown MIME type support ' + mimeTypeSupport);
  }
}

function getMimeTypeSupport(){
  var canPlayType;
  $clinit_AbstractSound();
  var support;
  if (!isSupported()) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED;
  }
  support = (canPlayType = $getMediaElement(createIfSupported()).canPlayType('audio/mpeg') , canPlayType == 'no'?'':canPlayType);
  if ($equals('probably', support)) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY;
  }
  if ($equals('maybe', support)) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY;
  }
  return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_UNKNOWN;
}

defineClass(408, 111, {}, Html5Sound);
_.getSoundType = function getSoundType_0(){
  return $clinit_SoundType() , HTML5;
}
;
_.play_0 = function play_0(){
  var elem;
  elem = $getMediaElement(this.audio);
  $pause(elem);
  try {
    elem.currentTime = 0;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 16))
      throw unwrap($e0);
  }
  elem.currentTime != 0 && $createAudioElement(this);
  elem.play();
  return true;
}
;
_.setLooping_0 = function setLooping_0(looping){
  $setBooleanAttr($getMediaElement(this.audio), looping);
}
;
_.setVolume_0 = function setVolume_0(volume){
  $setVolume_1($getMediaElement(this.audio), volume / 100);
}
;
_.stop_0 = function stop_1(){
  $pause($getMediaElement(this.audio));
}
;
var Lcom_allen_1sauer_gwt_voices_client_Html5Sound_2_classLit = createForClass(408);
function Html5Sound$1(this$0){
  this.this$01 = this$0;
}

defineClass(409, 1, {}, Html5Sound$1);
var Lcom_allen_1sauer_gwt_voices_client_Html5Sound$1_2_classLit = createForClass(409);
function NativeSound(url_0, soundControllerElement){
  var elem, m;
  $clinit_AbstractSound();
  var mimeTypeSupport;
  AbstractSound.call(this, url_0);
  this.soundControllerElement = soundControllerElement;
  elem = $createElement(url_0);
  $setVolume_0(elem, 0);
  $play(soundControllerElement, elem);
  this.element = $createElement(url_0);
  mimeTypeSupport = (m = navigator.mimeTypes['audio/mpeg'] , m != null && m.enabledPlugin != null?($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY):($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED));
  switch (mimeTypeSupport.ordinal) {
    case 2:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_MAYBE_READY));
      break;
    case 0:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
      break;
    case 3:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORT_NOT_KNOWN));
      break;
    case 1:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_NOT_READY));
      break;
    default:throw new IllegalArgumentException_0('unknown MIME type support ' + mimeTypeSupport);
  }
}

defineClass(407, 111, {}, NativeSound);
_.getSoundType = function getSoundType_1(){
  return $clinit_SoundType() , NATIVE;
}
;
_.play_0 = function play_1(){
  return $play(this.soundControllerElement, this.element);
}
;
_.setLooping_0 = function setLooping_1(looping){
  $setAttribute(this.element, 'loop', 'infinite');
}
;
_.setVolume_0 = function setVolume_1(volume){
  $setVolume_0(this.element, volume);
}
;
_.stop_0 = function stop_2(){
  $stop(this.element);
}
;
var Lcom_allen_1sauer_gwt_voices_client_NativeSound_2_classLit = createForClass(407);
function $name(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(7, 1, {3:1, 9:1, 7:1});
_.compareTo = function compareTo(other){
  return this.ordinal - other.ordinal;
}
;
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass(7);
function $clinit_Sound$LoadState(){
  $clinit_Sound$LoadState = emptyMethod;
  LOAD_STATE_NOT_SUPPORTED = new Sound$LoadState('LOAD_STATE_NOT_SUPPORTED', 0);
  LOAD_STATE_SUPPORT_NOT_KNOWN = new Sound$LoadState('LOAD_STATE_SUPPORT_NOT_KNOWN', 1);
  LOAD_STATE_SUPPORTED_AND_READY = new Sound$LoadState('LOAD_STATE_SUPPORTED_AND_READY', 2);
  LOAD_STATE_SUPPORTED_MAYBE_READY = new Sound$LoadState('LOAD_STATE_SUPPORTED_MAYBE_READY', 3);
  LOAD_STATE_SUPPORTED_NOT_READY = new Sound$LoadState('LOAD_STATE_SUPPORTED_NOT_READY', 4);
  LOAD_STATE_UNINITIALIZED = new Sound$LoadState('LOAD_STATE_UNINITIALIZED', 5);
}

function Sound$LoadState(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_Sound$LoadState();
  return initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_Sound$LoadState_2_classLit, 1), $intern_1, 57, 0, [LOAD_STATE_NOT_SUPPORTED, LOAD_STATE_SUPPORT_NOT_KNOWN, LOAD_STATE_SUPPORTED_AND_READY, LOAD_STATE_SUPPORTED_MAYBE_READY, LOAD_STATE_SUPPORTED_NOT_READY, LOAD_STATE_UNINITIALIZED]);
}

defineClass(57, 7, {57:1, 3:1, 9:1, 7:1}, Sound$LoadState);
var LOAD_STATE_NOT_SUPPORTED, LOAD_STATE_SUPPORTED_AND_READY, LOAD_STATE_SUPPORTED_MAYBE_READY, LOAD_STATE_SUPPORTED_NOT_READY, LOAD_STATE_SUPPORT_NOT_KNOWN, LOAD_STATE_UNINITIALIZED;
var Lcom_allen_1sauer_gwt_voices_client_Sound$LoadState_2_classLit = createForEnum(57, values_0);
function $clinit_SoundController(){
  $clinit_SoundController = emptyMethod;
  $wnd.$GWT_VOICES_VERSION = '3.3.2';
}

function $createSound(this$static, url_0){
  var sound;
  sound = $createSoundImpl(this$static, url_0);
  sound.setVolume_0(this$static.defaultVolume);
  return sound;
}

function $createSoundImpl(this$static, url_0){
  var c, c$array, c$index, c$max, sound;
  sound = null;
  for (c$array = this$static.preferredSoundTypes , c$index = 0 , c$max = c$array.length; c$index < c$max; ++c$index) {
    c = c$array[c$index];
    switch (c.ordinal) {
      case 1:
        sound = $createSoundImplHtml5(url_0);
        break;
      case 0:
        sound = $createSoundImplFlash(this$static, url_0);
        break;
      case 2:
        sound = $createSoundImplWebAudio(url_0);
        break;
      case 3:
        sound = $createSoundImplWebAudio(url_0);
    }
    if (sound) {
      return sound;
    }
  }
  sound = $createSoundImplWebAudio(url_0);
  if (sound) {
    return sound;
  }
  sound = $createSoundImplFlash(this$static, url_0);
  if (sound) {
    return sound;
  }
  sound = $createSoundImplHtml5(url_0);
  if (sound) {
    return sound;
  }
  sound = new NativeSound(url_0, this$static.soundContainer);
  return sound;
}

function $createSoundImplFlash(this$static, url_0){
  var mimeTypeSupport, sound, vm;
  if ($equals(url_0.substr(0, 5), 'data:')) {
    return null;
  }
  $clinit_FlashMovie();
  if (impl_0.impl.getMajorVersion() >= 9) {
    vm = $getVoicesMovie(this$static);
    mimeTypeSupport = $getMimeTypeSupport(vm);
    if (mimeTypeSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) || mimeTypeSupport == MIME_TYPE_SUPPORT_NOT_READY) {
      sound = new FlashSound(url_0, vm);
      return sound;
    }
  }
  return null;
}

function $createSoundImplHtml5(url_0){
  if (getMimeTypeSupport() == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)) {
    return new Html5Sound(url_0);
  }
  return null;
}

function $createSoundImplWebAudio(url_0){
  if (getMimeTypeSupport_0() == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)) {
    return new WebAudioSound(url_0);
  }
  return null;
}

function $getVoicesMovie(this$static){
  if (!this$static.voicesWrapper) {
    this$static.voicesWrapper = new VoicesMovie('gwtVoices' + uniqueId++, this$static.gwtVoicesSwfBaseUrl);
    $clinit_DOM();
    $appendChild(this$static.soundContainer, resolve(this$static.voicesWrapper.element));
  }
  return this$static.voicesWrapper;
}

function $setPreferredSoundTypes(this$static, soundTypes){
  var s$index, s$max;
  for (s$index = 0 , s$max = soundTypes.length; s$index < s$max; ++s$index)
  ;
  this$static.preferredSoundTypes = soundTypes;
}

function SoundController(){
  var s, i, gwtVoices, style;
  $clinit_SoundController();
  this.soundContainer = ($clinit_DOM() , $doc.createElement('div'));
  this.gwtVoicesSwfBaseUrl = (s = $doc.location.href , i = s.indexOf('#') , i != -1 && (s = s.substring(0, i)) , i = s.indexOf('?') , i != -1 && (s = s.substring(0, i)) , i = s.lastIndexOf('/') , i != -1 && (s = s.substring(0, i)) , s.length > 0?s + '/':'');
  gwtVoices = getParameter('gwt-voices');
  $equals(($clinit_SoundType() , FLASH).queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 39, 0, [FLASH])):$equals(HTML5.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 39, 0, [HTML5])):$equals(WEB_AUDIO.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 39, 0, [WEB_AUDIO])):$equals(NATIVE.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 39, 0, [NATIVE])):$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 39, 0, [WEB_AUDIO, FLASH, HTML5]));
  $appendChild(getBodyElement(), this.soundContainer);
  style = this.soundContainer.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'overflow', ($clinit_Style$Overflow() , 'hidden'));
  $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '-500.0px'));
  $setPropertyImpl(style, 'top', '-500.0px');
  $setPropertyImpl(style, 'width', '0.0px');
  $setPropertyImpl(style, 'height', '0.0px');
}

defineClass(310, 1, {}, SoundController);
_.defaultVolume = 100;
var Lcom_allen_1sauer_gwt_voices_client_SoundController_2_classLit = createForClass(310);
function $clinit_SoundController$MimeTypeSupport(){
  $clinit_SoundController$MimeTypeSupport = emptyMethod;
  MIME_TYPE_NOT_SUPPORTED = new SoundController$MimeTypeSupport('MIME_TYPE_NOT_SUPPORTED', 0);
  MIME_TYPE_SUPPORT_NOT_READY = new SoundController$MimeTypeSupport('MIME_TYPE_SUPPORT_NOT_READY', 1);
  MIME_TYPE_SUPPORT_READY = new SoundController$MimeTypeSupport('MIME_TYPE_SUPPORT_READY', 2);
  MIME_TYPE_SUPPORT_UNKNOWN = new SoundController$MimeTypeSupport('MIME_TYPE_SUPPORT_UNKNOWN', 3);
}

function SoundController$MimeTypeSupport(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_SoundController$MimeTypeSupport();
  return initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundController$MimeTypeSupport_2_classLit, 1), $intern_1, 74, 0, [MIME_TYPE_NOT_SUPPORTED, MIME_TYPE_SUPPORT_NOT_READY, MIME_TYPE_SUPPORT_READY, MIME_TYPE_SUPPORT_UNKNOWN]);
}

defineClass(74, 7, {74:1, 3:1, 9:1, 7:1}, SoundController$MimeTypeSupport);
var MIME_TYPE_NOT_SUPPORTED, MIME_TYPE_SUPPORT_NOT_READY, MIME_TYPE_SUPPORT_READY, MIME_TYPE_SUPPORT_UNKNOWN;
var Lcom_allen_1sauer_gwt_voices_client_SoundController$MimeTypeSupport_2_classLit = createForEnum(74, values_1);
function $clinit_SoundType(){
  $clinit_SoundType = emptyMethod;
  FLASH = new SoundType('FLASH', 0, 'flash');
  HTML5 = new SoundType('HTML5', 1, 'html5');
  NATIVE = new SoundType('NATIVE', 2, 'native');
  WEB_AUDIO = new SoundType('WEB_AUDIO', 3, 'webaudio');
}

function SoundType(enum$name, enum$ordinal, queryParameterValue){
  Enum.call(this, enum$name, enum$ordinal);
  this.queryParameterValue = queryParameterValue;
}

function values_2(){
  $clinit_SoundType();
  return initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 39, 0, [FLASH, HTML5, NATIVE, WEB_AUDIO]);
}

defineClass(39, 7, {39:1, 3:1, 9:1, 7:1}, SoundType);
var FLASH, HTML5, NATIVE, WEB_AUDIO;
var Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit = createForEnum(39, values_2);
function $clinit_WebAudioSound(){
  $clinit_WebAudioSound = emptyMethod;
  $clinit_AbstractSound();
  audioContext = createAudioContext();
}

function $createVoice(this$static, url_0){
  var context = audioContext;
  var request = new $wnd.XMLHttpRequest;
  request.open('GET', url_0, true);
  request.responseType = 'arraybuffer';
  var self_0 = this$static;
  request.onload = function(){
    function onSuccess(decodedBuffer){
      self_0.buffer_0 = decodedBuffer;
      self_0.soundLoaded_0();
    }

    function onFailure(){
      self_0.soundLoadFailed();
    }

    context.decodeAudioData(request.response, onSuccess, onFailure);
  }
  ;
  request.send();
}

function WebAudioSound(url_0){
  $clinit_WebAudioSound();
  var mimeTypeSupport;
  AbstractSound.call(this, url_0);
  try {
    $createVoice(this, url_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 12)) {
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
    }
     else 
      throw unwrap($e0);
  }
  mimeTypeSupport = getMimeTypeSupport_0();
  switch (mimeTypeSupport.ordinal) {
    case 1:
    case 2:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_NOT_READY));
      break;
    case 0:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
      break;
    case 3:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORT_NOT_KNOWN));
      break;
    default:throw new IllegalArgumentException_0('unknown MIME type support ' + mimeTypeSupport);
  }
}

function createAudioContext(){
  try {
    return new AudioContext;
  }
   catch (ignore) {
  }
  return null;
}

function getMimeTypeSupport_0(){
  $clinit_WebAudioSound();
  if (!audioContext) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED;
  }
  return getMimeTypeSupport();
}

defineClass(413, 111, {}, WebAudioSound);
_.getSoundType = function getSoundType_2(){
  return $clinit_SoundType() , WEB_AUDIO;
}
;
_.plackbackCompleted = function plackbackCompleted(){
  $fireOnPlaybackComplete(this.soundHandlerCollection, this);
}
;
_.play_0 = function play_2(){
  var buffer = this.buffer_0;
  if (buffer == null) {
    return false;
  }
  this.stop_0();
  var context = audioContext;
  var voice = context.createBufferSource();
  this.voice = voice;
  this.looping && (voice.loop = true);
  var node = voice;
  var volume = this.volume_0;
  if (volume != 100) {
    var gainNode = context.createGain();
    gainNode.gain.value = volume / 100;
    node.connect(gainNode);
    node = gainNode;
  }
  node.connect(context.destination);
  voice.buffer = buffer;
  voice.start(context.currentTime);
  if (!voice.loop) {
    var self_0 = this;
    setTimeout(function(){
      self_0.plackbackCompleted();
    }
    , voice.buffer.duration * 1000);
  }
  return true;
}
;
_.setLooping_0 = function setLooping_2(looping){
  this.looping = looping;
}
;
_.setVolume_0 = function setVolume_2(volume){
  this.volume_0 = volume;
}
;
_.soundLoadFailed = function soundLoadFailed(){
  $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
}
;
_.soundLoaded_0 = function soundLoaded(){
  $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY));
}
;
_.stop_0 = function stop_3(){
  var context = audioContext;
  var voice = this.voice;
  if (voice == null) {
    return;
  }
  voice.stop(context.currentTime);
  this.voice = null;
}
;
_.looping = false;
_.volume_0 = 0;
var audioContext;
var Lcom_allen_1sauer_gwt_voices_client_WebAudioSound_2_classLit = createForClass(413);
function EventObject(source){
  this.source = source;
}

defineClass(192, 1, {});
var Ljava_util_EventObject_2_classLit = createForClass(192);
function PlaybackCompleteEvent(source){
  EventObject.call(this, source);
}

defineClass(426, 192, {}, PlaybackCompleteEvent);
_.toString$ = function toString_3(){
  var sound;
  sound = this.source;
  return getSimpleName(Lcom_allen_1sauer_gwt_voices_client_handler_PlaybackCompleteEvent_2_classLit) + ': ' + sound;
}
;
var Lcom_allen_1sauer_gwt_voices_client_handler_PlaybackCompleteEvent_2_classLit = createForClass(426);
function $addAll(this$static, c){
  var changed, e, e$iterator;
  checkNotNull(c);
  changed = false;
  for (e$iterator = (c.iterator = new IterateList$IL_Iterator(c) , c.iterator); !e$iterator.node?!!e$iterator.this$01.head:!!e$iterator.node.next;) {
    e = $next_3(e$iterator);
    changed = changed | $add_6(this$static, e);
  }
  return changed;
}

function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator_0(); iter.hasNext();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_2();
      return true;
    }
  }
  return false;
}

function $clear(this$static){
  var iter;
  for (iter = (this$static.iterator = new IterateList$IL_Iterator(this$static) , this$static.iterator); !iter.node?!!iter.this$01.head:!!iter.node.next;) {
    $next_3(iter);
    $remove_13(iter);
  }
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator_0(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString_0(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_1('[');
  comma = false;
  for (e$iterator = this$static.iterator_0(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(448, 1, {});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove = function remove_0(o){
  return $advanceToFind(this, o, true);
}
;
_.toString$ = function toString_4(){
  return $toString_0(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass(448);
defineClass(452, 448, {47:1});
_.add_0 = function add_0(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_1 = function add_1(obj){
  this.add_0(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_1(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 47)) {
    return false;
  }
  other = o;
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator_0();
  for (elem$iterator = this.iterator_0(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_2(){
  return hashCode_16(this);
}
;
_.iterator_0 = function iterator_0(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return this.listIterator_0(0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_0 = function remove_1(index_0){
  throw new UnsupportedOperationException_0('Remove not supported on this list');
}
;
var Ljava_util_AbstractList_2_classLit = createForClass(452);
function $add(this$static, index_0, o){
  checkPositionIndex(index_0, this$static.array.length);
  splice_0(this$static.array, index_0, 0, o);
}

function $add_0(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $addAll_0(this$static, c){
  var cArray, len;
  cArray = cloneSubrange(c.array, c.array.length);
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  $insertAt(this$static, this$static.array.length, cArray);
  return true;
}

function $get(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_17(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $insertAt(this$static, index_0, values){
  nativeArraySplice(values, 0, this$static.array, index_0, values.length, false);
}

function $remove(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $set(this$static, index_0, o){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

function $toArray(this$static){
  return cloneSubrange(this$static.array, this$static.array.length);
}

function ArrayList(){
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(23, 452, $intern_3, ArrayList);
_.add_0 = function add_2(index_0, o){
  $add(this, index_0, o);
}
;
_.add_1 = function add_3(o){
  return $add_0(this, o);
}
;
_.contains_0 = function contains_0(o){
  return $indexOf(this, o, 0) != -1;
}
;
_.get_0 = function get_0(index_0){
  return $get(this, index_0);
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.remove_0 = function remove_2(index_0){
  return $remove(this, index_0);
}
;
_.remove = function remove_3(o){
  var i;
  i = $indexOf(this, o, 0);
  if (i == -1) {
    return false;
  }
  this.remove_0(i);
  return true;
}
;
_.size_1 = function size_1(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass(23);
function $fireOnPlaybackComplete(this$static, sender){
  var handler, handler$iterator;
  new PlaybackCompleteEvent(sender);
  for (handler$iterator = new AbstractList$IteratorImpl(this$static); handler$iterator.i < handler$iterator.this$01_0.size_1();) {
    handler = (checkCriticalElement(handler$iterator.i < handler$iterator.this$01_0.size_1()) , handler$iterator.this$01_0.get_0(handler$iterator.last = handler$iterator.i++));
    handler.this$01.playing = false;
  }
}

function $fireOnSoundLoadStateChange(this$static, sender){
  var event_0, handler, handler$iterator;
  event_0 = new SoundLoadStateChangeEvent(sender);
  for (handler$iterator = new AbstractList$IteratorImpl(this$static); handler$iterator.i < handler$iterator.this$01_0.size_1();) {
    handler = (checkCriticalElement(handler$iterator.i < handler$iterator.this$01_0.size_1()) , handler$iterator.this$01_0.get_0(handler$iterator.last = handler$iterator.i++));
    $onSoundLoadStateChange(handler, event_0);
  }
}

function SoundHandlerCollection(){
  ArrayList.call(this);
}

defineClass(420, 23, $intern_3, SoundHandlerCollection);
var Lcom_allen_1sauer_gwt_voices_client_handler_SoundHandlerCollection_2_classLit = createForClass(420);
function SoundLoadStateChangeEvent(source){
  EventObject.call(this, source);
  this.loadState = source.loadState;
}

defineClass(193, 192, {}, SoundLoadStateChangeEvent);
_.toString$ = function toString_5(){
  var sound;
  sound = this.source;
  return getSimpleName(Lcom_allen_1sauer_gwt_voices_client_handler_SoundLoadStateChangeEvent_2_classLit) + ': ' + sound + '; ' + $name(this.loadState);
}
;
var Lcom_allen_1sauer_gwt_voices_client_handler_SoundLoadStateChangeEvent_2_classLit = createForClass(193);
function $clinit_FlashMovie(){
  $clinit_FlashMovie = emptyMethod;
  impl_0 = new FlashMovieImplPlayN;
}

defineClass(410, 1, {});
var impl_0;
var Lcom_allen_1sauer_gwt_voices_client_ui_FlashMovie_2_classLit = createForClass(410);
function $clinit_VoicesMovie(){
  $clinit_VoicesMovie = emptyMethod;
  $clinit_FlashMovie();
  FLASH_SUPPORTED_MIME_TYPES = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['audio/mpeg', 'audio/mpeg; codecs=MP3']);
}

function $callCreateSound(this$static, id_0, soundURL, checkPolicyFile){
  var elem = this$static.element;
  elem.createSound(id_0, soundURL, checkPolicyFile);
}

function $getMimeTypeSupport(this$static){
  switch (this$static.flashSupport.ordinal) {
    case 2:
    case 1:
      return contains_1(FLASH_SUPPORTED_MIME_TYPES)?($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY):($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED);
    case 3:
    case 0:
      return this$static.flashSupport;
    default:throw new RuntimeException_0('Unhandled flash support value ' + this$static.flashSupport);
  }
}

function $installFlashCallbackHooks(this$static, id_1){
  $doc.VoicesMovie === undefined && ($doc.VoicesMovie = {});
  var self_0 = this$static;
  $doc.VoicesMovie[id_1] = {};
  $doc.VoicesMovie[id_1].ready = function(){
    self_0.movieReady();
  }
  ;
  $doc.VoicesMovie[id_1].soundLoaded = function(id_0){
    $clinit_FlashSound();
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new FlashSound$2(id_0));
    return true;
  }
  ;
  $doc.VoicesMovie[id_1].playbackCompleted = function(id_0){
    $clinit_FlashSound();
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new FlashSound$1(id_0));
  }
  ;
  $doc.VoicesMovie[id_1].log = function(text_0){
    self_0.debug('FLASH[' + id_1 + ']: ' + text_0);
  }
  ;
}

function $movieUnsupported(this$static){
  var flashSound, flashSound$iterator;
  for (flashSound$iterator = new AbstractList$IteratorImpl(this$static.unitializedSoundList); flashSound$iterator.i < flashSound$iterator.this$01_0.size_1();) {
    flashSound = (checkCriticalElement(flashSound$iterator.i < flashSound$iterator.this$01_0.size_1()) , flashSound$iterator.this$01_0.get_0(flashSound$iterator.last = flashSound$iterator.i++));
    $setLoadState(flashSound, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
  }
}

function $playSound(this$static, id_0){
  var elem;
  if (this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)) {
    return elem = this$static.element , elem.playSound(id_0);
  }
  return false;
}

function $registerSound_0(this$static, flashSound){
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)?$callCreateSound(this$static, flashSound.soundNumber, flashSound.url_0, flashSound.crossOrigin):$add_0(this$static.unitializedSoundList, flashSound);
}

function $setLooping(this$static, id_0, looping){
  var elem;
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) && (elem = this$static.element , elem.setLooping(id_0, looping?$intern_0:0) , undefined);
}

function $setVolume(this$static, id_0, volume){
  var elem;
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) && (elem = this$static.element , elem.setVolume(id_0, volume / 100) , undefined);
}

function $stopSound(this$static, id_0){
  var elem;
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) && (elem = this$static.element , elem.stopSound(id_0) , undefined);
}

function VoicesMovie(id_0, gwtVoicesSwfBaseUrl){
  $clinit_VoicesMovie();
  this.element = $createElementMaybeSetURL(impl_0, id_0, gwtVoicesSwfBaseUrl + 'gwt-voices.swf');
  this.flashSupport = ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_UNKNOWN);
  this.unitializedSoundList = new ArrayList;
  $installFlashCallbackHooks(this, id_0);
  if (impl_0.impl.getMajorVersion() >= 9) {
    this.flashSupport = MIME_TYPE_SUPPORT_NOT_READY;
  }
   else {
    this.flashSupport = MIME_TYPE_NOT_SUPPORTED;
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new VoicesMovie$1(this));
  }
}

defineClass(411, 410, {}, VoicesMovie);
_.debug = function debug(text_0){
}
;
_.movieReady = function movieReady(){
  var flashSound, iterator;
  this.flashSupport = ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY);
  for (iterator = new AbstractList$IteratorImpl(this.unitializedSoundList); iterator.i < iterator.this$01_0.size_1();) {
    flashSound = (checkCriticalElement(iterator.i < iterator.this$01_0.size_1()) , iterator.this$01_0.get_0(iterator.last = iterator.i++));
    $callCreateSound(this, flashSound.soundNumber, flashSound.url_0, flashSound.crossOrigin);
    $remove_7(iterator);
  }
}
;
var FLASH_SUPPORTED_MIME_TYPES;
var Lcom_allen_1sauer_gwt_voices_client_ui_VoicesMovie_2_classLit = createForClass(411);
function VoicesMovie$1(this$0){
  this.this$01 = this$0;
}

defineClass(412, 1, {}, VoicesMovie$1);
_.execute = function execute_1(){
  $movieUnsupported(this.this$01);
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_VoicesMovie$1_2_classLit = createForClass(412);
defineClass(472, 1, {});
_.getMajorVersion = function getMajorVersion(){
  var versionString;
  versionString = this.getVersionString();
  return versionString == null?0:__parseAndValidateInt($replaceFirst(versionString, ',.*', ''));
}
;
_.getVersionString = function getVersionString(){
  var rawVersionString;
  rawVersionString = this.getRawVersionString();
  return rawVersionString == null?null:$replaceFirst($replaceAll(rawVersionString, '\\D*(\\d+)', '$1,'), ',$', '');
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImpl_2_classLit = createForClass(472);
function FlashMovieImplIE6(){
}

defineClass(421, 472, {}, FlashMovieImplIE6);
_.createElementMaybeSetURL = function createElementMaybeSetURL(id_0, url_0){
  var elem = $doc.createElement('object');
  elem.tabIndex = -1;
  elem.id = id_0;
  elem.classid = 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000';
  elem.codebase = 'http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0';
  elem.FlashVars = 'id=' + id_0;
  elem.Movie = url_0;
  return elem;
}
;
_.getRawVersionString = function getRawVersionString(){
  try {
    return (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')).GetVariable('$version');
  }
   catch (e) {
    return null;
  }
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplIE6_2_classLit = createForClass(421);
function $createElementMaybeSetURL(this$static, id_0, url_0){
  return this$static.impl.createElementMaybeSetURL(id_0, url_0);
}

function FlashMovieImplPlayN(){
  $wnd.navigator.userAgent.indexOf('MSIE') != -1?(this.impl = new FlashMovieImplIE6):(this.impl = new FlashMovieImplSafari);
}

defineClass(419, 472, {}, FlashMovieImplPlayN);
_.createElementMaybeSetURL = function createElementMaybeSetURL_0(id_0, url_0){
  return $createElementMaybeSetURL(this, id_0, url_0);
}
;
_.getMajorVersion = function getMajorVersion_0(){
  return this.impl.getMajorVersion();
}
;
_.getRawVersionString = function getRawVersionString_0(){
  return this.impl.getRawVersionString();
}
;
_.getVersionString = function getVersionString_0(){
  return this.impl.getVersionString();
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplPlayN_2_classLit = createForClass(419);
defineClass(473, 472, {});
_.createElementMaybeSetURL = function createElementMaybeSetURL_1(id_0, url_0){
  var elem = $doc.createElement('object');
  elem.setAttribute('id', id_0);
  elem.setAttribute('type', 'application/x-shockwave-flash');
  elem.setAttribute('data', url_0);
  var param = $doc.createElement('param');
  param.setAttribute('name', 'FlashVars');
  param.setAttribute('value', 'id=' + id_0);
  elem.appendChild(param);
  return elem;
}
;
_.getRawVersionString = function getRawVersionString_1(){
  var p = navigator.plugins['Shockwave Flash'];
  return p == null?null:p.description;
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplStandard_2_classLit = createForClass(473);
function FlashMovieImplSafari(){
}

defineClass(422, 473, {}, FlashMovieImplSafari);
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplSafari_2_classLit = createForClass(422);
function $stop(elem){
  var parent_0 = elem.parentNode;
  parent_0 != null && parent_0.removeChild(elem);
}

function $createElement(url_0){
  var elem = $doc.createElement('object');
  elem.setAttribute('data', url_0);
  elem.setAttribute('autostart', 'true');
  return elem;
}

function $setVolume_0(elem, volume){
  elem.setAttribute('volume', '' + volume);
}

function $play(soundControllerElement, elem){
  var parent_0 = elem.parentNode;
  parent_0 != null && parent_0.removeChild(elem);
  soundControllerElement.appendChild(elem);
  return true;
}

var uniqueId = 1000;
function contains_1(arr){
  var element, element$index, element$max;
  for (element$index = 0 , element$max = arr.length; element$index < element$max; ++element$index) {
    element = arr[element$index];
    if ($equals(element, 'audio/mpeg')) {
      return true;
    }
  }
  return false;
}

function getSimpleName(clazz){
  var name_0;
  name_0 = ($ensureNamesAreInitialized(clazz) , clazz.typeName);
  return $substring(name_0, $lastIndexOf(name_0, fromCodePoint(46)) + 1);
}

function $drawImage(this$static, image, dx, dy){
  this$static.drawImage(image, dx, dy);
}

function $drawImage_0(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(image, dx, dy, dw, dh);
}

function $fillRect(this$static, x_0, y_0, w, h){
  this$static.fillRect(x_0, y_0, w, h);
}

function $scale(this$static, x_0, y_0){
  this$static.scale(x_0, y_0);
}

function Duration(){
  this.start_0 = now_1();
}

defineClass(321, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass(321);
function isScript(){
  return true;
}

function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $fillInStackTrace(this$static){
  this$static.stackTrace = null;
  captureStackTrace(this$static, this$static.detailMessage);
  return this$static;
}

function $printStackTrace(this$static){
  var element$array, element$index, element$max, t, stackTrace;
  for (t = this$static; t; t = t.cause) {
    for (element$array = (t.stackTrace == null && (t.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector_0.getStackTrace(t) , dropInternalFrames(stackTrace))) , t.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index)
    ;
  }
}

function $toString_1(this$static){
  var className, msg;
  className = $getName(this$static.___clazz$);
  msg = this$static.getMessage();
  return msg != null?className + ': ' + msg:className;
}

defineClass(12, 1, {3:1, 12:1});
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_6(){
  return $toString_1(this);
}
;
var Ljava_lang_Throwable_2_classLit = createForClass(12);
function Exception(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(16, 12, {3:1, 16:1, 12:1}, Exception);
var Ljava_lang_Exception_2_classLit = createForClass(16);
function RuntimeException(){
  $fillInStackTrace(this);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
}

function RuntimeException_2(cause){
  this.detailMessage = !cause?null:$toString_1(cause);
  this.cause = cause;
  $fillInStackTrace(this);
}

defineClass(8, 16, $intern_5, RuntimeException_0, RuntimeException_2);
var Ljava_lang_RuntimeException_2_classLit = createForClass(8);
defineClass(209, 8, $intern_5);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass(209);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?exception == null?null:exception.name:isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description_0 = this$static.description_0 + ': ' + (instanceOfJso(exception)?exception == null?null:exception.message:exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description_0;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.description_0 = '';
  this.e = e;
  this.description_0 = '';
}

defineClass(69, 209, {69:1, 3:1, 16:1, 8:1, 12:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass(69);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $set_0(this$static, index_0, value_0){
  this$static[index_0] = value_0;
}

function $push_0(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(430, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass(430);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    if (isScript()) {
      return entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = entry0(jsFunction, this, arguments);
      __0 != null && (__0 = __0.val);
      return __0;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 12)) {
          t = $e0;
          reportUncaughtException(t);
          return undefined;
        }
         else 
          throw unwrap($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e){
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $reportError(handler.this$01, 'Uncaught Exception: ', e);
    return;
  }
  reportToBrowser(instanceOf(e, 69)?e.getThrown():e);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        $set_0(tasks, i, null);
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && $push(newTasks, tasks[i]);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function SchedulerImpl(){
}

function execute_2(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 12)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_2)(cmd);
    !isScript() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(322, 430, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass(322);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(323, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_3(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass(323);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(324, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_4(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass(324);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector_0 = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector_0.collect(throwable, reference);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, i, numberOfFrameToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  numberOfFrameToSearch = min_3(stackTrace.length, 5);
  for (i = 0; i < numberOfFrameToSearch; i++) {
    if ($equals(stackTrace[i].methodName, dropFrameUntilFnName)) {
      return stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1) , stackTrace;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

var collector_0;
defineClass(445, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass(445);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(210, 445, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t.fnStack && t.fnStack instanceof Array?t.fnStack:[]);
  length_0 = stack_0.length;
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_6, 61, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass(210);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (!stString.length) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals(toReturn.substr(0, 3), 'at ') && (toReturn = __substr(toReturn, 3, toReturn.length - 3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(__substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf_1(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = __substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
  (!toReturn.length || $equals(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(__substr(location_0, lastColonIndex + 1, location_0.length - (lastColonIndex + 1)));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(446, 445, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.__gwt$backingJsError , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_6, 61, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass(446);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(211, 446, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass(211);
function checkArrayType(expression, errorMessage){
  if (!expression) {
    throw new ArrayStoreException('' + errorMessage);
  }
}

function checkCriticalArgument(expression, errorMessageArgs){
  if (!expression) {
    throw new IllegalArgumentException_0(format_0('%s > %s', errorMessageArgs));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (reference == null) {
    throw new NullPointerException;
  }
  return reference;
}

function checkNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw new NullPointerException_0('' + errorMessage);
  }
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function format_0(template, args){
  var builder, i, placeholderStart, templateStart;
  template = '' + template;
  builder = new StringBuilder_0(template.length + 16 * args.length);
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    $append_6(builder, template.substr(templateStart, placeholderStart - templateStart));
    $append_5(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  $append_6(builder, __substr(template, templateStart, template.length - templateStart));
  if (i < args.length) {
    builder.string += ' [';
    $append_5(builder, args[i++]);
    while (i < args.length) {
      builder.string += ', ';
      $append_5(builder, args[i++]);
    }
    builder.string += ']';
  }
  return builder.string;
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $getSubPixelScrollTop(this$static){
  return this$static.scrollTop || 0;
}

function $removeAttribute(this$static, name_0){
  this$static.removeAttribute(name_0);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $pause(this$static){
  this$static.pause();
}

function $setBooleanAttr(this$static, value_0){
  value_0?$setAttribute(this$static, 'loop', ''):$removeAttribute(this$static, 'loop');
}

function $setSrc(this$static, url_0){
  this$static.src = url_0;
}

function $setVolume_1(this$static, volume){
  this$static.volume = volume;
}

function $getContext2d(this$static){
  return this$static.getContext('2d');
}

function $setHeight(this$static, height){
  this$static.height = height;
}

function $setWidth(this$static, width_0){
  this$static.width = width_0;
}

function $eventGetAltKey(evt){
  return !!evt.altKey;
}

function $eventGetCtrlKey(evt){
  return !!evt.ctrlKey;
}

function $eventGetKeyCode(evt){
  return evt.keyCode | 0;
}

function $eventGetMetaKey(evt){
  return !!evt.metaKey;
}

function $eventGetShiftKey(evt){
  return !!evt.shiftKey;
}

function $getSubPixelScrollLeft(elem){
  return elem.scrollLeft || 0;
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function $eventPreventDefault(evt){
  evt.preventDefault();
}

function $isOrHasChild(parent_0, child){
  return parent_0.contains(child);
}

function $eventGetCurrentTarget(event_0){
  return event_0.currentTarget || $wnd;
}

function $getAbsoluteLeft(elem){
  var left, rect;
  rect = getBoundingClientRect(elem);
  left = rect?rect.left + $getScrollLeft_0(elem.ownerDocument.body):getAbsoluteLeftUsingOffsets(elem);
  return left | 0;
}

function $getAbsoluteTop(elem){
  var rect, top_0, top_1;
  rect = getBoundingClientRect(elem);
  top_0 = rect?rect.top + ((elem.ownerDocument.body.scrollTop || 0) | 0):getAbsoluteTopUsingOffsets(elem);
  return top_0 | 0;
}

function $getScrollLeft(doc){
  return doc.documentElement.scrollLeft || doc.body.scrollLeft;
}

function $getScrollLeft_0(elem){
  if (!$equalsIgnoreCase('body', elem.tagName) && elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl') {
    return ($getSubPixelScrollLeft(elem) | 0) - (((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  }
  return $getSubPixelScrollLeft(elem) | 0;
}

function $getScrollTop(doc){
  return doc.documentElement.scrollTop || doc.body.scrollTop;
}

function $getTabIndex(elem){
  return typeof elem.tabIndex != 'undefined'?elem.tabIndex:-1;
}

function getAbsoluteLeftUsingOffsets(elem){
  if (elem.offsetLeft == null) {
    return 0;
  }
  var left = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      left -= curr.scrollLeft;
      doc.defaultView.getComputedStyle(curr, '').getPropertyValue('direction') == 'rtl' && (left += curr.scrollWidth - curr.clientWidth);
      curr = curr.parentNode;
    }
  }
  while (elem) {
    left += elem.offsetLeft;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      left += doc.body.scrollLeft;
      return left;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (left += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-left-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return left;
}

function getAbsoluteTopUsingOffsets(elem){
  if (elem.offsetTop == null) {
    return 0;
  }
  var top_0 = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      top_0 -= curr.scrollTop;
      curr = curr.parentNode;
    }
  }
  while (elem) {
    top_0 += elem.offsetTop;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      top_0 += doc.body.scrollTop;
      return top_0;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (top_0 += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-top-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return top_0;
}

function getBoundingClientRect(element){
  return element.getBoundingClientRect && element.getBoundingClientRect();
}

function $getClientHeight(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$Overflow();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_1, 42, 0, [VISIBLE, HIDDEN, SCROLL, AUTO]);
}

defineClass(42, 7, $intern_7);
var AUTO, HIDDEN, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum(42, values_3);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(295, 42, $intern_7, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum(295, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(296, 42, $intern_7, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum(296, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(297, 42, $intern_7, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum(297, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(298, 42, $intern_7, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum(298, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Position();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_1, 43, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(43, 7, $intern_8);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum(43, values_4);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(299, 43, $intern_8, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum(299, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(300, 43, $intern_8, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum(300, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(301, 43, $intern_8, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum(301, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(302, 43, $intern_8, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum(302, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$Unit();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_1, 20, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(20, 7, $intern_9);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum(20, values_5);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(286, 20, $intern_9, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum(286, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(287, 20, $intern_9, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum(287, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(288, 20, $intern_9, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum(288, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(289, 20, $intern_9, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum(289, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(290, 20, $intern_9, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum(290, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(291, 20, $intern_9, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum(291, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(292, 20, $intern_9, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum(292, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(293, 20, $intern_9, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum(293, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(294, 20, $intern_9, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum(294, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_0 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Style$Visibility();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_1, 73, 0, [VISIBLE_0, HIDDEN_0]);
}

defineClass(73, 7, $intern_10);
var HIDDEN_0, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum(73, values_6);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(303, 73, $intern_10, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum(303, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(304, 73, $intern_10, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum(304, null);
function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = emptyMethod;
  NORMAL = new Style$WhiteSpace$1;
  NOWRAP = new Style$WhiteSpace$2;
  PRE = new Style$WhiteSpace$3;
  PRE_LINE = new Style$WhiteSpace$4;
  PRE_WRAP = new Style$WhiteSpace$5;
}

function Style$WhiteSpace(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_Style$WhiteSpace();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, 1), $intern_1, 33, 0, [NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

defineClass(33, 7, $intern_11);
var NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
var Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum(33, values_7);
function Style$WhiteSpace$1(){
  Style$WhiteSpace.call(this, 'NORMAL', 0);
}

defineClass(305, 33, $intern_11, Style$WhiteSpace$1);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum(305, null);
function Style$WhiteSpace$2(){
  Style$WhiteSpace.call(this, 'NOWRAP', 1);
}

defineClass(306, 33, $intern_11, Style$WhiteSpace$2);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum(306, null);
function Style$WhiteSpace$3(){
  Style$WhiteSpace.call(this, 'PRE', 2);
}

defineClass(307, 33, $intern_11, Style$WhiteSpace$3);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum(307, null);
function Style$WhiteSpace$4(){
  Style$WhiteSpace.call(this, 'PRE_LINE', 3);
}

defineClass(308, 33, $intern_11, Style$WhiteSpace$4);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum(308, null);
function Style$WhiteSpace$5(){
  Style$WhiteSpace.call(this, 'PRE_WRAP', 4);
}

defineClass(309, 33, $intern_11, Style$WhiteSpace$5);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum(309, null);
function $getRelativeX(this$static, target){
  return ((this$static.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument);
}

function $getRelativeY(this$static, target){
  return ((this$static.clientY || 0) | 0) - $getAbsoluteTop(target) + ($getSubPixelScrollTop(target) | 0) + $getScrollTop(target.ownerDocument);
}

defineClass(455, 1, {});
_.toString$ = function toString_7(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass(455);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(456, 455, {});
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass(456);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = $unsafeGet(registered, nativeEvent.type);
    if (types) {
      for (type$iterator = types.iterator_0(); type$iterator.hasNext();) {
        type_0 = type$iterator.next_0();
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(474, 456, {});
_.getAssociatedType = function getAssociatedType(){
  return $clinit_EndedEvent() , TYPE;
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass(474);
defineClass(262, 1, {});
_.hashCode$ = function hashCode_3(){
  return this.index_0;
}
;
_.toString$ = function toString_8(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass(262);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(98, 262, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass(98);
function DomEvent$Type(flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = registered.map_0['ended'];
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, types);
  }
  types.add_1(this);
  this.name_0 = 'ended';
}

defineClass(424, 98, {}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass(424);
function $clinit_EndedEvent(){
  $clinit_EndedEvent = emptyMethod;
  TYPE = new DomEvent$Type(new EndedEvent);
}

function EndedEvent(){
}

defineClass(423, 474, {}, EndedEvent);
_.dispatch = function dispatch(handler){
  $fireOnPlaybackComplete(handler.this$01.soundHandlerCollection, handler.this$01);
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_EndedEvent_2_classLit = createForClass(423);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, value_0){
  this$static.map_0['ended'] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(427, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass(427);
function CloseEvent_0(){
}

function fire(source){
  var event_0;
  if (TYPE_0) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

defineClass(355, 456, {}, CloseEvent_0);
_.dispatch = function dispatch_0(handler){
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_0(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass(355);
function ResizeEvent(width_0, height){
  this.width_0 = width_0;
  this.height_0 = height;
}

function fire_0(source, width_0, height){
  var event_0;
  if (TYPE_1) {
    event_0 = new ResizeEvent(width_0, height);
    $fireEvent(source, event_0);
  }
}

defineClass(325, 456, {}, ResizeEvent);
_.dispatch = function dispatch_1(handler){
  $onResize(handler, this);
}
;
_.getAssociatedType = function getAssociatedType_1(){
  return TYPE_1;
}
;
_.height_0 = 0;
_.width_0 = 0;
var TYPE_1;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass(325);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || (event_0.dead = false , event_0.source = null);
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 78)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function HandlerManager(source){
  this.eventBus = new HandlerManager$Bus;
  this.source = source;
}

defineClass(120, 1, {51:1}, HandlerManager);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass(120);
defineClass(457, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass(457);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_0(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_1(handler);
}

function $doFire(this$static, event_0){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next_0();
      try {
        event_0.dispatch(handler);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 12)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_4(causes, e);
        }
         else 
          throw unwrap($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove(handler);
  removed && l.isEmpty() && (sourceMap = $get_5(this$static.map_0, type_0) , sourceMap.remove_1(source) , sourceMap.isEmpty() && $remove_5(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = $get_5(this$static.map_0, type_0);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_3(this$static.map_0, type_0, sourceMap);
  }
  handlers = sourceMap.get_1(source);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0){
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type_0, null);
  return directHandlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = $get_5(this$static.map_0, type_0);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = sourceMap.get_1(source);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , c$iterator.this$01_0.get_0(c$iterator.last = c$iterator.i++));
        c.execute();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

defineClass(263, 457, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass(263);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(264, 263, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass(264);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(344, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass(344);
function UmbrellaException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator_0();
  if (!iterator.hasNext()) {
    return null;
  }
  return iterator.next_0();
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_1(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator_0(); t$iterator.hasNext();) {
    t = t$iterator.next_0();
    first?(first = false):(b.string += '; ' , b);
    $append_6(b, t.getMessage());
  }
  return b.string;
}

defineClass(78, 8, $intern_12, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass(78);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(164, 78, $intern_12, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass(164);
function throwIfNull(value_0){
  if (null == value_0) {
    throw new NullPointerException_0('encodedURLComponent cannot be null');
  }
}

function cloneSubrange(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initDims(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count){
  return initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}

function initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count){
  var elementTypeCategory, i, isLastDim, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDim = index_0 == count - 1;
  elementTypeCategory = isLastDim?leafElementTypeCategory:0;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, count - index_0), castableTypeMapExprs[index_0], elementTypeIds[index_0], elementTypeCategory, result);
  if (!isLastDim) {
    ++index_0;
    for (i = 0; i < length_0; ++i) {
      result[i] = initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count);
    }
  }
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function nativeArraySplice(src_0, srcOfs, dest, destOfs, len, overwrite){
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (var batchStart = srcOfs, end = srcOfs + len; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    Array.prototype.splice.apply(dest, [destOfs, overwrite?len:0].concat(src_0.slice(batchStart, batchEnd)));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 69)) {
    jse = e;
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 12)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_13;
  a1 = value_0 >> 22 & $intern_13;
  a2 = value_0 < 0?1048575:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_2, 479, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create(value_0));
    return result;
  }
  return create(value_0);
}

function gt(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_13, $intern_13, 524287);
  MIN_VALUE = create0(0, 0, $intern_14);
  fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  var config, plat, cc;
  $onModuleLoad();
  config = new HtmlPlatform$Config;
  config.experimentalFullscreen = true;
  plat = new HtmlPlatform(config);
  plat.assets.pathPrefix = 'spaceinvadersx/';
  cc = new SpaceInvadersXHtml$HtmlCanvasCreator(plat.graphics);
  new SpaceInvadersX(plat, cc, new SpaceInvadersXHtml$HtmlFullScreener);
  $listenForVisibilityChange(plat);
  $requestAnimationFrame(new HtmlPlatform$2(plat));
}

function $setElement(this$static, elem){
  this$static.element = elem;
}

function $sinkBitlessEvent(this$static, eventTypeName){
  sinkBitlessEvent(($clinit_DOM() , this$static.element), eventTypeName);
}

defineClass(45, 1, {59:1, 45:1});
_.toString$ = function toString_9(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_DOM() , this.element).outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass(45);
function $addBitlessDomHandler(this$static, handler, type_0){
  $sinkBitlessEvent(this$static, type_0.name_0);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.doDetachChildren();
  }
   finally {
    $clinit_DOM();
    setEventListener(this$static.element, null);
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_1(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (this$static.parent_0) {
    $remove_2(this$static.parent_0, this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_0("This widget's parent does not implement HasWidgets");
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && $onDetach(this$static);
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_0('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && this$static.onAttach();
  }
}

defineClass(40, 45, $intern_15);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && $isOrHasChild(this.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this, this.element);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass(40);
defineClass(470, 40, $intern_15);
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = $getTabIndex(($clinit_DOM() , this.element));
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass(470);
function $getMediaElement(this$static){
  return $clinit_DOM() , this$static.element;
}

defineClass(417, 470, $intern_15);
var Lcom_google_gwt_media_client_MediaBase_2_classLit = createForClass(417);
function Audio_0(element){
  $setElement(this, ($clinit_DOM() , element));
}

function createIfSupported(){
  var element;
  !detector && (detector = new Audio$AudioElementSupportDetectedMaybe);
  element = $doc.createElement('audio');
  if (!isSupportedRunTime(element)) {
    return null;
  }
  return new Audio_0(element);
}

function isSupported(){
  var element;
  !detector && (detector = new Audio$AudioElementSupportDetectedMaybe);
  element = $doc.createElement('audio');
  if (!isSupportedRunTime(element)) {
    return false;
  }
  return true;
}

defineClass(418, 417, $intern_15, Audio_0);
var detector;
var Lcom_google_gwt_media_client_Audio_2_classLit = createForClass(418);
function isSupportedRunTime(element){
  return !!element.canPlayType;
}

defineClass(471, 1, {});
var Lcom_google_gwt_media_client_Audio$AudioElementSupportDetector_2_classLit = createForClass(471);
function Audio$AudioElementSupportDetectedMaybe(){
}

defineClass(191, 471, {}, Audio$AudioElementSupportDetectedMaybe);
var Lcom_google_gwt_media_client_Audio$AudioElementSupportDetectedMaybe_2_classLit = createForClass(191);
function $exec(this$static, input_0){
  return this$static.exec(input_0);
}

function $getItem(this$static, key){
  return $getItem_0(this$static.storage, key);
}

function $key(this$static, index_0){
  return $key_0(this$static.storage, index_0);
}

function $removeItem(this$static, key){
  $removeItem_0(this$static.storage, key);
}

function $setItem(this$static, key, data_0){
  $setItem_0(this$static.storage, key, data_0);
}

function Storage_0(){
  this.storage = 'localStorage';
}

defineClass(311, 1, {}, Storage_0);
var localStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass(311);
function $clinit_Storage$StorageSupportDetector(){
  $clinit_Storage$StorageSupportDetector = emptyMethod;
  localStorageSupported = checkStorageSupport('localStorage');
  checkStorageSupport('sessionStorage');
}

function checkStorageSupport(storage){
  var c = '_gwt_dummy_';
  try {
    $wnd[storage].setItem(c, c);
    $wnd[storage].removeItem(c);
    return true;
  }
   catch (e) {
    return false;
  }
}

var localStorageSupported = false;
function $getItem_0(storage, key){
  return $wnd[storage].getItem(key);
}

function $getLength(storage){
  return $wnd[storage].length;
}

function $key_0(storage, index_0){
  return index_0 >= 0 && index_0 < $wnd[storage].length?$wnd[storage].key(index_0):null;
}

function $removeItem_0(storage, key){
  $getItem_0(storage, key);
  $wnd[storage].removeItem(key);
}

function $setItem_0(storage, key, data_0){
  $getItem_0(storage, key);
  $wnd[storage].setItem(key, data_0);
}

function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_1(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator_0(); iter.hasNext();) {
    entry = iter.next_0();
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        iter.remove_2();
      }
      return entry;
    }
  }
  return null;
}

function $toString_2(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(447, 1, $intern_16);
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key, false);
}
;
_.equals$ = function equals_2(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 114)) {
    return false;
  }
  otherMap = obj;
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator_0(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_1 = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode$ = function hashCode_4(){
  return hashCode_15(this.entrySet_0());
}
;
_.isEmpty = function isEmpty_1(){
  return this.size_1() == 0;
}
;
_.put = function put(key, value_0){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.remove_1 = function remove_4(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size_1 = function size_2(){
  return this.entrySet_0().size_1();
}
;
_.toString$ = function toString_10(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_1('{');
  comma = false;
  for (entry$iterator = this.entrySet_0().iterator_0(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_6(sb, $toString_2(this, entry.getKey()));
    sb.string += '=';
    $append_6(sb, $toString_2(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass(447);
function $get_0(this$static, key){
  if (key == null) {
    throw new NullPointerException;
  }
  return $getItem(this$static.storage, toString__Ljava_lang_String___devirtual$(key));
}

function $put(this$static, key, value_0){
  var old;
  if (key == null || value_0 == null) {
    throw new NullPointerException;
  }
  old = $getItem(this$static.storage, key);
  $setItem(this$static.storage, key, value_0);
  return old;
}

function $remove_0(this$static, key){
  var k, old;
  if (key == null) {
    throw new NullPointerException;
  }
  k = toString__Ljava_lang_String___devirtual$(key);
  old = $getItem(this$static.storage, k);
  $removeItem(this$static.storage, k);
  return old;
}

function StorageMap(storage){
  this.storage = storage;
}

defineClass(312, 447, $intern_16, StorageMap);
_.containsKey = function containsKey_0(key){
  return $get_0(this, key) != null;
}
;
_.entrySet_0 = function entrySet(){
  return new StorageMap$StorageEntrySet(this);
}
;
_.get_1 = function get_2(key){
  return $get_0(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.remove_1 = function remove_5(key){
  return $remove_0(this, key);
}
;
_.size_1 = function size_3(){
  return $getLength(this.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap_2_classLit = createForClass(312);
function $eq(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && $equals(a, b);
}

function $hashCode(o){
  return o != null?getHashCode_0(o):0;
}

function StorageMap$StorageEntry(this$0, key){
  this.this$01 = this$0;
  this.key_0 = key;
}

defineClass(313, 1, $intern_17, StorageMap$StorageEntry);
_.equals$ = function equals_3(obj){
  var e;
  if (!instanceOf(obj, 46)) {
    return false;
  }
  e = obj;
  return $eq(this.key_0, e.getKey()) && $eq($get_0(this.this$01, this.key_0), e.getValue());
}
;
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue = function getValue(){
  return $get_0(this.this$01, this.key_0);
}
;
_.hashCode$ = function hashCode_5(){
  return $hashCode(this.key_0) ^ $hashCode($get_0(this.this$01, this.key_0));
}
;
_.setValue = function setValue(value_0){
  return $put(this.this$01, this.key_0, value_0);
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntry_2_classLit = createForClass(313);
function $next(this$static){
  if (this$static.index_0 >= $getLength(this$static.this$01.storage.storage) - 1) {
    throw new NoSuchElementException;
  }
  ++this$static.index_0;
  this$static.lastKey = $key(this$static.this$01.storage, this$static.index_0);
  return new StorageMap$StorageEntry(this$static.this$01, this$static.lastKey);
}

function StorageMap$StorageEntryIterator(this$0){
  this.this$01 = this$0;
}

defineClass(314, 1, {}, StorageMap$StorageEntryIterator);
_.hasNext = function hasNext(){
  return this.index_0 < $getLength(this.this$01.storage.storage) - 1;
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
_.remove_2 = function remove_6(){
  if (this.lastKey == null) {
    throw new IllegalStateException;
  }
  $removeItem(this.this$01.storage, this.lastKey);
  this.lastKey = null;
  --this.index_0;
}
;
_.index_0 = -1;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntryIterator_2_classLit = createForClass(314);
defineClass(449, 448, $intern_18);
_.equals$ = function equals_4(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 82)) {
    return false;
  }
  other = o;
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_6(){
  return hashCode_15(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass(449);
function $contains(this$static, o){
  var e, key, value_0;
  if (!instanceOf(o, 46)) {
    return false;
  }
  e = o;
  key = e.getKey();
  value_0 = e.getValue();
  return key != null && value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, $get_0(this$static.this$01, key));
}

function StorageMap$StorageEntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(315, 449, $intern_18, StorageMap$StorageEntrySet);
_.contains_0 = function contains_2(o){
  return $contains(this, o);
}
;
_.iterator_0 = function iterator_1(){
  return new StorageMap$StorageEntryIterator(this.this$01);
}
;
_.remove = function remove_7(o){
  var entry;
  if (!$contains(this, o)) {
    return false;
  }
  entry = o;
  return $remove_0(this.this$01, entry.getKey()) != null;
}
;
_.size_1 = function size_4(){
  return $getLength(this.this$01.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntrySet_2_classLit = createForClass(315);
function create_0(buffer, byteOffset, length_0){
  return new Float32Array(buffer, byteOffset, length_0);
}

function create_1(buffer, byteOffset, length_0){
  return new Int16Array(buffer, byteOffset, length_0);
}

function create_2(buffer, byteOffset, length_0){
  return new Int32Array(buffer, byteOffset, length_0);
}

function create_3(buffer, byteOffset, length_0){
  return new Int8Array(buffer, byteOffset, length_0);
}

function create_4(buffer, byteOffset, length_0){
  return new Uint16Array(buffer, byteOffset, length_0);
}

function create_5(buffer, byteOffset, length_0){
  return new Uint8Array(buffer, byteOffset, length_0);
}

function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function sinkBitlessEvent(elem, eventTypeName){
  var dispatchMap, dispatcher;
  $clinit_DOM();
  $maybeInitializeEventSystem();
  dispatchMap = bitlessEventDispatchers;
  dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function sinkEvents(elem, eventBits){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_0?TYPE_0:(TYPE_0 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_1 && (TYPE_1 = new GwtEvent$Type) , TYPE_1), handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initWindowResizeHandler();
    resizeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_0 && $fireEvent(handlers_0, event_0);
    return null;
  }
  return null;
}

function onResize(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_0((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), width_0, height);
    }
  }
}

var closeHandlersInitialized = false, handlers_0, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_2 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(261, 456, {}, Window$ClosingEvent);
_.dispatch = function dispatch_2(handler){
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_2(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass(261);
function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = __substr(queryString, 1, queryString.length - 1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (!key.length) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull(val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (!instanceOf($e0, 69))
          throw unwrap($e0);
      }
      values = out.get_1(key);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_1(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator_0(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    entry.setValue(unmodifiableList(entry.getValue()));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = $wnd.location.search;
  if (!listParamMap || !$equals(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

function getParameter(name_0){
  var paramsForName;
  ensureListParameterMap();
  paramsForName = listParamMap.get_1(name_0);
  return !paramsForName?null:paramsForName.get_0(paramsForName.size_1() - 1);
}

var cachedQueryString = '', listParamMap;
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(121, 120, {51:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass(121);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_19;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_14;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return 4194304;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_20;
    case 'gesturechange':
      return $intern_21;
    case 'gestureend':
      return $intern_22;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 60)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $initEventSystem(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & $intern_19 && (elem.onerror = bits & $intern_19?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_14 && (elem.onpaste = bits & $intern_14?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & 4194304 && (elem.ontouchend = bits & 4194304?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_20 && (elem.ongesturestart = bits & $intern_20?dispatchEvent_1:null);
  chMask & $intern_21 && (elem.ongesturechange = bits & $intern_21?dispatchEvent_1:null);
  chMask & $intern_22 && (elem.ongestureend = bits & $intern_22?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOM();
  return;
}

function dispatchDragEvent(evt){
  $eventPreventDefault(evt);
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = $eventGetCurrentTarget(evt);
  element['__gwtLastUnhandledEvent'] = evt.type;
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = $eventGetCurrentTarget(evt);
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function $initWindowResizeHandler(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      onResize();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

defineClass(468, 40, $intern_15);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass(468);
function $add_1(this$static, child, container){
  $removeFromParent(child);
  $add_3(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove_1(this$static, w){
  var elem, parent_0;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((parent_0 = elem.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0), elem);
    $remove_4(this$static.children, w);
  }
  return true;
}

defineClass(345, 468, $intern_15);
_.iterator_0 = function iterator_2(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove_3 = function remove_8(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass(345);
function $add_2(this$static, w){
  $add_1(this$static, w, ($clinit_DOM() , this$static.element));
}

function $remove_2(this$static, w){
  var removed;
  removed = $remove_1(this$static, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(346, 345, $intern_15);
_.remove_3 = function remove_9(w){
  return $remove_2(this, w);
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass(346);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator_0(); w$iterator.hasNext();) {
    w = w$iterator.next_0();
    try {
      c.execute_1(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 12)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_4(caught, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(351, 164, $intern_12, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass(351);
function AttachDetachException$1(){
}

defineClass(352, 1, {}, AttachDetachException$1);
_.execute_1 = function execute_5(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass(352);
function AttachDetachException$2(){
}

defineClass(353, 1, {}, AttachDetachException$2);
_.execute_1 = function execute_6(w){
  $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass(353);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  this.children = new WidgetCollection(this);
  $setElement(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    $onDetach(widget);
  }
   finally {
    $remove_8(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_3(){
  $clinit_RootPanel();
  var rp;
  rp = $get_5(rootPanels, null);
  if (rp) {
    return rp;
  }
  rootPanels.size_0 == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  $put_3(rootPanels, null, rp);
  $add_4(widgetsToDetach, rp);
  return rp;
}

function getBodyElement(){
  $clinit_RootPanel();
  return $doc.body;
}

defineClass(347, 346, $intern_15);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass(347);
function RootPanel$1(){
}

defineClass(349, 1, {}, RootPanel$1);
_.execute_1 = function execute_7(w){
  w.attached && $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass(349);
function RootPanel$2(){
}

defineClass(350, 1, {}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass(350);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, getBodyElement());
}

defineClass(348, 347, $intern_15, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass(348);
function $add_3(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $indexOf_0(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 40, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      newArray[i0] = this$static.array[i0];
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    this$static.array[i] = this$static.array[i - 1];
  }
  this$static.array[beforeIndex] = w;
}

function $remove_3(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    this$static.array[i] = this$static.array[i + 1];
  }
  this$static.array[this$static.size_0] = null;
}

function $remove_4(this$static, w){
  var index_0;
  index_0 = $indexOf_0(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_3(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 40, 4, 0, 1);
}

defineClass(425, 1, {}, WidgetCollection);
_.iterator_0 = function iterator_3(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass(425);
function $next_0(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(195, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext_0(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next_0 = function next_1(){
  return $next_0(this);
}
;
_.remove_2 = function remove_10(){
  if (!this.currentWidget) {
    throw new IllegalStateException;
  }
  this.this$01.parent_0.remove_3(this.currentWidget);
  --this.index_0;
  this.currentWidget = null;
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass(195);
function $setAntialias(this$static, antialias){
  this$static.antialias = antialias;
}

function $activeTexture(this$static, texture){
  this$static.activeTexture(texture);
}

function $attachShader(this$static, program, shader){
  this$static.attachShader(program, shader);
}

function $bindBuffer(this$static, target, buffer){
  this$static.bindBuffer(target, buffer);
}

function $bindFramebuffer(this$static, target, framebuffer){
  this$static.bindFramebuffer(target, framebuffer);
}

function $bindTexture(this$static, target, texture){
  this$static.bindTexture(target, texture);
}

function $bufferData(this$static, target, data_0, usage){
  this$static.bufferData(target, data_0, usage);
}

function $compileShader(this$static, shader){
  this$static.compileShader(shader);
}

function $createShader(this$static, type_0){
  return this$static.createShader(type_0);
}

function $deleteBuffer(this$static, buffer){
  this$static.deleteBuffer(buffer);
}

function $deleteFramebuffer(this$static, framebuffer){
  this$static.deleteFramebuffer(framebuffer);
}

function $deleteProgram(this$static, program){
  this$static.deleteProgram(program);
}

function $deleteRenderbuffer(this$static, renderbuffer){
  this$static.deleteRenderbuffer(renderbuffer);
}

function $deleteShader(this$static, shader){
  this$static.deleteShader(shader);
}

function $deleteTexture(this$static, texture){
  this$static.deleteTexture(texture);
}

function $disableVertexAttribArray(this$static, index_0){
  this$static.disableVertexAttribArray(index_0);
}

function $drawElements(this$static, mode, count, type_0, offset){
  this$static.drawElements(mode, count, type_0, offset);
}

function $enableVertexAttribArray(this$static, index_0){
  this$static.enableVertexAttribArray(index_0);
}

function $getAttribLocation(this$static, program, name_0){
  return this$static.getAttribLocation(program, name_0);
}

function $getProgramInfoLog(this$static, program){
  return this$static.getProgramInfoLog(program);
}

function $getProgramParameterb(this$static, program, pname){
  return this$static.getProgramParameter(program, pname);
}

function $getShaderInfoLog(this$static, shader){
  return this$static.getShaderInfoLog(shader);
}

function $getShaderParameterb(this$static, shader, pname){
  return this$static.getShaderParameter(shader, pname);
}

function $getUniformLocation(this$static, program, name_0){
  return this$static.getUniformLocation(program, name_0);
}

function $linkProgram(this$static, program){
  this$static.linkProgram(program);
}

function $shaderSource(this$static, shader, source){
  this$static.shaderSource(shader, source);
}

function $texImage2D(this$static, target, level, internalformat, format, type_0, image){
  this$static.texImage2D(target, level, internalformat, format, type_0, image);
}

function $texParameteri(this$static, target, pname, param){
  this$static.texParameteri(target, pname, param);
}

function $uniform1f(this$static, location_0, x_0){
  this$static.uniform1f(location_0, x_0);
}

function $uniform1i(this$static, location_0, x_0){
  this$static.uniform1i(location_0, x_0);
}

function $uniform2f(this$static, location_0, x_0, y_0){
  this$static.uniform2f(location_0, x_0, y_0);
}

function $uniform4fv(this$static, location_0, v){
  this$static.uniform4fv(location_0, v);
}

function $useProgram(this$static, program){
  this$static.useProgram(program);
}

function $vertexAttribPointer(this$static, indx, size_0, type_0, normalized, stride, offset){
  this$static.vertexAttribPointer(indx, size_0, type_0, normalized, stride, offset);
}

function $viewport(this$static, x_0, y_0, width_0, height){
  this$static.viewport(x_0, y_0, width_0, height);
}

function getContext(canvas, attributes){
  var names = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-webgl', 'webkit-3d'];
  for (var i = 0; i < names.length; i++) {
    try {
      var ctx = canvas.getContext(names[i], attributes);
      if (ctx != null) {
        if ($wnd.WebGLDebugUtils) {
          $wnd.console && $wnd.console.log && console.log('WebGL debugging enabled');
          return $wnd.WebGLDebugUtils.makeDebugContext(ctx);
        }
        return ctx;
      }
    }
     catch (e) {
    }
  }
  return null;
}

function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(265, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass(265);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(266, 1, {}, SimpleEventBus$2);
_.execute = function execute_8(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass(266);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(267, 1, {}, SimpleEventBus$3);
_.execute = function execute_9(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass(267);
function $charAt(this$static, index_0){
  return $charAt_0(this$static.string, index_0);
}

function $setLength(this$static, newLength){
  var oldLength;
  oldLength = this$static.string.length;
  newLength < oldLength?(this$static.string = __substr(this$static.string, 0, newLength)):newLength > oldLength && (this$static.string += valueOf_1(initDim(C_classLit, $intern_23, 0, newLength - oldLength, 7, 1)));
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(94, 1, {});
_.toString$ = function toString_11(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass(94);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(44, 8, $intern_5, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass(44);
function ArrayIndexOutOfBoundsException(){
  IndexOutOfBoundsException.call(this);
}

defineClass(400, 44, $intern_5, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass(400);
function ArrayStoreException(message){
  RuntimeException_0.call(this, message);
}

defineClass(84, 8, $intern_5, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass(84);
function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException('For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < $intern_24;
  if (isNaN(toReturn)) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
  return toReturn;
}

defineClass(141, 1, {3:1, 141:1});
var Ljava_lang_Number_2_classLit = createForClass(141);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(21, 8, $intern_5, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass(21);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(26, 8, $intern_5, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass(26);
function Integer(value_0){
  this.value_0 = value_0;
}

function compare(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(85, 141, {3:1, 9:1, 85:1, 141:1}, Integer);
_.compareTo = function compareTo_0(b){
  return compare(this.value_0, b.value_0);
}
;
_.equals$ = function equals_5(o){
  return instanceOf(o, 85) && o.value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_7(){
  return this.value_0;
}
;
_.toString$ = function toString_13(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass(85);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_4, 85, 256, 0, 1);
}

var boxedValues_0;
function abs_0(x_0){
  return x_0 < 0?-x_0:x_0;
}

function atan2_0(y_0, x_0){
  return Math.atan2(y_0, x_0);
}

function cos_0(x_0){
  return Math.cos(x_0);
}

function max_1(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function max_2(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_1(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function min_2(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function min_3(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function random(){
  return Math.random();
}

function sin_0(x_0){
  return Math.sin(x_0);
}

function sqrt_0(x_0){
  return Math.sqrt(x_0);
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(49, 8, $intern_5, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass(49);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(113, 21, $intern_5, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass(113);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(61, 1, {3:1, 61:1}, StackTraceElement);
_.equals$ = function equals_6(other){
  var st;
  if (instanceOf(other, 61)) {
    st = other;
    return this.lineNumber == st.lineNumber && equals_17(this.methodName, st.methodName) && equals_17(this.className_0, st.className_0) && equals_17(this.fileName, st.fileName);
  }
  return false;
}
;
_.hashCode$ = function hashCode_8(){
  return hashCode_14(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [valueOf(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString$ = function toString_14(){
  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass(61);
function $charAt_0(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $indexOf_1(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replace(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function $replaceFirst(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex), replace);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_4, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + $substring(replaceStr, ++pos));
  }
  return replaceStr;
}

function __valueOf(x_0, start_0, end){
  var s = '';
  for (var batchStart = start_0; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    s += String.fromCharCode.apply(null, x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

function compareTo_1(thisStr, otherStr){
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_19) {
    hiSurrogate = 55296 + (codePoint - $intern_19 >> 10 & 1023) & $intern_25;
    loSurrogate = 56320 + (codePoint - $intern_19 & 1023) & $intern_25;
    return valueOf_0(hiSurrogate) + valueOf_0(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & $intern_25);
  }
}

function valueOf_0(x_0){
  return String.fromCharCode(x_0);
}

function valueOf_1(x_0){
  return __valueOf(x_0, 0, x_0.length);
}

var Ljava_lang_String_2_classLit = createForClass(2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt_0(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuffer(){
  AbstractStringBuilder.call(this, '');
}

defineClass(106, 94, {428:1}, StringBuffer);
var Ljava_lang_StringBuffer_2_classLit = createForClass(106);
function $append_1(this$static, x_0){
  this$static.string += charToString(x_0);
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_4(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_5(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_6(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_7(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(48, 94, {428:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass(48);
function arraycopy(src_0, srcOfs, dest, destOfs, len){
  var destArray, destComp, destEnd, destType, destlen, srcArray, srcComp, srcType, srclen;
  checkNotNull_0(src_0, 'src');
  checkNotNull_0(dest, 'dest');
  srcType = getClass__Ljava_lang_Class___devirtual$(src_0);
  destType = getClass__Ljava_lang_Class___devirtual$(dest);
  checkArrayType((srcType.modifiers & 4) != 0, 'srcType is not an array');
  checkArrayType((destType.modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  checkArrayType((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0, "Array types don't match");
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw new IndexOutOfBoundsException;
  }
  if (((srcComp.modifiers & 1) == 0 || (srcComp.modifiers & 4) != 0) && srcType != destType) {
    srcArray = src_0;
    destArray = dest;
    if (maskUndefined(src_0) === maskUndefined(dest) && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        destArray[destEnd] = srcArray[--srcOfs];
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        destArray[destOfs++] = srcArray[srcOfs++];
      }
    }
  }
   else 
    len > 0 && nativeArraySplice(src_0, srcOfs, dest, destOfs, len, true);
}

function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(37, 8, $intern_5, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass(37);
function $clear_0(this$static){
  this$static.position_0 = 0;
  this$static.mark = -1;
  this$static.limit = this$static.capacity;
  return this$static;
}

function $limit(this$static, newLimit){
  if (newLimit < 0 || newLimit > this$static.capacity) {
    throw new IllegalArgumentException;
  }
  this$static.limit = newLimit;
  this$static.position_0 > newLimit && (this$static.position_0 = newLimit);
  this$static.mark != -1 && this$static.mark > newLimit && (this$static.mark = -1);
  return this$static;
}

function $position(this$static){
  if (0 > this$static.limit) {
    throw new IllegalArgumentException;
  }
  this$static.position_0 = 0;
  this$static.mark != -1 && this$static.mark > this$static.position_0 && (this$static.mark = -1);
  return this$static;
}

function $rewind(this$static){
  this$static.position_0 = 0;
  this$static.mark = -1;
  return this$static;
}

function Buffer(capacity){
  if (capacity < 0) {
    throw new IllegalArgumentException;
  }
  this.capacity = this.limit = capacity;
}

defineClass(88, 1, {});
_.capacity = 0;
_.limit = 0;
_.mark = -1;
_.position_0 = 0;
var Ljava_nio_Buffer_2_classLit = createForClass(88);
function BufferOverflowException(){
  RuntimeException.call(this);
}

defineClass(173, 8, $intern_5, BufferOverflowException);
var Ljava_nio_BufferOverflowException_2_classLit = createForClass(173);
function $$init(this$static){
  this$static.order = ($clinit_ByteOrder() , BIG_ENDIAN);
}

function $asIntBuffer(this$static){
  if (this$static.order != ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER)) {
    throw new RuntimeException_0('Native order supported only.');
  }
  return new IntBuffer($slice(this$static));
}

function $asShortBuffer(this$static){
  if (this$static.order != ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER)) {
    throw new RuntimeException_0('Native order supported only.');
  }
  return new ShortBuffer($slice(this$static));
}

function $compareTo(this$static, otherBuffer){
  var compareRemaining, otherByte, otherPos, thisByte, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisByte = this$static.byteArray[thisPos];
    otherByte = otherBuffer.byteArray[otherPos];
    if (thisByte != otherByte) {
      return thisByte < otherByte?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_1(this$static, index_0){
  return this$static.byteArray[index_0];
}

function $order(this$static, byteOrder){
  this$static.order = byteOrder;
  return this$static;
}

function $slice(this$static){
  var slice_0;
  slice_0 = new ByteBuffer_1(this$static.byteArray.buffer, this$static.limit - this$static.position_0, this$static.byteArray.byteOffset + this$static.position_0);
  slice_0.order = this$static.order;
  return slice_0;
}

function ByteBuffer(capacity){
  ByteBuffer_0.call(this, new ArrayBuffer(capacity));
}

function ByteBuffer_0(buf){
  Buffer.call(this, buf.byteLength);
  $$init(this);
  this.byteArray = new Int8Array(buf);
}

function ByteBuffer_1(buffer, capacity, offset){
  Buffer.call(this, capacity);
  $$init(this);
  this.byteArray = new Int8Array(buffer, offset, capacity);
}

function allocateDirect(capacity){
  if (capacity < 0) {
    throw new IllegalArgumentException;
  }
  return new ByteBuffer(capacity);
}

defineClass(89, 88, {9:1, 89:1, 140:1}, ByteBuffer, ByteBuffer_1);
_.compareTo = function compareTo_2(otherBuffer){
  return $compareTo(this, otherBuffer);
}
;
_.equals$ = function equals_7(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 89)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_1(this, myPosition++) == $get_1(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize(){
  return 1;
}
;
_.getElementType = function getElementType(){
  return 5120;
}
;
_.getTypedArray = function getTypedArray(){
  return this.byteArray;
}
;
_.hashCode$ = function hashCode_9(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_1(this, myPosition++);
  }
  return hash;
}
;
_.toString$ = function toString_15(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_ByteBuffer_2_classLit) , Ljava_nio_ByteBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_ByteBuffer_2_classLit = createForClass(89);
function $clinit_ByteOrder(){
  $clinit_ByteOrder = emptyMethod;
  BIG_ENDIAN = new ByteOrder('BIG_ENDIAN');
  LITTLE_ENDIAN = new ByteOrder('LITTLE_ENDIAN');
  NATIVE_ORDER = LITTLE_ENDIAN;
}

function ByteOrder(name_0){
  this.name_0 = name_0;
}

defineClass(170, 1, {}, ByteOrder);
_.toString$ = function toString_16(){
  return this.name_0;
}
;
var BIG_ENDIAN, LITTLE_ENDIAN, NATIVE_ORDER;
var Ljava_nio_ByteOrder_2_classLit = createForClass(170);
function $compareTo_0(this$static, otherBuffer){
  var compareRemaining, otherFloat, otherPos, thisFloat, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisFloat = this$static.floatArray[thisPos];
    otherFloat = otherBuffer.floatArray[otherPos];
    if (thisFloat != otherFloat && (thisFloat == thisFloat || otherFloat == otherFloat)) {
      return thisFloat < otherFloat?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_2(this$static, index_0){
  return this$static.floatArray[index_0];
}

function $put_0(this$static, src_0, len){
  var i, length_0;
  length_0 = src_0.length;
  if (len < 0 || gt(fromInt(len), fromInt(length_0))) {
    throw new IndexOutOfBoundsException;
  }
  if (len > this$static.limit - this$static.position_0) {
    throw new BufferOverflowException;
  }
  for (i = 0; i < len; i++) {
    this$static.floatArray[this$static.position_0++] = src_0[i];
  }
  return this$static;
}

function FloatBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear_0(this.byteBuffer);
  this.floatArray = create_0(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(103, 88, {9:1, 103:1, 140:1}, FloatBuffer);
_.compareTo = function compareTo_3(otherBuffer){
  return $compareTo_0(this, otherBuffer);
}
;
_.equals$ = function equals_8(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 103)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_2(this, myPosition++) == $get_2(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_0(){
  return 4;
}
;
_.getElementType = function getElementType_0(){
  return 5126;
}
;
_.getTypedArray = function getTypedArray_0(){
  return this.floatArray;
}
;
_.toString$ = function toString_17(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_FloatBuffer_2_classLit) , Ljava_nio_FloatBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_FloatBuffer_2_classLit = createForClass(103);
function $compareTo_1(this$static, otherBuffer){
  var compareRemaining, otherInt, otherPos, thisInt, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisInt = this$static.intArray[thisPos];
    otherInt = otherBuffer.intArray[otherPos];
    if (thisInt != otherInt) {
      return thisInt < otherInt?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_3(this$static, index_0){
  return this$static.intArray[index_0];
}

function $put_1(this$static, index_0, c){
  this$static.intArray[index_0] = c;
  return this$static;
}

function IntBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear_0(this.byteBuffer);
  this.intArray = create_2(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(130, 88, {9:1, 130:1, 140:1}, IntBuffer);
_.compareTo = function compareTo_4(otherBuffer){
  return $compareTo_1(this, otherBuffer);
}
;
_.equals$ = function equals_9(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 130)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_3(this, myPosition++) == $get_3(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_1(){
  return 4;
}
;
_.getElementType = function getElementType_1(){
  return 5124;
}
;
_.getTypedArray = function getTypedArray_1(){
  return this.intArray;
}
;
_.hashCode$ = function hashCode_10(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_3(this, myPosition++);
  }
  return hash;
}
;
_.toString$ = function toString_18(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_IntBuffer_2_classLit) , Ljava_nio_IntBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_IntBuffer_2_classLit = createForClass(130);
function $compareTo_2(this$static, otherBuffer){
  var compareRemaining, otherByte, otherPos, thisByte, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisByte = this$static.shortArray[thisPos];
    otherByte = otherBuffer.shortArray[otherPos];
    if (thisByte != otherByte) {
      return thisByte < otherByte?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_4(this$static, index_0){
  return this$static.shortArray[index_0];
}

function $put_2(this$static, src_0, len){
  var i, length_0;
  length_0 = src_0.length;
  if (len < 0 || gt(fromInt(len), fromInt(length_0))) {
    throw new IndexOutOfBoundsException;
  }
  if (len > this$static.limit - this$static.position_0) {
    throw new BufferOverflowException;
  }
  for (i = 0; i < len; i++) {
    this$static.shortArray[this$static.position_0++] = src_0[i];
  }
  return this$static;
}

function ShortBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 1);
  this.byteBuffer = byteBuffer;
  $clear_0(this.byteBuffer);
  this.shortArray = create_1(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(131, 88, {9:1, 131:1, 140:1}, ShortBuffer);
_.compareTo = function compareTo_5(otherBuffer){
  return $compareTo_2(this, otherBuffer);
}
;
_.equals$ = function equals_10(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 131)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_4(this, myPosition++) == $get_4(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_2(){
  return 2;
}
;
_.getElementType = function getElementType_2(){
  return 5122;
}
;
_.getTypedArray = function getTypedArray_2(){
  return this.shortArray;
}
;
_.hashCode$ = function hashCode_11(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_4(this, myPosition++);
  }
  return hash;
}
;
_.toString$ = function toString_19(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_ShortBuffer_2_classLit) , Ljava_nio_ShortBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_ShortBuffer_2_classLit = createForClass(131);
function $containsKey(this$static, key){
  return isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0){
  return this$static.stringMap.containsValue(value_0) || this$static.hashCodeMap.containsValue(value_0);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_5(this$static, key){
  return isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_2(key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_2(key) === undefined);
}

function $put_3(this$static, key, value_0){
  return isJavaString(key)?$putStringValue(this$static, key, value_0):$put_4(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_4(this$static.hashCodeMap, null, value_0):this$static.stringMap.put_0(key, value_0);
}

function $remove_5(this$static, key){
  return isJavaString(key)?key == null?$remove_9(this$static.hashCodeMap, null):this$static.stringMap.remove_4(key):$remove_9(this$static.hashCodeMap, key);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

defineClass(212, 447, $intern_16);
_.containsKey = function containsKey_1(key){
  return $containsKey(this, key);
}
;
_.entrySet_0 = function entrySet_0(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_1 = function get_4(key){
  return $get_5(this, key);
}
;
_.put = function put_1(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.remove_1 = function remove_11(key){
  return $remove_5(this, key);
}
;
_.size_1 = function size_5(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass(212);
function $contains_0(this$static, o){
  if (instanceOf(o, 46)) {
    return $containsEntry(this$static.this$01, o);
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(95, 449, $intern_18, AbstractHashMap$EntrySet);
_.contains_0 = function contains_3(o){
  return $contains_0(this, o);
}
;
_.iterator_0 = function iterator_4(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove = function remove_12(entry){
  var key;
  if ($contains_0(this, entry)) {
    key = entry.getKey();
    $remove_5(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_6(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass(95);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries_0();
  return this$static.current.hasNext();
}

function $next_1(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext(this$static)) , this$static.last = this$static.current , this$static.current.next_0();
}

function $remove_6(this$static){
  checkState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_2();
  this$static.last = null;
  recordLastKnownStructure(this$static.this$01, this$static);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries_0();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(96, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_1(){
  return $hasNext(this);
}
;
_.next_0 = function next_2(){
  return $next_1(this);
}
;
_.remove_2 = function remove_13(){
  $remove_6(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass(96);
function $remove_7(this$static){
  checkState(this$static.last != -1);
  this$static.this$01_0.remove_0(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(36, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_2(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_0 = function next_3(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_0(this.last = this.i++);
}
;
_.remove_2 = function remove_14(){
  $remove_7(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass(36);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(238, 36, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_0(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass(238);
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(145, 449, $intern_18, AbstractMap$1);
_.contains_0 = function contains_4(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator_0 = function iterator_5(){
  return $iterator(this);
}
;
_.remove = function remove_15(key){
  if ($containsKey(this.this$01, key)) {
    $remove_5(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_7(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass(145);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(214, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_3(){
  return $hasNext(this.val$outerIter2);
}
;
_.next_0 = function next_4(){
  var entry;
  entry = $next_1(this.val$outerIter2);
  return entry.getKey();
}
;
_.remove_2 = function remove_16(){
  $remove_6(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass(214);
function $iterator_0(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$2$1(outerIter);
}

function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(71, 448, {}, AbstractMap$2);
_.contains_0 = function contains_5(value_0){
  return $containsValue(this.this$01, value_0);
}
;
_.iterator_0 = function iterator_6(){
  return $iterator_0(this);
}
;
_.size_1 = function size_8(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass(71);
function $next_2(this$static){
  var entry;
  entry = $next_1(this$static.val$outerIter2);
  return entry.getValue();
}

function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(215, 1, {}, AbstractMap$2$1);
_.hasNext = function hasNext_4(){
  return $hasNext(this.val$outerIter2);
}
;
_.next_0 = function next_5(){
  return $next_2(this);
}
;
_.remove_2 = function remove_17(){
  $remove_6(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass(215);
defineClass(213, 1, $intern_17);
_.equals$ = function equals_11(other){
  var entry;
  if (!instanceOf(other, 46)) {
    return false;
  }
  entry = other;
  return equals_17(this.key_0, entry.getKey()) && equals_17(this.value_0, entry.getValue());
}
;
_.getKey = function getKey_0(){
  return this.key_0;
}
;
_.getValue = function getValue_0(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_12(){
  return hashCode_21(this.key_0) ^ hashCode_21(this.value_0);
}
;
_.setValue = function setValue_0(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_20(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass(213);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(144, 213, $intern_17, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass(144);
defineClass(453, 1, $intern_17);
_.equals$ = function equals_12(other){
  var entry;
  if (!instanceOf(other, 46)) {
    return false;
  }
  entry = other;
  return equals_17(this.getKey(), entry.getKey()) && equals_17(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_13(){
  return hashCode_21(this.getKey()) ^ hashCode_21(this.getValue());
}
;
_.toString$ = function toString_21(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass(453);
defineClass(464, 452, {47:1});
_.add_0 = function add_4(index_0, element){
  var iter;
  iter = $listIterator(this, index_0);
  $addNode(iter.this$01, element, iter.currentNode.prev, iter.currentNode);
  ++iter.currentIndex;
  iter.lastNode = null;
}
;
_.get_0 = function get_5(index_0){
  var iter;
  iter = $listIterator(this, index_0);
  try {
    return checkCriticalElement(iter.currentNode != iter.this$01.tail) , iter.lastNode = iter.currentNode , iter.currentNode = iter.currentNode.next , ++iter.currentIndex , iter.lastNode.value_0;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 50)) {
      throw new IndexOutOfBoundsException_0("Can't get element " + index_0);
    }
     else 
      throw unwrap($e0);
  }
}
;
_.iterator_0 = function iterator_7(){
  return $listIterator(this, 0);
}
;
_.remove_0 = function remove_18(index_0){
  var iter, old;
  iter = $listIterator(this, index_0);
  try {
    old = (checkCriticalElement(iter.currentNode != iter.this$01.tail) , iter.lastNode = iter.currentNode , iter.currentNode = iter.currentNode.next , ++iter.currentIndex , iter.lastNode.value_0);
    $remove_11(iter);
    return old;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 50)) {
      throw new IndexOutOfBoundsException_0("Can't remove element " + index_0);
    }
     else 
      throw unwrap($e0);
  }
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass(464);
function fill(a, toIndex){
  var i;
  for (i = 0; i < toIndex; ++i) {
    a[i] = null;
  }
}

function fill_0(a){
  fill(a, a.length);
}

function fill_1(a, toIndex){
  var i;
  for (i = 0; i < toIndex; ++i) {
    a[i] = false;
  }
}

function fill_2(a){
  fill_1(a, a.length);
}

function hashCode_14(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function insertionSort(array, low, high){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && $compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      array[j] = array[j - 1];
      array[j - 1] = t;
    }
  }
}

function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && $compare(src_0[srcLow], src_0[topIdx]) <= 0?(dest[destLow++] = src_0[srcLow++]):(dest[destLow++] = src_0[topIdx++]);
  }
}

function mergeSort(x_0, fromIndex, toIndex, comp){
  var temp, newLength, length_0, copy, result;
  !comp && ($clinit_Comparators() , $clinit_Comparators() , NATURAL);
  temp = (newLength = (length_0 = toIndex - fromIndex , checkCriticalArgument(length_0 >= 0, initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [valueOf(fromIndex), valueOf(toIndex)])) , length_0) , copy = (result = initializeArrayElementsWithDefaults(0, newLength) , initValues(getClass__Ljava_lang_Class___devirtual$(x_0), x_0.castableTypeMap$, x_0.__elementTypeId$, x_0.__elementTypeCategory$, result) , result) , arraycopy(x_0, fromIndex, copy, 0, min_3(x_0.length - fromIndex, newLength)) , copy);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex);
}

function mergeSort_0(temp, array, low, high, ofs){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs);
  if ($compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      array[low++] = temp[tempLow++];
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high);
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_15(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator_0(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_16(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator_0(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function replaceContents(target, x_0){
  var i, size_0;
  size_0 = target.arrayList.array.length;
  for (i = 0; i < size_0; i++) {
    checkArrayElementIndex(i, target.arrayList.array.length);
    $set(target.arrayList, i, x_0[i]);
  }
}

function sort_0(target){
  $clinit_Collections();
  var x_0;
  x_0 = $toArray(target.arrayList);
  mergeSort(x_0, 0, x_0.length, null);
  replaceContents(target, x_0);
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 83)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(230, 452, $intern_3, Collections$EmptyList);
_.contains_0 = function contains_6(object){
  return false;
}
;
_.get_0 = function get_6(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator_0 = function iterator_8(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_9(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass(230);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(231, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_5(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_0 = function next_6(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_1(){
  throw new NoSuchElementException;
}
;
_.remove_2 = function remove_19(){
  throw new IllegalStateException;
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass(231);
function Collections$UnmodifiableCollection(coll){
  this.coll = coll;
}

defineClass(146, 1, {});
_.add_1 = function add_5(o){
  throw new UnsupportedOperationException;
}
;
_.iterator_0 = function iterator_9(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator_0());
}
;
_.remove = function remove_20(o){
  throw new UnsupportedOperationException;
}
;
_.size_1 = function size_10(){
  return this.coll.size_1();
}
;
_.toString$ = function toString_22(){
  return this.coll.toString$();
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass(146);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(148, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext = function hasNext_6(){
  return this.it.hasNext();
}
;
_.next_0 = function next_7(){
  return this.it.next_0();
}
;
_.remove_2 = function remove_21(){
  throw new UnsupportedOperationException;
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass(148);
function Collections$UnmodifiableList(list){
  Collections$UnmodifiableCollection.call(this, list);
  this.list = list;
}

defineClass(147, 146, {47:1}, Collections$UnmodifiableList);
_.equals$ = function equals_13(o){
  return this.list.equals$(o);
}
;
_.get_0 = function get_7(index_0){
  return this.list.get_0(index_0);
}
;
_.hashCode$ = function hashCode_17(){
  return this.list.hashCode$();
}
;
_.isEmpty = function isEmpty_2(){
  return this.list.isEmpty();
}
;
_.listIterator = function listIterator_2(){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(0));
}
;
_.listIterator_0 = function listIterator_3(from){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(from));
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass(147);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(149, 148, {}, Collections$UnmodifiableListIterator);
_.hasPrevious = function hasPrevious_1(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_2(){
  return this.lit.previous();
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass(149);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(232, 1, $intern_16, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_1(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals$ = function equals_14(o){
  return this.map_0.equals$(o);
}
;
_.get_1 = function get_8(key){
  return this.map_0.get_1(key);
}
;
_.hashCode$ = function hashCode_18(){
  return this.map_0.hashCode$();
}
;
_.isEmpty = function isEmpty_3(){
  return this.map_0.isEmpty();
}
;
_.put = function put_2(key, value_0){
  throw new UnsupportedOperationException;
}
;
_.remove_1 = function remove_22(key){
  throw new UnsupportedOperationException;
}
;
_.size_1 = function size_11(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_23(){
  return this.map_0.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass(232);
defineClass(233, 146, $intern_18);
_.equals$ = function equals_15(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_19(){
  return this.coll.hashCode$();
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass(233);
function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  Collections$UnmodifiableCollection.call(this, s);
}

defineClass(234, 233, $intern_18, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator_0 = function iterator_10(){
  var it;
  it = this.coll.iterator_0();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass(234);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(237, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.hasNext = function hasNext_7(){
  return this.val$it2.hasNext();
}
;
_.next_0 = function next_8(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(this.val$it2.next_0());
}
;
_.remove_2 = function remove_23(){
  throw new UnsupportedOperationException;
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass(237);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(235, 1, $intern_17, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals$ = function equals_16(o){
  return this.entry.equals$(o);
}
;
_.getKey = function getKey_1(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_1(){
  return this.entry.getValue();
}
;
_.hashCode$ = function hashCode_20(){
  return this.entry.hashCode$();
}
;
_.setValue = function setValue_1(value_0){
  throw new UnsupportedOperationException;
}
;
_.toString$ = function toString_24(){
  return this.entry.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass(235);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(236, 147, {47:1, 83:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass(236);
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  NATURAL = new Comparators$1;
}

var NATURAL;
function $compare(o1, o2){
  checkNotNull(o1);
  checkNotNull(o2);
  return isJavaString(o1)?compareTo_1(o1, o2):o1.compareTo(o2);
}

function Comparators$1(){
}

defineClass(414, 1, {}, Comparators$1);
var Ljava_util_Comparators$1_2_classLit = createForClass(414);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function recordLastKnownStructure(host, iterator){
  setModCount(iterator, host._gwt_modCount);
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(136, 8, $intern_5, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass(136);
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function $getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}

function HashMap(){
  $reset(this);
}

defineClass(28, 212, {3:1, 114:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass(28);
function $add_4(this$static, o){
  var old;
  old = $put_3(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_1(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_8(this$static, o){
  return $remove_5(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(134, 449, {3:1, 82:1}, HashSet);
_.contains_0 = function contains_7(o){
  return $contains_1(this, o);
}
;
_.isEmpty = function isEmpty_4(){
  return this.map_0.size_0 == 0;
}
;
_.iterator_0 = function iterator_11(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.remove = function remove_24(o){
  return $remove_8(this, o);
}
;
_.size_1 = function size_12(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_25(){
  return $toString_0(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass(134);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + $getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_4(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key == null?'0':'' + $getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  chain[chain.length] = new AbstractMap$SimpleEntry(key, value_0);
  $elementAdded(this$static.host);
  return null;
}

function $remove_9(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + $getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if ($equals_0(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(152, 1, {}, InternalJsHashCodeMap);
_.containsValue = function containsValue(value_0){
  var entry, entry$array, entry$index, entry$max, hashCode, hashCode$array, hashCode$index, hashCode$max;
  for (hashCode$array = $keys(this) , hashCode$index = 0 , hashCode$max = hashCode$array.length; hashCode$index < hashCode$max; ++hashCode$index) {
    hashCode = hashCode$array[hashCode$index];
    for (entry$array = this.backingMap[hashCode] , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
      entry = entry$array[entry$index];
      if ($equals_0(value_0, entry.getValue())) {
        return true;
      }
    }
  }
  return false;
}
;
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries_0 = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass(152);
function $hasNext_0(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_2, 46, 0, 0, 1);
}

defineClass(273, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_8(){
  return $hasNext_0(this);
}
;
_.next_0 = function next_9(){
  return checkCriticalElement($hasNext_0(this)) , this.lastChain = this.chain , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.remove_2 = function remove_25(){
  checkState(!!this.lastEntry);
  $remove_9(this.this$01, this.lastEntry.getKey());
  maskUndefined(this.chain) === maskUndefined(this.lastChain) && this.chain.length != 1 && --this.itemIndex;
  this.lastEntry = null;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastChain = null;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass(273);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(271, 152, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.containsValue = function containsValue_0(value_0){
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        var entry = array[i];
        var entryValue = entry.getValue();
        if (this.equalsBridge(value_0, entryValue)) {
          return true;
        }
      }
    }
  }
  return false;
}
;
_.createMap = function createMap_0(){
  return {};
}
;
_.entries_0 = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_1(array[i]);
      }
    }
  }
  return list.iterator_0();
}
;
_.equalsBridge = function equalsBridge(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass(271);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(272, 23, $intern_3, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove_0 = function remove_26(index_0){
  var removed;
  return removed = $remove(this, index_0) , $remove_9(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass(272);
function InternalJsMapFactory(){
}

defineClass(268, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass(268);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(270, 268, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass(270);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(269, 268, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass(269);
function $containsValue_0(this$static, value_0){
  var map_0 = this$static.backingMap;
  for (var key in map_0) {
    if (this$static.equalsBridge_0(value_0, map_0[key])) {
      return true;
    }
  }
  return false;
}

function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_5(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_1(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_10(this$static, key){
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_1(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(118, 1, {}, InternalJsStringMap);
_.containsValue = function containsValue_1(value_0){
  return $containsValue_0(this, value_0);
}
;
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries_0 = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.equalsBridge_0 = function equalsBridge_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.get_2 = function get_9(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put_0 = function put_3(key, value_0){
  return $put_5(this, key, value_0);
}
;
_.remove_4 = function remove_27(key){
  return $remove_10(this, key);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass(118);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(242, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_9(){
  return this.i < this.val$keys2.length;
}
;
_.next_0 = function next_10(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.last = this.i++]);
}
;
_.remove_2 = function remove_28(){
  checkState(this.last != -1);
  this.this$01.remove_4(this.val$keys2[this.last]);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass(242);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(150, 453, $intern_17, InternalJsStringMap$2);
_.getKey = function getKey_2(){
  return this.val$key2;
}
;
_.getValue = function getValue_2(){
  return this.this$01.get_2(this.val$key2);
}
;
_.setValue = function setValue_2(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass(150);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(239, 118, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.containsValue = function containsValue_2(value_0){
  var map_0 = this.backingMap;
  for (var key in map_0) {
    if (key.charCodeAt(0) == 58) {
      var entryValue = map_0[key];
      if (this.equalsBridge_0(value_0, entryValue)) {
        return true;
      }
    }
  }
  return false;
}
;
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries_0 = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator_0();
}
;
_.get_2 = function get_10(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put_0 = function put_4(key, value_0){
  return $put_5(this, ':' + key, value_0);
}
;
_.remove_4 = function remove_29(key){
  return $remove_10(this, ':' + key);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass(239);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(241, 23, $intern_3, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove_0 = function remove_30(index_0){
  var removed;
  return removed = $remove(this, index_0) , $remove_10(this.this$11, ':' + removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass(241);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(240, 118, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.containsValue = function containsValue_3(value_0){
  var protoValue;
  protoValue = this.backingMap['__proto__'];
  if (!(protoValue === undefined) && (maskUndefined(value_0) === maskUndefined(protoValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, protoValue))) {
    return true;
  }
  return $containsValue_0(this, value_0);
}
;
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass(240);
function $addFirst(this$static, o){
  $addNode(this$static, o, this$static.header, this$static.header.next);
}

function $addLast(this$static, o){
  $addNode(this$static, o, this$static.tail.prev, this$static.tail);
}

function $addNode(this$static, o, prev, next){
  var node;
  node = new LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next = next;
  next.prev = prev.next = node;
  ++this$static.size_0;
}

function $getFirst(this$static){
  checkCriticalElement(this$static.size_0 != 0);
  return this$static.header.next.value_0;
}

function $listIterator(this$static, index_0){
  var i, node;
  checkPositionIndex(index_0, this$static.size_0);
  if (index_0 >= this$static.size_0 >> 1) {
    node = this$static.tail;
    for (i = this$static.size_0; i > index_0; --i) {
      node = node.prev;
    }
  }
   else {
    node = this$static.header.next;
    for (i = 0; i < index_0; ++i) {
      node = node.next;
    }
  }
  return new LinkedList$ListIteratorImpl(this$static, index_0, node);
}

function $removeFirst(this$static){
  checkCriticalElement(this$static.size_0 != 0);
  return $removeNode(this$static, this$static.header.next);
}

function $removeNode(this$static, node){
  var oldValue;
  oldValue = node.value_0;
  node.next.prev = node.prev;
  node.prev.next = node.next;
  node.next = node.prev = null;
  node.value_0 = null;
  --this$static.size_0;
  return oldValue;
}

function $reset_0(this$static){
  this$static.header.next = this$static.tail;
  this$static.tail.prev = this$static.header;
  this$static.header.prev = this$static.tail.next = null;
  this$static.size_0 = 0;
}

function LinkedList(){
  this.header = new LinkedList$Node;
  this.tail = new LinkedList$Node;
  $reset_0(this);
}

defineClass(319, 464, {3:1, 47:1}, LinkedList);
_.add_1 = function add_6(o){
  $addNode(this, o, this.tail.prev, this.tail);
  return true;
}
;
_.listIterator_0 = function listIterator_4(index_0){
  return $listIterator(this, index_0);
}
;
_.size_1 = function size_13(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass(319);
function $remove_11(this$static){
  var nextNode;
  checkState(!!this$static.lastNode);
  nextNode = this$static.lastNode.next;
  $removeNode(this$static.this$01, this$static.lastNode);
  this$static.currentNode == this$static.lastNode?(this$static.currentNode = nextNode):--this$static.currentIndex;
  this$static.lastNode = null;
}

function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode = startNode;
  this.currentIndex = index_0;
}

defineClass(320, 1, {}, LinkedList$ListIteratorImpl);
_.hasNext = function hasNext_10(){
  return this.currentNode != this.this$01.tail;
}
;
_.hasPrevious = function hasPrevious_2(){
  return this.currentNode.prev != this.this$01.header;
}
;
_.next_0 = function next_11(){
  return checkCriticalElement(this.currentNode != this.this$01.tail) , this.lastNode = this.currentNode , this.currentNode = this.currentNode.next , ++this.currentIndex , this.lastNode.value_0;
}
;
_.previous = function previous_3(){
  checkCriticalElement(this.currentNode.prev != this.this$01.header);
  this.lastNode = this.currentNode = this.currentNode.prev;
  --this.currentIndex;
  return this.lastNode.value_0;
}
;
_.remove_2 = function remove_31(){
  $remove_11(this);
}
;
_.currentIndex = 0;
_.lastNode = null;
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass(320);
function LinkedList$Node(){
}

defineClass(126, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass(126);
var Ljava_util_Map$Entry_2_classLit = createForInterface();
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(50, 8, {3:1, 16:1, 8:1, 12:1, 50:1}, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass(50);
function equals_17(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_21(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $add_5(this$static, o){
  return $add_0(this$static.arrayList, o);
}

function $get_6(this$static, index_0){
  checkArrayElementIndex(index_0, this$static.arrayList.array.length);
  return $get(this$static.arrayList, index_0);
}

function $remove_12(this$static, index_0){
  checkArrayElementIndex(index_0, this$static.arrayList.array.length);
  return this$static.arrayList.remove_0(index_0);
}

function Vector(){
  this.arrayList = new ArrayList;
}

function checkArrayElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new ArrayIndexOutOfBoundsException;
  }
}

defineClass(390, 452, $intern_3, Vector);
_.add_0 = function add_7(index_0, o){
  checkArrayElementIndex(index_0, this.arrayList.array.length + 1);
  $add(this.arrayList, index_0, o);
}
;
_.add_1 = function add_8(o){
  return $add_5(this, o);
}
;
_.contains_0 = function contains_8(elem){
  return $indexOf(this.arrayList, elem, 0) != -1;
}
;
_.get_0 = function get_11(index_0){
  return $get_6(this, index_0);
}
;
_.isEmpty = function isEmpty_5(){
  return this.arrayList.array.length == 0;
}
;
_.iterator_0 = function iterator_12(){
  return new AbstractList$IteratorImpl(this.arrayList);
}
;
_.remove_0 = function remove_32(index_0){
  return $remove_12(this, index_0);
}
;
_.size_1 = function size_14(){
  return this.arrayList.array.length;
}
;
_.toString$ = function toString_26(){
  return $toString_0(this.arrayList);
}
;
var Ljava_util_Vector_2_classLit = createForClass(390);
function $clinit_Controls(){
  $clinit_Controls = emptyMethod;
  GAME_CONTROL_KEYS = initValues(getClassLiteralForArray(Lplayn_core_Key_2_classLit, 1), $intern_26, 4, 0, [($clinit_Key() , PAUSE), ESCAPE]);
  PLAYER_NAMES = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Left Hand Player', 'Right Hand Player']);
  MULTIPLAY_OPTIONS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Left Player Only', 'Right Player Only', 'Both Players']);
  PLAYER_CONTROL_NAMES = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Up', 'Down', 'Left', 'Right', 'Fire', 'Special']);
  DEFAULT_PLAYER_CONTROL_KEYS = initValues(getClassLiteralForArray(Lplayn_core_Key_2_classLit, 2), $intern_6, 93, 0, [initValues(getClassLiteralForArray(Lplayn_core_Key_2_classLit, 1), $intern_26, 4, 0, [I, K, J, L, D, S]), initValues(getClassLiteralForArray(Lplayn_core_Key_2_classLit, 1), $intern_26, 4, 0, [UP, DOWN, LEFT, RIGHT, SHIFT, SLASH])]);
  playerControlKeys = initDims(Lplayn_core_Key_2_classLit, [$intern_6, $intern_26], [93, 4], 0, [2, 6], 2);
  playerControlStates = initDims(Z_classLit, [$intern_6, $intern_27], [429, 0], 8, [2, 6], 2);
  gameControlStates = initDim(Z_classLit, $intern_27, 0, 2, 8, 1);
  resetKeys();
  WAITING_FOR_ASSIGN = RED_0;
  UNASSIGNED = BLUE_0;
}

function assignNextKey(assignPlayerID, assignControlID){
  $clinit_Controls();
  assignPlayerID_0 = assignPlayerID;
  assignControlID_0 = assignControlID;
  waitingForKeyAssign = true;
}

function clearKeys(key){
  var controlID, playerID;
  for (playerID = 0; playerID < 2; playerID++)
    for (controlID = 0; controlID < 6; controlID++)
      if (playerControlKeys[playerID][controlID] == key) {
        playerControlKeys[playerID][controlID] = UNASSIGNED;
        playerControlStates[playerID][controlID] = false;
      }
}

function clearPlayerControlState(){
  var playerID;
  for (playerID = 0; playerID < 2; playerID++)
    fill_2(playerControlStates[playerID]);
}

function getKey_3(playerID, controlID){
  $clinit_Controls();
  if (waitingForKeyAssign && playerID == assignPlayerID_0 && controlID == assignControlID_0)
    return WAITING_FOR_ASSIGN;
  return playerControlKeys[playerID][controlID];
}

function resetKeys(){
  $clinit_Controls();
  var controlID, playerID;
  for (playerID = 0; playerID < 2; playerID++) {
    for (controlID = 0; controlID < 6; controlID++) {
      playerControlKeys[playerID][controlID] = DEFAULT_PLAYER_CONTROL_KEYS[playerID][controlID];
    }
  }
  clearPlayerControlState();
  waitingForKeyAssign = false;
  updateAllKeysDefined();
}

function sendPlayerControl(playerID, controlID){
  playerControlStates[playerID][controlID] = true;
}

function setKeyState(key, state){
  $clinit_Controls();
  var controlID, controlID0, playerID;
  for (controlID0 = 0; controlID0 < 2; controlID0++) {
    if (key == GAME_CONTROL_KEYS[controlID0]) {
      state && !gameControlStates[controlID0] && (waitingForKeyAssign && controlID0 == 1?(waitingForKeyAssign = false):($clinit_SpaceInvadersX() , !!currentScreen && $controlPressed(currentScreen, controlID0)));
      gameControlStates[controlID0] = state;
      return;
    }
  }
  if (waitingForKeyAssign && state) {
    clearKeys(key);
    playerControlKeys[assignPlayerID_0][assignControlID_0] = key;
    sendPlayerControl(assignPlayerID_0, assignControlID_0);
    waitingForKeyAssign = false;
    updateAllKeysDefined();
    return;
  }
  for (playerID = 0; playerID < 2; playerID++) {
    for (controlID = 0; controlID < 6; controlID++) {
      if (key == playerControlKeys[playerID][controlID]) {
        playerControlStates[playerID][controlID] = state;
        return;
      }
    }
  }
}

function updateAllKeysDefined(){
  var controlID, playerID;
  for (playerID = 0; playerID < 2; playerID++)
    for (controlID = 0; controlID < 6; controlID++)
      if (playerControlKeys[playerID][controlID] == UNASSIGNED) {
        return;
      }
}

var DEFAULT_PLAYER_CONTROL_KEYS, GAME_CONTROL_KEYS, MULTIPLAY_OPTIONS, PLAYER_CONTROL_NAMES, PLAYER_NAMES, UNASSIGNED, WAITING_FOR_ASSIGN, assignControlID_0 = 0, assignPlayerID_0 = 0, gameControlStates, playerControlKeys, playerControlStates, waitingForKeyAssign = false;
function $controlPressed(this$static, controlID){
  switch (controlID) {
    case 0:
      this$static.pause_0();
      break;
    case 1:
      this$static.back_0();
  }
}

function $drawWidgets(this$static, g){
  var w, w$array, w$index, w$max;
  for (w$array = this$static.widgets , w$index = 0 , w$max = w$array.length; w$index < w$max; ++w$index) {
    w = w$array[w$index];
    w.draw(g);
  }
}

function $enterWidgets(this$static){
  var w, w$array, w$index, w$max;
  for (w$array = this$static.widgets , w$index = 0 , w$max = w$array.length; w$index < w$max; ++w$index) {
    w = w$array[w$index];
    w.tickOut();
  }
}

function $mouseClick(this$static, buttonCode, x_0, y_0){
  var w, w$array, w$index, w$max;
  for (w$array = this$static.widgets , w$index = 0 , w$max = w$array.length; w$index < w$max; ++w$index) {
    w = w$array[w$index];
    w.mouseClick(buttonCode, x_0, y_0);
  }
}

function $tickWidgets(this$static, mouseX, mouseY){
  var w, w$array, w$index, w$max;
  for (w$array = this$static.widgets , w$index = 0 , w$max = w$array.length; w$index < w$max; ++w$index) {
    w = w$array[w$index];
    w.tick_0(mouseX, mouseY);
  }
}

function MenuScreen(){
  MenuScreen_0.call(this, initDim(Lnz_ac_auckland_spaceinvadersx_menu_Widget_2_classLit, $intern_2, 14, 0, 0, 1));
}

function MenuScreen_0(widgets){
  this.widgets = widgets;
}

defineClass(29, 1, {});
_.back_0 = function back_1(){
  popMenuScreen();
}
;
_.backgroundType = function backgroundType(){
  return 0;
}
;
_.draw = function draw(g){
  draw_33(g, -160);
  $drawWidgets(this, g);
}
;
_.enter = function enter_0(){
  $enterWidgets(this);
}
;
_.mouseClick = function mouseClick(buttonCode, x_0, y_0){
  $mouseClick(this, buttonCode, x_0, y_0);
}
;
_.pause_0 = function pause(){
}
;
_.prefade = function prefade(){
}
;
_.tick_0 = function tick(mouseX, mouseY){
  $tickWidgets(this, mouseX, mouseY);
}
;
_.typeChar = function typeChar(character){
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_MenuScreen_2_classLit = createForClass(29);
function $clinit_Resources(){
  $clinit_Resources = emptyMethod;
  NULL_SOUND = new Sound;
  soundMap = new HashMap;
  musicMap = new HashMap;
}

function Resources(){
  MenuScreen.call(this);
}

function loadFirst(){
  $clinit_Resources();
  xenonC = getColourableFont(getColourableTiles(getColourableImage(loadImage('XenonFont.png'), 7), 16, 16));
  xenonWhite = recolourFont(xenonC, ($clinit_Toolkit() , null));
  xenonGrey = recolourFont(xenonC, ($clinit_Colour() , GREY));
  resources = new Resources;
}

function loadImage(fileName){
  var image;
  image = loadImage_0('images/' + fileName);
  return image;
}

function loadMusic(fileName){
  var music;
  fileName = 'music/' + fileName;
  $hasStringValue(musicMap, fileName) || $putStringValue(musicMap, fileName, $getSound(platform.assets, fileName));
  if ($getStringValue(musicMap, fileName).state._result_0._value != null) {
    music = $getStringValue(musicMap, fileName);
    return music;
  }
  return NULL_SOUND;
}

function loadSound(fileName){
  fileName = 'sounds/' + fileName;
  $hasStringValue(soundMap, fileName) || $putStringValue(soundMap, fileName, $getSound(platform.assets, fileName));
  if ($getStringValue(soundMap, fileName).state._result_0._value != null) {
    return $getStringValue(soundMap, fileName);
  }
  return NULL_SOUND;
}

function loadStartUp(){
  $clinit_Resources();
  var HUD, alienCyan, arrows;
  getTiles(loadImage('Icon.png'), 16, 16);
  alienMissile = loadImage('AlienMissile.png');
  bubble = loadImage('Bubble.png');
  corsairTurret = loadImage('CorsairTurret.png');
  nebula = loadImage('Nebula.png');
  shockWave = loadImage('ShockWave.png');
  stars = loadImage('Stars.png');
  twinkle = loadImage('Twinkle.png');
  crab = flipImage(loadImage('Crab.png'));
  dagger = loadImage('Dagger.png');
  hawk = flipImage(loadImage('Hawk.png'));
  phantom = flipImage(loadImage('Phantom.png'));
  wasp = loadImage('Wasp.png');
  beast = flipImage(loadImage('Beast.png'));
  crabS = recolourImage(getColourableImage(crab, 0), ($clinit_Colour() , WHITE));
  daggerS = recolourImage(getColourableImage(dagger, 0), WHITE);
  phantomS = recolourImage(getColourableImage(phantom, 0), WHITE);
  hawkS = recolourImage(getColourableImage(hawk, 0), WHITE);
  waspS = recolourImage(getColourableImage(wasp, 0), WHITE);
  beastS = recolourImage(getColourableImage(beast, 0), WHITE);
  xLogo = loadImage('XLogo.png');
  xMini = scaleImage(xLogo);
  xPulse = recolourImage(getColourableImage(xMini, 0), YELLOW);
  xSilver = loadImage('XSilver.png');
  siRed = loadImage('SpaceInvadersLogo.png');
  siYellow = recolourImage(getColourableImage(siRed, 4), YELLOW);
  arrows = getTiles(loadImage('SelectArrows.png'), 16, 16);
  if (arrows.tiles.length > 0) {
    arrowRight = arrows.tiles[0];
    arrowLeft = arrows.tiles[1];
  }
  HUD = getTiles(loadImage('HUD.png'), 16, 16);
  if (HUD.tiles.length > 0) {
    heartHUD = HUD.tiles[0];
    nukeHUD = HUD.tiles[1];
    rapidHUD = HUD.tiles[2];
  }
  corsairC = getColourableImage(loadImage('Corsair.png'), 2);
  corsairS = recolourImage_0(corsairC, WHITE, 0);
  destroyerC = getColourableImage(loadImage('Destroyer.png'), 2);
  destroyerS = recolourImage_0(destroyerC, WHITE, 0);
  xWingC = getColourableImage(loadImage('XWing.png'), 4);
  xWingS = recolourImage_0(xWingC, WHITE, 0);
  xWingLaserC = getColourableImage(loadImage('XWingLaser.png'), 4);
  xWingMissileC = getColourableImage(loadImage('XWingMissile.png'), 4);
  alienExplosion = getTiles(loadImage('AlienExplosion.png'), 128, 128);
  clouds = getTiles(scaleImage_0(loadImage('Clouds.png'), 1024, 1024), 512, 512);
  flakExplosion = getTiles(loadImage('FlakExplosion.png'), 128, 128);
  getTiles(loadImage('OrangeExplosion.png'), 64, 64);
  missileExplosion = getTiles(loadImage('MissileExplosion.png'), 64, 64);
  missileFlame = getTiles(loadImage('MissileFlame.png'), 24, 24);
  shipExplosion = getTiles(loadImage('ShipExplosion.png'), 128, 128);
  smokeEffect = getTiles(loadImage('SmokeEffect.png'), 32, 32);
  heart = getTiles(loadImage('Heart.png'), 32, 32);
  nuke = getTiles(loadImage('Nuke.png'), 32, 32);
  shield = getTiles(loadImage('Shield.png'), 32, 32);
  rapid = getTiles(loadImage('Rapid.png'), 32, 32);
  corsairBombC = getColourableTiles(getColourableImage(loadImage('CorsairBomb.png'), 4), 32, 24);
  corsairBulletC = getColourableTiles(getColourableImage(loadImage('CorsairBullet.png'), 2), 12, 24);
  laserEffectC = getColourableTiles(getColourableImage(loadImage('LaserEffect.png'), 2), 32, 32);
  alienCyan = new Colour(52479);
  alienPlasmaC = getColourableTiles(getColourableImage(loadImage('AlienPlasma.png'), 4), 32, 32);
  greenAlienPlasma = recolourTiles_0(alienPlasmaC, GREEN);
  redAlienPlasma = recolourTiles_0(alienPlasmaC, ($clinit_Toolkit() , null));
  cyanAlienPlasma = recolourTiles_0(alienPlasmaC, alienCyan);
  plasmaEffectC = getColourableTiles(getColourableImage(loadImage('PlasmaEffect.png'), 4), 32, 32);
  greenPlasmaEffect = recolourTiles_0(plasmaEffectC, GREEN);
  redPlasmaEffect = recolourTiles_0(plasmaEffectC, null);
  cyanPlasmaEffect = recolourTiles_0(plasmaEffectC, alienCyan);
  loadSound('ArmourHit');
  beep = loadSound('Beep');
  bombLaunch = loadSound('BombLaunch');
  collect_1 = loadSound('Collect');
  deathRay = loadSound('DeathRay');
  deepExplosion = loadSound('DeepExplosion');
  explosion = loadSound('Explosion');
  missileLaunch = loadSound('MissileLaunch');
  plasma = loadSound('Plasma');
  pop_0 = loadSound('Pop');
  titleTrack = loadMusic('SWIV_Decimation');
  gameOverTrack = loadMusic('SD_GameOver');
  gameWonTrack = loadMusic('SWIV_Mellow');
  track1 = loadMusic('Stardust');
  track2 = loadMusic('Blade_Raver');
  track3 = loadMusic('Assassin');
  track4 = loadMusic('Xpedition');
}

function musicLoaded(){
  $clinit_Resources();
  var loaded, s, s$iterator;
  loaded = 0;
  for (s$iterator = $iterator_0(new AbstractMap$2(musicMap)); $hasNext(s$iterator.val$outerIter2);) {
    s = $next_2(s$iterator);
    s.state._result_0._value != null && ++loaded;
  }
  return loaded;
}

function setMusicMuted(musicMuted){
  $clinit_Resources();
  musicMuted_0 = musicMuted;
  updateMusic();
  !!($clinit_SpaceInvadersX() , currentTrack) && (musicMuted?currentTrack.stop_0():currentTrack.play_0());
}

function setMusicVolume(musicVolume){
  $clinit_Resources();
  musicVolume_0 = musicVolume;
  updateMusic();
}

function setSoundMuted(soundMuted){
  $clinit_Resources();
  soundMuted_0 = soundMuted;
  updateSounds();
}

function setSoundVolume(soundVolume){
  $clinit_Resources();
  soundVolume_0 = soundVolume;
  updateSounds();
}

function soundsLoaded(){
  $clinit_Resources();
  var loaded, s, s$iterator;
  loaded = 0;
  for (s$iterator = $iterator_0(new AbstractMap$2(soundMap)); $hasNext(s$iterator.val$outerIter2);) {
    s = $next_2(s$iterator);
    s.state._result_0._value != null && ++loaded;
  }
  return loaded;
}

function updateMusic(){
  var s, s$iterator, vol;
  vol = musicMuted_0?0:musicVolume_0;
  for (s$iterator = $iterator_0(new AbstractMap$2(musicMap)); $hasNext(s$iterator.val$outerIter2);) {
    s = $next_2(s$iterator);
    s.setVolume_1(vol);
  }
}

function updateSounds(){
  var s, s$iterator, vol;
  vol = soundMuted_0?0:soundVolume_0;
  for (s$iterator = $iterator_0(new AbstractMap$2(soundMap)); $hasNext(s$iterator.val$outerIter2);) {
    s = $next_2(s$iterator);
    s.setVolume_1(vol);
  }
}

defineClass(316, 29, {}, Resources);
_.backgroundType = function backgroundType_0(){
  return 50;
}
;
_.draw = function draw_0(g){
  $fillRect_0(g, ($clinit_SpaceInvadersX() , SCREEN), ($clinit_Colour() , BLACK));
  $drawString(g, 'Loading Images: ' + loaded_0() + '/' + ($clinit_Toolkit() , map_1.size_0), xenonWhite, 0, -50, 0);
  $drawString(g, 'Loading Sounds: ' + soundsLoaded() + '/' + soundMap.size_0, xenonWhite, 0, 0, 0);
  $drawString(g, 'Loading Music: ' + musicLoaded() + '/' + musicMap.size_0, xenonWhite, 0, 50, 0);
}
;
_.tick_0 = function tick_0(mouseX, mouseY){
}
;
var NULL_SOUND, alienExplosion, alienMissile, alienPlasmaC, arrowLeft, arrowRight, beast, beastS, beep, bombLaunch, bubble, clouds, collect_1, corsairBombC, corsairBulletC, corsairC, corsairS, corsairTurret, crab, crabS, cyanAlienPlasma, cyanPlasmaEffect, dagger, daggerS, deathRay, deepExplosion, destroyerC, destroyerS, explosion, flakExplosion, gameOverTrack, gameWonTrack, greenAlienPlasma, greenPlasmaEffect, hawk, hawkS, heart, heartHUD, laserEffectC, missileExplosion, missileFlame, missileLaunch, musicMap, musicMuted_0 = false, musicVolume_0 = 1, nebula, nuke, nukeHUD, phantom, phantomS, plasma, plasmaEffectC, platform, pop_0, rapid, rapidHUD, redAlienPlasma, redPlasmaEffect, shield, shipExplosion, shockWave, siRed, siYellow, smokeEffect, soundMap, soundMuted_0 = false, soundVolume_0 = 1, stars, titleTrack, track1, track2, track3, track4, twinkle, wasp, waspS, xLogo, xMini, xPulse, xSilver, xWingC, xWingLaserC, xWingMissileC, xWingS, xenonC, xenonGrey, xenonWhite;
var Lnz_ac_auckland_spaceinvadersx_core_Resources_2_classLit = createForClass(316);
function $onFrame(this$static){
  var nextUpdate, paintTick, updateDt, updateRate, updateTick, updates;
  nextUpdate = this$static.nextUpdate;
  updateTick = $tick_0(this$static.plat);
  if (updateTick >= nextUpdate) {
    updateRate = this$static.updateRate;
    updates = 0;
    while (updateTick >= nextUpdate) {
      nextUpdate += updateRate;
      ++updates;
    }
    this$static.nextUpdate = nextUpdate;
    updateDt = updates * updateRate;
    this$static.updateClock.tick += updateDt;
    $finishStartup();
    tick_18();
    !!currentScreen && currentScreen.tick_0(this$static.mouseX, this$static.mouseY);
    ++ticks;
  }
  paintTick = $tick_0(this$static.plat);
  this$static.paintClock.tick = paintTick;
  1 - (nextUpdate - paintTick) / this$static.updateRate;
  $notifyEmit(this$static.paint, this$static.paintClock);
}

defineClass(200, 1, {});
_.nextUpdate = 0;
_.updateRate = 0;
var Lplayn_core_Game_2_classLit = createForClass(200);
function $createDefaultBatch(gl){
  var maxVecs;
  try {
    if (maxVecs = usableMaxUniformVectors(gl) , maxVecs >= 48)
      return new UniformQuadBatch(gl);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 16))
      throw unwrap($e0);
  }
  return new TriangleBatch(gl);
}

defineClass(201, 200, {});
var Lplayn_scene_SceneGame_2_classLit = createForClass(201);
function $clinit_SpaceInvadersX(){
  $clinit_SpaceInvadersX = emptyMethod;
  SCREEN = new Rectangle_0(800, 600);
  graphics_0 = new Graphics;
  menuStack = new LinkedList;
}

function $finishStartup(){
  if (state_0 == 0) {
    if (isImagesLoaded()) {
      loadFirst();
      state_0 = 1;
      pushMenuScreen(resources);
      loadStartUp();
    }
  }
   else if (state_0 == 1) {
    $clinit_Resources();
    if (isImagesLoaded() && soundsLoaded() == soundMap.size_0 && musicLoaded() == musicMap.size_0) {
      loadStartUp();
      fadeWaitScreen_0 = new FadeWaitScreen;
      creditsScreen = new CreditsScreen;
      highscoreScreen = new HighscoreScreen;
      enterNameScreen = new EnterNameScreen;
      endGameScreen = new EndGameScreen;
      controlMenu = new ControlMenu;
      optionMenu = new OptionMenu;
      shipMenu = new ShipMenu;
      mainMenu = new MainMenu;
      introScreen = new IntroScreen;
      inGameScreen = new InGameScreen;
      setMenuScreen(introScreen);
      state_0 = 2;
    }
  }
}

function $paintScene(this$static){
  $saveTx(this$static.viewSurf);
  $translate(this$static.viewSurf, 400, 300);
  $begin_0(this$static.viewSurf);
  $clear_1(this$static.viewSurf);
  try {
    $setSurface(graphics_0, this$static.viewSurf);
    draw_13(graphics_0);
    !!currentScreen && currentScreen.draw(graphics_0);
  }
   finally {
    $end_0(this$static.viewSurf);
    $restoreTx(this$static.viewSurf);
  }
}

function SpaceInvadersX(plat, canvasCreator, fullScreener){
  var gl;
  $clinit_SpaceInvadersX();
  $clinit_AbstractSignal();
  this.paint = new Signal;
  this.updateClock = new Clock;
  this.paintClock = new Clock;
  this.plat = plat;
  this.updateRate = 33;
  $addConnection(plat.frame_0, new Game$1(this));
  gl = plat.graphics.gl;
  gl.glc.disable(2884);
  gl.glc.enable(3042);
  gl.glc.blendFunc(1, 771);
  this.defaultBatch = $createDefaultBatch(gl);
  this.viewSurf = new Surface(plat.graphics, plat.graphics.defaultRenderTarget, this.defaultBatch);
  new RootLayer;
  $atPrio($addConnection(this.paint, new SceneGame$1(this)), -1);
  $clinit_Resources();
  platform = ($clinit_Toolkit() , platform_0 = plat);
  $addConnection(plat.input_0.mouseEvents, new SpaceInvadersX$1(this));
  $addConnection(plat.input_0.keyboardEvents, new SpaceInvadersX$2);
  loadFirst();
  canvasCreator_0 = canvasCreator;
  fullScreener_0 = fullScreener;
}

function fadeToTrack(track){
  $clinit_SpaceInvadersX();
  !!currentTrack && currentTrack.stop_0();
  currentTrack = track;
  !!currentTrack && currentTrack.play_0();
}

function fadeWaitScreen(){
  currentScreen = $getFirst(menuStack);
  currentScreen.prefade();
  fadeTo(currentScreen.backgroundType());
  current_0 == desired?currentScreen.enter():(currentScreen = fadeWaitScreen_0);
}

function popMenuScreen(){
  $clinit_SpaceInvadersX();
  if (menuStack.size_0 <= 1)
    return false;
  $removeFirst(menuStack);
  fadeWaitScreen();
  return true;
}

function pushMenuScreen(nextScreen){
  $clinit_SpaceInvadersX();
  $addFirst(menuStack, nextScreen);
  fadeWaitScreen();
}

function queueMenuScreen(lastScreen){
  $clinit_SpaceInvadersX();
  $addLast(menuStack, lastScreen);
}

function setMenuScreen(nextScreen){
  $clinit_SpaceInvadersX();
  $reset_0(menuStack);
  $addFirst(menuStack, nextScreen);
  fadeWaitScreen();
}

defineClass(143, 201, {}, SpaceInvadersX);
_.mouseX = 0;
_.mouseY = 0;
var SCREEN, currentScreen, currentTrack, fullScreener_0, graphics_0, menuStack, state_0 = 0, ticks = 0;
var Lnz_ac_auckland_spaceinvadersx_core_SpaceInvadersX_2_classLit = createForClass(143);
defineClass(441, 1, {});
var Lreact_Slot_2_classLit = createForClass(441);
function SpaceInvadersX$1(this$0){
  this.this$01 = this$0;
}

defineClass(202, 441, {}, SpaceInvadersX$1);
_.onEmit = function onEmit(e){
  this.this$01.mouseX = round_int(e.x_0) - 400;
  this.this$01.mouseY = round_int(e.y_0) - 300;
  instanceOf(e, 105) && !!($clinit_SpaceInvadersX() , currentScreen) && e.down && ($clinit_SpaceInvadersX() , currentScreen).mouseClick(0, this.this$01.mouseX, this.this$01.mouseY);
}
;
var Lnz_ac_auckland_spaceinvadersx_core_SpaceInvadersX$1_2_classLit = createForClass(202);
function $onEmit(e){
  var ke;
  if (instanceOf(e, 132)) {
    !!($clinit_SpaceInvadersX() , currentScreen) && currentScreen.typeChar(e.typedChar);
  }
   else if (instanceOf(e, 104)) {
    ke = e;
    if (!!($clinit_SpaceInvadersX() , currentScreen) && ke.down) {
      ke.key_0 == ($clinit_Key() , ENTER) && currentScreen.typeChar(10);
      (ke.key_0 == BACKSPACE || ke.key_0 == DELETE || ke.key_0 == BACK) && currentScreen.typeChar(8);
    }
    setKeyState(ke.key_0, ke.down);
  }
}

function SpaceInvadersX$2(){
}

defineClass(203, 441, {}, SpaceInvadersX$2);
_.onEmit = function onEmit_0(e){
  $onEmit(e);
}
;
var Lnz_ac_auckland_spaceinvadersx_core_SpaceInvadersX$2_2_classLit = createForClass(203);
function $clinit_Sprite(){
  $clinit_Sprite = emptyMethod;
  DEFAULT_COLLISION_RECT = new Rectangle;
}

function $animateSprite(this$static, frames_0, frameTicker, frameTicks){
  this$static.image = $getTile(frames_0, ~~(frameTicker / frameTicks) % frames_0.tiles.length);
  return ~~(frameTicker / frameTicks) >= frames_0.tiles.length;
}

function $approachRelAngle(this$static, desiredAddend, maxStep){
  if ((desiredAddend <= 0?0 - desiredAddend:desiredAddend) <= maxStep) {
    this$static.angle = normaliseAngle(this$static.angle + desiredAddend);
    return true;
  }
  this$static.angle = normaliseAngle(this$static.angle + maxStep * (desiredAddend > 0?1:desiredAddend < 0?-1:0));
  return false;
}

function $findCollision(this$static, targets){
  var target, target$iterator;
  for (target$iterator = (targets.iterator = new IterateList$IL_Iterator(targets) , targets.iterator); !target$iterator.node?!!target$iterator.this$01.head:!!target$iterator.node.next;) {
    target = $next_3(target$iterator);
    if (target.dead)
      continue;
    if (this$static.collides(target) || target.collides(this$static))
      return target;
  }
  return null;
}

function $homeFor(this$static, targets, rotateSpeed){
  var bestAngle, hasTarget, target, target$iterator, targetAngle;
  bestAngle = 0;
  hasTarget = false;
  for (target$iterator = (targets.iterator = new IterateList$IL_Iterator(targets) , targets.iterator); !target$iterator.node?!!target$iterator.this$01.head:!!target$iterator.node.next;) {
    target = $next_3(target$iterator);
    if (target.dead)
      continue;
    if (!$contains_2(($clinit_Projectile() , PROJECTILE_RANGE), round_int(target.x_0), round_int(target.y_0)))
      continue;
    targetAngle = atan2_0(target.x_0 - this$static.x_0, -(target.y_0 - this$static.y_0));
    targetAngle = normaliseAngle(targetAngle - this$static.angle);
    if (!hasTarget || (targetAngle <= 0?0 - targetAngle:targetAngle) < (bestAngle <= 0?0 - bestAngle:bestAngle)) {
      hasTarget = true;
      bestAngle = targetAngle;
    }
  }
  if (hasTarget) {
    return $approachRelAngle(this$static, bestAngle, rotateSpeed);
  }
  return false;
}

function $randimateSprite(this$static, frames_0, frameTicker){
  frameTicker % 3 == 0 && (this$static.image = $getTile(frames_0, round_int(random() * frames_0.tiles.length)));
}

function $setAngleAndSpeed(this$static, angle, speed){
  this$static.angle = angle;
  this$static.speed_0 = speed;
  this$static.xVel = xAngle(this$static.angle, this$static.speed_0);
  this$static.yVel = yAngle(this$static.angle, this$static.speed_0);
}

function $setRandomImage(this$static, frames_0){
  this$static.image = $getTile(frames_0, round_int(random() * frames_0.tiles.length));
}

function $tickSprite(this$static){
  ++this$static.ageTicker;
  this$static.x_0 += this$static.xVel;
  this$static.y_0 += this$static.yVel;
  $setBounds_0(this$static.bounds, round_int(this$static.x_0), round_int(this$static.y_0), this$static.collisionRect);
}

function Sprite(image, x_0, y_0){
  Sprite_2.call(this, image, DEFAULT_COLLISION_RECT, x_0, y_0, 0, 0);
}

function Sprite_0(image, x_0, y_0){
  Sprite_2.call(this, image, DEFAULT_COLLISION_RECT, x_0, y_0, 0, 0);
}

function Sprite_1(image, collisionRect, x_0, y_0){
  $clinit_Sprite();
  Sprite_2.call(this, image, collisionRect, x_0, y_0, 0, 0);
}

function Sprite_2(image, collisionRect, x_0, y_0, xVel, yVel){
  $clinit_Sprite();
  this.image = image;
  this.collisionRect = collisionRect;
  this.x_0 = x_0;
  this.y_0 = y_0;
  this.bounds = new Rectangle;
  $setBounds_0(this.bounds, round_int(this.x_0), round_int(this.y_0), this.collisionRect);
  this.xVel = xVel;
  this.yVel = yVel;
  this.ageTicker = 0;
  this.dead = false;
}

function approachAngle(angle, desiredAngle){
  $clinit_Sprite();
  return approachRelAngle(angle, normaliseAngle(desiredAngle - angle));
}

function approachRelAngle(angle, desiredAddend){
  if ((desiredAddend <= 0?0 - desiredAddend:desiredAddend) <= 0.2)
    return normaliseAngle(angle + desiredAddend);
  return normaliseAngle(angle + 0.2 * (desiredAddend > 0?1:desiredAddend < 0?-1:0));
}

function normaliseAngle(angle){
  $clinit_Sprite();
  while (angle > $intern_28)
    angle -= $intern_29;
  while (angle < -3.141592653589793)
    angle += $intern_29;
  return angle;
}

function xAngle(angle, scalar){
  $clinit_Sprite();
  return scalar * sin_0(angle);
}

function yAngle(angle, scalar){
  $clinit_Sprite();
  return scalar * -cos_0(angle);
}

defineClass(13, 1, $intern_30);
_.collides = function collides(other){
  return instanceOf(other, 139)?other.collides(this):$intersects(this.bounds, other.bounds);
}
;
_.draw = function draw_1(g){
  this.dead || this.drawSprite(g);
}
;
_.drawSprite = function drawSprite(g){
  this.dead || $drawImage_1(g, this.image, this.x_0, this.y_0);
}
;
_.tick_1 = function tick_1(){
  this.tickSprite();
}
;
_.tickSprite = function tickSprite(){
  $tickSprite(this);
}
;
_.ageTicker = 0;
_.angle = 0;
_.dead = false;
_.speed_0 = 0;
_.x_0 = 0;
_.xVel = 0;
_.y_0 = 0;
_.yVel = 0;
var DEFAULT_COLLISION_RECT;
var Lnz_ac_auckland_spaceinvadersx_game_Sprite_2_classLit = createForClass(13);
function AnimEffect(frames_0, x_0, y_0, frameTicks){
  $clinit_Sprite();
  Sprite_0.call(this, frames_0.tiles[0], x_0, y_0);
  this.frames_0 = frames_0;
  this.frameTicks = frameTicks;
}

defineClass(30, 13, $intern_30, AnimEffect);
_.tick_1 = function tick_2(){
  $animateSprite(this, this.frames_0, this.ageTicker, this.frameTicks) && (this.dead = true);
  $tickSprite(this);
}
;
_.frameTicks = 0;
var Lnz_ac_auckland_spaceinvadersx_game_AnimEffect_2_classLit = createForClass(30);
function AlienExplosion(x_0, y_0){
  $clinit_Sprite();
  AnimEffect.call(this, ($clinit_Resources() , alienExplosion), x_0, y_0, 2);
}

defineClass(66, 30, $intern_30, AlienExplosion);
var Lnz_ac_auckland_spaceinvadersx_game_AlienExplosion_2_classLit = createForClass(66);
function $collideTargets(this$static){
  var hitPlayer;
  hitPlayer = $findCollision(this$static, ($clinit_Game() , players_0));
  !!hitPlayer && (hitPlayer.kill()?this$static.damage_0(100, hitPlayer):this$static.damage_0(20, hitPlayer));
}

function $drawEnemy(this$static, g){
  if (this$static.dead)
    return;
  this$static.lastHurtTicker == this$static.ageTicker?$drawImage_1(g, this$static.shadowImage, this$static.x_0, this$static.y_0):this$static.drawSprite(g);
}

function $drawRotateEnemy(this$static, g){
  if (this$static.dead)
    return;
  this$static.lastHurtTicker == this$static.ageTicker?$drawImage_3(g, this$static.shadowImage, this$static.x_0, this$static.y_0, this$static.angle, 1, 1, 1):this$static.dead || $drawImage_3(g, this$static.image, this$static.x_0, this$static.y_0, this$static.angle, 1, 1, 1);
}

function $spawnPickup(this$static, forceSpawn){
  var choice;
  choice = random();
  forceSpawn && (choice *= 0.18000000000000002);
  choice -= 0.02;
  if (choice < 0) {
    addProjectile(new LifePickup(this$static.x_0, this$static.y_0));
    return;
  }
  choice -= 0.07;
  if (choice < 0) {
    addProjectile(new NukePickup(this$static.x_0, this$static.y_0));
    return;
  }
  choice -= 0.02;
  if (choice < 0) {
    addProjectile(new ShieldPickup(this$static.x_0, this$static.y_0));
    return;
  }
  choice -= 0.07;
  if (choice < 0) {
    addProjectile(new RapidPickup(this$static.x_0, this$static.y_0));
    return;
  }
}

function $tickEnemy(this$static){
  this$static.tickSprite();
  $collideTargets(this$static);
  this$static.removeIfStray();
}

function Enemy(image, shadowImage, collisionRect, x_0, y_0, health){
  $clinit_Sprite();
  Sprite_1.call(this, image, collisionRect, x_0, y_0);
  this.shadowImage = shadowImage;
  this.health = health;
}

defineClass(54, 13, $intern_30);
_.award = function award(victor){
  ($clinit_PlayerShip() , gameState) == 1 && (victor.score += 100);
}
;
_.damage_0 = function damage_0(damage, victor){
  if (this.dead)
    return;
  this.lastHurtTicker = this.ageTicker;
  $award(victor, max_2(0, min_3(damage, this.health)));
  this.health -= damage;
  if (this.health <= 0) {
    this.award(victor);
    this.die();
  }
}
;
_.die = function die(){
  this.explode();
  this.spawnPickup();
  this.dead = true;
}
;
_.draw = function draw_2(g){
  $drawEnemy(this, g);
}
;
_.explode = function explode(){
}
;
_.removeIfStray = function removeIfStray(){
  this.y_0 > 350 && (this.dead = true);
}
;
_.spawnPickup = function spawnPickup(){
  $spawnPickup(this, false);
}
;
_.tick_1 = function tick_3(){
  $tickEnemy(this);
}
;
_.health = 0;
_.lastHurtTicker = $intern_24;
var Lnz_ac_auckland_spaceinvadersx_game_Enemy_2_classLit = createForClass(54);
function $clinit_AlienMissile(){
  $clinit_AlienMissile = emptyMethod;
  $clinit_Sprite();
  COLLISION_RECT = new Rectangle_0(16, 16);
}

function AlienMissile(x_0, y_0, angle){
  $clinit_AlienMissile();
  Enemy.call(this, ($clinit_Resources() , alienMissile), alienMissile, COLLISION_RECT, x_0, y_0, 1);
  $setAngleAndSpeed(this, angle, 10);
}

defineClass(92, 54, $intern_30, AlienMissile);
_.draw = function draw_3(g){
  this.dead || $drawImage_3(g, this.image, this.x_0, this.y_0, this.angle, 1, 1, 1);
}
;
_.explode = function explode_0(){
  addEffect(new AnimEffect(($clinit_Resources() , missileExplosion), this.x_0, this.y_0, 2));
}
;
_.removeIfStray = function removeIfStray_0(){
  $contains_2(($clinit_Projectile() , PROJECTILE_RANGE), round_int(this.x_0), round_int(this.y_0)) || (this.dead = true);
}
;
_.spawnPickup = function spawnPickup_0(){
}
;
_.tick_1 = function tick_4(){
  this.ageTicker < 100 && $homeFor(this, ($clinit_Game() , players_0), 0.05);
  addEffect(new AnimEffect(($clinit_Resources() , cyanPlasmaEffect), this.x_0, this.y_0, 1));
  this.ageTicker % 3 == 0 && addEffect(new SmokeEffect(this.x_0, this.y_0));
  this.xVel = xAngle(this.angle, this.speed_0);
  this.yVel = yAngle(this.angle, this.speed_0);
  $tickSprite(this);
  $collideTargets(this);
  $contains_2(($clinit_Projectile() , PROJECTILE_RANGE), round_int(this.x_0), round_int(this.y_0)) || (this.dead = true);
}
;
var COLLISION_RECT;
var Lnz_ac_auckland_spaceinvadersx_game_AlienMissile_2_classLit = createForClass(92);
function $clinit_Projectile(){
  $clinit_Projectile = emptyMethod;
  $clinit_Sprite();
  PROJECTILE_RANGE = new Rectangle_0(1200, 700);
}

function $tickProjectile(this$static){
  $tickSprite(this$static);
  this$static.collideTargets();
  this$static.removeIfStray();
}

function $tickRotateProjectile(this$static){
  this$static.xVel = xAngle(this$static.angle, this$static.speed_0);
  this$static.yVel = yAngle(this$static.angle, this$static.speed_0);
  $tickSprite(this$static);
  this$static.collideTargets();
  this$static.removeIfStray();
}

function Projectile(image, collisionRect, x_0, y_0){
  $clinit_Projectile();
  Sprite_2.call(this, image, collisionRect, x_0, y_0, 0, 0);
}

defineClass(175, 13, $intern_30);
_.collideTargets = function collideTargets(){
}
;
_.removeIfStray = function removeIfStray_1(){
  $contains_2(PROJECTILE_RANGE, round_int(this.x_0), round_int(this.y_0)) || (this.dead = true);
}
;
_.spawnHitEffect = function spawnHitEffect(){
}
;
_.tick_1 = function tick_5(){
  $tickProjectile(this);
}
;
var PROJECTILE_RANGE;
var Lnz_ac_auckland_spaceinvadersx_game_Projectile_2_classLit = createForClass(175);
function EnemyProjectile(image, collisionRect, x_0, y_0){
  $clinit_Projectile();
  Projectile.call(this, image, collisionRect, x_0, y_0);
}

defineClass(178, 175, $intern_30);
_.collidePlayer = function collidePlayer(hitPlayer){
  hitPlayer.kill();
  this.dead = true;
  this.spawnHitEffect();
}
;
_.collideTargets = function collideTargets_0(){
  var hitPlayer;
  hitPlayer = $findCollision(this, ($clinit_Game() , players_0));
  !!hitPlayer && this.collidePlayer(hitPlayer);
}
;
var Lnz_ac_auckland_spaceinvadersx_game_EnemyProjectile_2_classLit = createForClass(178);
function $clinit_AlienPlasma(){
  $clinit_AlienPlasma = emptyMethod;
  $clinit_Projectile();
  COLLISION_RECT_0 = new Rectangle_0(8, 8);
}

function AlienPlasma(tiles, hitEffect, x_0, y_0, angle){
  $clinit_AlienPlasma();
  EnemyProjectile.call(this, tiles.tiles[0], COLLISION_RECT_0, x_0, y_0);
  $setAngleAndSpeed(this, angle, 10);
  this.tiles = tiles;
  this.hitEffect = hitEffect;
}

defineClass(65, 178, $intern_30, AlienPlasma);
_.draw = function draw_4(g){
  this.dead || $drawImage_3(g, this.image, this.x_0, this.y_0, this.angle, 1, 1, 1);
}
;
_.spawnHitEffect = function spawnHitEffect_0(){
  addEffect(new AnimEffect(this.hitEffect, this.x_0, this.y_0, 1));
}
;
_.tick_1 = function tick_6(){
  $randimateSprite(this, this.tiles, this.ageTicker);
  $tickRotateProjectile(this);
}
;
var COLLISION_RECT_0;
var Lnz_ac_auckland_spaceinvadersx_game_AlienPlasma_2_classLit = createForClass(65);
function $clinit_Beast(){
  $clinit_Beast = emptyMethod;
  $clinit_Sprite();
  WIDE_COLLISION_RECT = new Rectangle_0(290, 170);
  TALL_COLLISION_RECT = new Rectangle_0(50, 350);
}

function $dyingTick(this$static){
  ++this$static.deathTicker;
  this$static.xVel *= 0.95;
  this$static.yVel *= 0.95;
  this$static.deathTicker < 120 && this$static.deathTicker % 4 == 0 && $explode(this$static);
  this$static.deathTicker == 120 && ($clinit_Resources() , deepExplosion).play_0();
  if (this$static.deathTicker > 132) {
    this$static.dead = true;
    $clinit_Game();
    $setSuccess(endGameScreen, true);
    endGame();
  }
  $tickSprite_0(this$static);
}

function $explode(this$static){
  var explosionX, explosionY;
  explosionX = this$static.x_0 - 50 + random() * 100;
  explosionY = this$static.y_0 - 175 + random() * 350;
  ~~(this$static.deathTicker / 4) % 3 == 0?addEffect(new ShipExplosion(explosionX, explosionY)):addEffect(new AlienExplosion(explosionX, explosionY));
  ($clinit_Resources() , explosion).play_0();
}

function $fireMissile(this$static, side){
  addEnemy(new AlienMissile(this$static.x_0 + (side == 3?-96:96), this$static.y_0 + 130, $intern_28));
}

function $firePlasma(this$static, side, shootAngle){
  addProjectile(new AlienPlasma(($clinit_Resources() , redAlienPlasma), redPlasmaEffect, this$static.x_0 + side * 48, this$static.y_0 + 20, shootAngle));
}

function $side(loc, desiredLoc){
  return round_int(desiredLoc - loc > 0?1:desiredLoc - loc < 0?-1:0);
}

function $tickBeastFire(this$static){
  var shootAngle, shot;
  switch (this$static.fireType) {
    case 0:
    case 1:
      if (this$static.fireTicker > 50)
        return;
      if (this$static.fireType == 0 && this$static.fireTicker % 10 == 0 || this$static.fireType == 1 && this$static.fireTicker % 5 == 0) {
        ($clinit_Resources() , plasma).play_0();
        $firePlasma(this$static, -1, $intern_28 + random() * $intern_28 / 4);
        $firePlasma(this$static, 1, $intern_28 - random() * $intern_28 / 4);
      }

      break;
    case 2:
      if (this$static.fireTicker % 5 != 0)
        return;
      shot = ~~(this$static.fireTicker / 5);
      if (shot < 10) {
        shootAngle = $intern_31 * shot / 10;
        ($clinit_Resources() , plasma).play_0();
        addProjectile(new AlienPlasma(redAlienPlasma, redPlasmaEffect, this$static.x_0 + -48, this$static.y_0 + 20, $intern_28 + shootAngle));
        addProjectile(new AlienPlasma(redAlienPlasma, redPlasmaEffect, this$static.x_0 + 48, this$static.y_0 + 20, $intern_28 - shootAngle));
      }

      break;
    case 3:
    case 4:
    case 5:
      if (this$static.fireTicker == 0) {
        ($clinit_Resources() , missileLaunch).play_0();
        this$static.fireType != 4 && addEnemy(new AlienMissile(this$static.x_0 + 96, this$static.y_0 + 130, $intern_28));
        this$static.fireType != 3 && addEnemy(new AlienMissile(this$static.x_0 + -96, this$static.y_0 + 130, $intern_28));
      }

      if (this$static.fireTicker == 40 && this$static.fireType != 5) {
        ($clinit_Resources() , missileLaunch).play_0();
        $fireMissile(this$static, this$static.fireType);
      }

  }
}

function $tickSprite_0(this$static){
  ++this$static.ageTicker;
  this$static.x_0 += this$static.xVel;
  this$static.y_0 += this$static.yVel;
  $setBounds_0(this$static.bounds, round_int(this$static.x_0), round_int(this$static.y_0), WIDE_COLLISION_RECT);
  $setBounds_0(this$static.bounds2, round_int(this$static.x_0), round_int(this$static.y_0), TALL_COLLISION_RECT);
}

function Beast(){
  $clinit_Beast();
  Enemy.call(this, ($clinit_Resources() , beast), beastS, WIDE_COLLISION_RECT, 0, -500, 5000);
  this.bounds2 = new Rectangle;
  this.xVel = 0;
  this.yVel = 15.5;
  this.desiredX = 0;
  this.desiredY = 0;
  this.xSide = 0;
  this.ySide = 0;
  this.angle = $intern_28;
  this.deathTicker = 0;
  this.entering = true;
  this.fireType = 0;
}

defineClass(139, 54, {139:1, 13:1}, Beast);
_.award = function award_0(victor){
  ($clinit_PlayerShip() , gameState) == 1 && (victor.score += 1000);
}
;
_.collides = function collides_0(other){
  return $intersects(this.bounds, other.bounds) || $intersects(this.bounds2, other.bounds);
}
;
_.damage_0 = function damage_1(damage, victor){
  if (this.dead || this.deathTicker > 0)
    return;
  this.lastHurtTicker = this.ageTicker;
  $award(victor, max_2(0, min_3(damage, this.health)));
  this.health -= damage;
  if (this.health <= 0) {
    ($clinit_PlayerShip() , gameState) == 1 && (victor.score += 1000);
    $explode(this);
    ++this.deathTicker;
  }
   else 
    ~~((this.health + damage) / 800) != ~~(this.health / 800) && $spawnPickup(this, true);
}
;
_.die = function die_0(){
  $explode(this);
  ++this.deathTicker;
}
;
_.draw = function draw_5(g){
  var alpha_0, elapse, scale;
  if (this.deathTicker == 0)
    $drawEnemy(this, g);
  else {
    this.deathTicker < 126 && $drawImage_1(g, this.image, this.x_0, this.y_0);
    if (this.deathTicker >= 120) {
      elapse = (this.deathTicker - 120) / 12;
      scale = 1 + elapse;
      alpha_0 = 1 - (2 * elapse - 1 <= 0?0 - (2 * elapse - 1):2 * elapse - 1);
      $drawImage_3(g, this.shadowImage, this.x_0, this.y_0, 0, scale, scale, alpha_0);
    }
  }
}
;
_.explode = function explode_1(){
  $explode(this);
}
;
_.tick_1 = function tick_7(){
  if (this.deathTicker != 0) {
    $dyingTick(this);
    return;
  }
  if (this.entering) {
    this.yVel -= 0.25;
    if (this.yVel <= 0) {
      this.entering = false;
      this.fireTicker = -150;
    }
  }
   else {
    if ($side(this.x_0, this.desiredX) != this.xSide) {
      this.desiredX = -250 + random() * 500;
      this.xSide = $side(this.x_0, this.desiredX);
    }
    if ($side(this.y_0, this.desiredY) != this.ySide) {
      this.desiredY = -200 + random() * 100;
      this.ySide = $side(this.y_0, this.desiredY);
    }
    this.xSide == 1?(this.xVel = min_1(this.xVel + 0.25, 6)):(this.xVel = max_1(this.xVel - 0.25, -6));
    this.ySide == 1?(this.yVel = min_1(this.yVel + 0.25, 6)):(this.yVel = max_1(this.yVel - 0.25, -6));
    ++this.fireTicker;
    if (this.fireTicker >= 150) {
      this.fireType = round_int(random() * 6);
      this.fireTicker = 0;
    }
    $tickBeastFire(this);
  }
  $tickEnemy(this);
}
;
_.tickSprite = function tickSprite_0(){
  $tickSprite_0(this);
}
;
_.deathTicker = 0;
_.desiredX = 0;
_.desiredY = 0;
_.entering = false;
_.fireTicker = 0;
_.fireType = 0;
_.xSide = 0;
_.ySide = 0;
var TALL_COLLISION_RECT, WIDE_COLLISION_RECT;
var Lnz_ac_auckland_spaceinvadersx_game_Beast_2_classLit = createForClass(139);
function Cloud(x_0, speed){
  $clinit_Sprite();
  Sprite.call(this, null, x_0, -560);
  $setRandomImage(this, ($clinit_Resources() , clouds));
  this.angle = this.angle;
  this.yVel = speed;
}

defineClass(389, 13, $intern_30, Cloud);
_.draw = function draw_6(g){
  this.dead || $drawImage_1(g, this.image, this.x_0, this.y_0);
}
;
_.tick_1 = function tick_8(){
  $tickSprite(this);
  this.y_0 > 560 && (this.dead = true);
}
;
var Lnz_ac_auckland_spaceinvadersx_game_Cloud_2_classLit = createForClass(389);
function $clinit_CollisionBlock(){
  $clinit_CollisionBlock = emptyMethod;
  $clinit_Sprite();
  COLLISION_RECT_1 = new Rectangle_0(820, 200);
  instance = new CollisionBlock;
}

function CollisionBlock(){
  Enemy.call(this, null, null, COLLISION_RECT_1, 0, -300, 10);
  this.hurtGlowTicker = 0;
}

defineClass(399, 54, $intern_30, CollisionBlock);
_.damage_0 = function damage_2(damage, owner){
  this.hurtGlowTicker = 10;
}
;
_.draw = function draw_7(g){
  this.hurtGlowTicker > 0 && $drawRect_0(g, this.bounds, ($clinit_Colour() , WHITE), this.hurtGlowTicker / 10);
}
;
_.tick_1 = function tick_9(){
  this.hurtGlowTicker > 0 && --this.hurtGlowTicker;
}
;
_.hurtGlowTicker = 0;
var COLLISION_RECT_1, instance;
var Lnz_ac_auckland_spaceinvadersx_game_CollisionBlock_2_classLit = createForClass(399);
function $clinit_PlayerShip(){
  $clinit_PlayerShip = emptyMethod;
  $clinit_Sprite();
  PLAYER_AREA = new Rectangle_0(700, 500);
  SHIP_TYPE_NAMES = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['X-Wing', 'Corsair', 'Destroyer']);
  SPAWN_X = initValues(getClassLiteralForArray(I_classLit, 1), $intern_32, 0, 7, [-200, 200, 0]);
  HUD_X = initValues(getClassLiteralForArray(I_classLit, 1), $intern_32, 0, 7, [-390, 390, 390]);
  ALIGNMENT = initValues(getClassLiteralForArray(I_classLit, 1), $intern_32, 0, 7, [1, -1, -1]);
  ICON_GAP_X = initValues(getClassLiteralForArray(I_classLit, 1), $intern_32, 0, 7, [20, -20, -20]);
}

function $award(this$static, points){
  gameState == 1 && (this$static.score += points * 10);
}

function $drawIcons(g, icon, number, iconX, iconY, changeX, changeY){
  var iconID;
  for (iconID = 0; iconID < number; iconID++) {
    iconX += changeX;
    iconY += changeY;
    $drawImage_1(g, icon, iconX, iconY);
  }
}

function $drawPlayerShip(this$static, g){
  var bubbleBounce;
  if (!this$static.dead) {
    this$static.shieldTicker > 0 && this$static.shieldTicker % 5 == 0 && gameState != 0?$drawImage_1(g, this$static.shadowImage, this$static.x_0, this$static.y_0):this$static.drawShip(g);
    if (this$static.bubble) {
      bubbleBounce = this$static.bubbleWobble * sin_0(this$static.ageTicker * 0.2);
      $drawImage_3(g, ($clinit_Resources() , bubble), this$static.x_0, this$static.y_0, 0, 1 + bubbleBounce, 1 - bubbleBounce, 1);
    }
  }
}

function $giveLife(this$static){
  var ally, ally$iterator;
  if (this$static.lives < 3) {
    ++this$static.lives;
    return true;
  }
  for (ally$iterator = $iterator_1(($clinit_Game() , players_0)); !ally$iterator.node?!!ally$iterator.this$01.head:!!ally$iterator.node.next;) {
    ally = $next_3(ally$iterator);
    if ($resurrect(ally))
      return true;
  }
  return false;
}

function $giveRapidFire(this$static){
  if (this$static.rapidFireTicker > 0)
    return false;
  this$static.rapidFireTicker = 200;
  return true;
}

function $giveShield(this$static){
  if (this$static.bubble)
    return false;
  this$static.bubble = true;
  this$static.bubbleWobble = 0;
  return true;
}

function $giveSpecialAmmo(this$static){
  if (this$static.specialAmmo >= 3)
    return false;
  ++this$static.specialAmmo;
  return true;
}

function $kill(this$static){
  if (gameState != 1 || this$static.shieldTicker > 0)
    return false;
  if (this$static.bubble) {
    ($clinit_Resources() , pop_0).play_0();
    this$static.bubble = false;
    this$static.shieldTicker = 100;
    return false;
  }
   else {
    addEffect(new ShipExplosion(this$static.x_0, this$static.y_0));
    ($clinit_Resources() , deepExplosion).play_0();
    this$static.dead = true;
    this$static.lives == 0 && ($clinit_Game() , --playersAlive);
    this$static.respawnTicker = 150;
    return true;
  }
}

function $respawn(this$static){
  this$static.x_0 = SPAWN_X[this$static.startPos];
  this$static.y_0 = 200;
  --this$static.lives;
  this$static.dead = false;
  this$static.bubble = false;
  this$static.bubbleWobble = 0;
  this$static.specialReloadTicker = 0;
  this$static.rapidFireTicker = -1;
  this$static.shieldTicker = 100;
}

function $resurrect(this$static){
  if (this$static.dead && this$static.lives == 0) {
    this$static.lives = 1;
    $clinit_Game();
    ++playersAlive;
    return true;
  }
  return false;
}

function $tickPlayerShip(this$static){
  --this$static.shieldTicker;
  --this$static.reloadTicker;
  --this$static.specialReloadTicker;
  --this$static.respawnTicker;
  --this$static.rapidFireTicker;
  this$static.bubble && (this$static.xDir != 0 || this$static.yDir != 0?(this$static.bubbleWobble = min_1(0.1, this$static.bubbleWobble + 0.002)):(this$static.bubbleWobble = max_1(0, this$static.bubbleWobble - 0.002)));
  if (gameState != 2) {
    this$static.respawnTicker < 0 && this$static.dead && (this$static.lives > 0 || ($clinit_Game() , training)) && $respawn(this$static);
    this$static.xDir = (this$static.controlIsHeld[2]?-1:0) + (this$static.controlIsHeld[3]?1:0);
    this$static.yDir = (this$static.controlIsHeld[0]?-1:0) + (this$static.controlIsHeld[1]?1:0);
    if (gameState == 1) {
      this$static.xVel = this$static.xDir * 5;
      this$static.yVel = this$static.yDir * 5;
    }
     else if (gameState == 0) {
      this$static.xVel = this$static.xDir * 5 - 0.1 * (this$static.x_0 - SPAWN_X[this$static.startPos]);
      this$static.yVel = this$static.yDir * 5 - 0.1 * (this$static.y_0 - 200);
    }
     else {
      this$static.xVel = this$static.yVel = 0;
    }
  }
   else {
    this$static.y_0 < -1000?(this$static.yVel = 0):(this$static.yVel = max_1(-20, this$static.yVel - 0.5));
  }
  $tickSprite(this$static);
  if (gameState == 1) {
    this$static.x_0 = max_1(PLAYER_AREA.xMin, min_1(PLAYER_AREA.xMax, this$static.x_0));
    this$static.y_0 = max_1(PLAYER_AREA.yMin, min_1(PLAYER_AREA.yMax, this$static.y_0));
    $setBounds_0(this$static.bounds, round_int(this$static.x_0), round_int(this$static.y_0), this$static.collisionRect);
  }
  if (gameState != 2) {
    if (!this$static.dead) {
      if (this$static.controlIsHeld[4] && this$static.reloadTicker <= 0) {
        this$static.reloadTicker = this$static.rapidFireTicker > 0?~~(this$static.reloadTicks / 2):this$static.reloadTicks;
        this$static.fire();
      }
      if (this$static.controlIsHeld[5] && this$static.specialReloadTicker <= 0 && this$static.specialIsFresh) {
        if (gameState != 1 || this$static.specialAmmo > 0) {
          gameState == 1 && --this$static.specialAmmo;
          this$static.specialReloadTicker = this$static.specialReloadTicks;
          this$static.fireSpecial();
        }
      }
    }
  }
  this$static.specialIsFresh = !this$static.controlIsHeld[5];
}

function PlayerShip(shipImage, shadowImage, playerColour, collisionRect, startPos, reloadTicks, controlState){
  $clinit_PlayerShip();
  Sprite_1.call(this, recolourImage(shipImage, playerColour), collisionRect, SPAWN_X[startPos], 200);
  this.shadowImage = shadowImage;
  this.playerColour = playerColour;
  this.speed = this.speed;
  this.lives = 2;
  this.specialAmmo = 1;
  this.startPos = startPos;
  this.score = 0;
  this.reloadTicks = reloadTicks;
  this.specialReloadTicks = 50;
  this.rapidFireTicker = -1;
  this.controlIsHeld = controlState;
  $respawn(this);
}

function getPlayerShip(shipType, playerColour, startPos, controlState){
  $clinit_PlayerShip();
  switch (shipType) {
    case 0:
      return new XWing(playerColour, startPos, controlState);
    case 1:
      return new Corsair(playerColour, startPos, controlState);
    case 2:
      return new Destroyer(playerColour, startPos, controlState);
  }
  throw new IllegalArgumentException_0('ERROR: Not a valid ship type.');
}

function recolourTiles(playerColourableTiles, newColour){
  $clinit_PlayerShip();
  return $clinit_Toolkit() , getTiles(recolourImage_0(playerColourableTiles.colourableImage, newColour, -1), playerColourableTiles.tileWidth, playerColourableTiles.tileHeight);
}

defineClass(55, 13, $intern_33);
_.draw = function draw_8(g){
  $drawPlayerShip(this, g);
}
;
_.drawIcon = function drawIcon(g, x_0, y_0){
  $drawImage_1(g, this.image, x_0, y_0);
}
;
_.drawShip = function drawShip(g){
  $drawImage_1(g, this.image, this.x_0, this.y_0);
}
;
_.fire = function fire_1(){
}
;
_.fireSpecial = function fireSpecial(){
}
;
_.kill = function kill(){
  return $kill(this);
}
;
_.tick_1 = function tick_10(){
  $tickPlayerShip(this);
}
;
_.bubble = false;
_.bubbleWobble = 0;
_.lives = 0;
_.rapidFireTicker = 0;
_.reloadTicker = 0;
_.reloadTicks = 0;
_.respawnTicker = 0;
_.score = 0;
_.shieldTicker = 0;
_.specialAmmo = 0;
_.specialIsFresh = false;
_.specialReloadTicker = 0;
_.specialReloadTicks = 0;
_.speed = 0;
_.startPos = 0;
_.xDir = 0;
_.yDir = 0;
var ALIGNMENT, HUD_X, ICON_GAP_X, PLAYER_AREA, SHIP_TYPE_NAMES, SPAWN_X, gameState = 0;
var Lnz_ac_auckland_spaceinvadersx_game_PlayerShip_2_classLit = createForClass(55);
function $clinit_Corsair(){
  $clinit_Corsair = emptyMethod;
  $clinit_PlayerShip();
  COLLISION_RECT_2 = new Rectangle_0(30, 40);
  DESIRED_ANGLES = initValues(getClassLiteralForArray(D_classLit, 2), $intern_6, 31, 0, [initValues(getClassLiteralForArray(D_classLit, 1), $intern_34, 0, 7, [5.497787143782138, 0, $intern_31]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_34, 0, 7, [$intern_35, 0, $intern_36]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_34, 0, 7, [3.9269908169872414, $intern_28, $intern_37])]);
}

function Corsair(playerColour, startPos, controlState){
  $clinit_Corsair();
  PlayerShip.call(this, ($clinit_Resources() , corsairC), corsairS, playerColour, COLLISION_RECT_2, startPos, 4, controlState);
  this.bulletTiles = recolourTiles(corsairBulletC, playerColour);
  this.bombTiles = recolourTiles(corsairBombC, playerColour);
  this.bulletHitEffect = recolourTiles(plasmaEffectC, playerColour);
  this.turretAngle = this.desiredTurretAngle = 0;
}

defineClass(402, 55, $intern_33, Corsair);
_.drawIcon = function drawIcon_0(g, x_0, y_0){
  $drawImage_1(g, this.image, x_0, y_0);
  $drawImage_1(g, ($clinit_Resources() , corsairTurret), x_0, y_0 + 10);
}
;
_.drawShip = function drawShip_0(g){
  $drawImage_1(g, this.image, this.x_0, this.y_0);
  $drawImage_3(g, ($clinit_Resources() , corsairTurret), this.x_0, this.y_0 + 10, this.turretAngle, 1, 1, 1);
}
;
_.fire = function fire_2(){
  addProjectile(new CorsairBullet(this.bulletTiles, this.bulletHitEffect, this.x_0 + 15 * sin_0(this.turretAngle), this.y_0 + 10 - 15 * cos_0(this.turretAngle), this.turretAngle, this));
}
;
_.fireSpecial = function fireSpecial_0(){
  ($clinit_Resources() , bombLaunch).play_0();
  addProjectile(new CorsairBomb(this.bombTiles, this.x_0 + 15 * sin_0(this.turretAngle), this.y_0 + 10 - 15 * cos_0(this.turretAngle), this.turretAngle, this.controlIsHeld, this));
}
;
_.tick_1 = function tick_11(){
  $tickPlayerShip(this);
  !this.controlIsHeld[4] && (this.xDir != 0 || this.yDir != 0) && (this.desiredTurretAngle = DESIRED_ANGLES[this.yDir + 1][this.xDir + 1]);
  this.turretAngle = approachAngle(this.turretAngle, this.desiredTurretAngle);
}
;
_.desiredTurretAngle = 0;
_.turretAngle = 0;
var COLLISION_RECT_2, DESIRED_ANGLES;
var Lnz_ac_auckland_spaceinvadersx_game_Corsair_2_classLit = createForClass(402);
function $clinit_PlayerProjectile(){
  $clinit_PlayerProjectile = emptyMethod;
  $clinit_Projectile();
  new Rectangle_0(1200, 700);
}

function PlayerProjectile(image, collisionRect, x_0, y_0, damage, owner){
  $clinit_PlayerProjectile();
  Projectile.call(this, image, collisionRect, x_0, y_0);
  this.owner = owner;
  this.damage = damage;
}

defineClass(112, 175, $intern_30);
_.collideTargets = function collideTargets_1(){
  var hitEnemy;
  hitEnemy = $findCollision(this, ($clinit_Game() , enemies));
  if (hitEnemy) {
    hitEnemy.damage_0(this.damage, this.owner);
    this.dead = true;
    this.spawnHitEffect();
  }
}
;
_.damage = 0;
var Lnz_ac_auckland_spaceinvadersx_game_PlayerProjectile_2_classLit = createForClass(112);
function $clinit_CorsairBomb(){
  $clinit_CorsairBomb = emptyMethod;
  $clinit_PlayerProjectile();
  COLLISION_RECT_3 = new Rectangle_0(50, 50);
}

function $explode_0(this$static){
  var enemy, enemy$iterator, explosionX, explosionY, xDist, yDist;
  ($clinit_Resources() , deepExplosion).play_0();
  explosionX = round_int(this$static.x_0);
  explosionY = round_int(this$static.y_0);
  for (enemy$iterator = $iterator_1(($clinit_Game() , enemies)); !enemy$iterator.node?!!enemy$iterator.this$01.head:!!enemy$iterator.node.next;) {
    enemy = $next_3(enemy$iterator);
    if (enemy.dead)
      continue;
    xDist = $xDist(enemy.bounds, explosionX);
    yDist = $yDist(enemy.bounds, explosionY);
    xDist * xDist + yDist * yDist <= 10000 && enemy.damage_0(200, this$static.owner);
  }
  this$static.dead = true;
  addEffect(new ShockWave(this$static.x_0, this$static.y_0));
  addEffect(new AnimEffect(flakExplosion, this$static.x_0, this$static.y_0, 1));
}

function CorsairBomb(tiles, x_0, y_0, angle, controlIsHeld, owner){
  $clinit_CorsairBomb();
  PlayerProjectile.call(this, tiles.tiles[0], COLLISION_RECT_3, x_0, y_0, 200, owner);
  $setAngleAndSpeed(this, angle, 7);
  this.tiles = tiles;
  this.controlIsHeld = controlIsHeld;
}

defineClass(416, 112, $intern_30, CorsairBomb);
_.spawnHitEffect = function spawnHitEffect_1(){
  addEffect(new ShockWave(this.x_0, this.y_0));
  addEffect(new AnimEffect(($clinit_Resources() , flakExplosion), this.x_0, this.y_0, 1));
}
;
_.tick_1 = function tick_12(){
  this.xVel = xAngle(this.angle, this.speed_0);
  this.yVel = yAngle(this.angle, this.speed_0);
  $tickSprite(this);
  if (this.ageTicker == 20) {
    this.remoteDetonate = this.controlIsHeld[5];
    ($clinit_Resources() , beep).play_0();
    this.image = this.tiles.tiles[1];
  }
   else 
    this.ageTicker > 20 && (this.remoteDetonate?this.controlIsHeld[5] || $explode_0(this):$findCollision(this, ($clinit_Game() , enemies))?$explode_0(this):$animateSprite(this, this.tiles, this.ageTicker, 3));
  $contains_2(($clinit_Projectile() , PROJECTILE_RANGE), round_int(this.x_0), round_int(this.y_0)) || (this.dead = true);
}
;
_.remoteDetonate = false;
var COLLISION_RECT_3;
var Lnz_ac_auckland_spaceinvadersx_game_CorsairBomb_2_classLit = createForClass(416);
function $clinit_CorsairBullet(){
  $clinit_CorsairBullet = emptyMethod;
  $clinit_PlayerProjectile();
  COLLISION_RECT_4 = new Rectangle_0(8, 8);
}

function CorsairBullet(tiles, hitEffect, x_0, y_0, angle, owner){
  $clinit_CorsairBullet();
  PlayerProjectile.call(this, tiles.tiles[0], COLLISION_RECT_4, x_0, y_0, 10, owner);
  $setAngleAndSpeed(this, angle, 10);
  this.tiles = tiles;
  this.hitEffect = hitEffect;
}

defineClass(415, 112, $intern_30, CorsairBullet);
_.draw = function draw_9(g){
  this.dead || $drawImage_3(g, this.image, this.x_0, this.y_0, this.angle, 1, 1, 1);
}
;
_.spawnHitEffect = function spawnHitEffect_2(){
  addEffect(new AnimEffect(this.hitEffect, this.x_0, this.y_0, 1));
}
;
_.tick_1 = function tick_13(){
  $randimateSprite(this, this.tiles, this.ageTicker);
  $tickRotateProjectile(this);
}
;
var COLLISION_RECT_4;
var Lnz_ac_auckland_spaceinvadersx_game_CorsairBullet_2_classLit = createForClass(415);
function $clinit_Crab(){
  $clinit_Crab = emptyMethod;
  $clinit_Sprite();
  COLLISION_RECT_5 = new Rectangle_0(60, 78);
}

function $shoot(this$static){
  if (this$static.y_0 < -250)
    return;
  ($clinit_Resources() , plasma).play_0();
  addProjectile(new AlienPlasma(redAlienPlasma, redPlasmaEffect, this$static.x_0, this$static.y_0, this$static.angle));
}

function Crab(x_0, wobbleWidth){
  Enemy.call(this, ($clinit_Resources() , crab), crabS, COLLISION_RECT_5, x_0, $intern_38, 100);
  this.desiredX = x_0;
  this.wobbleWidth = wobbleWidth;
  this.yVel = 3;
  this.xVel = 6;
  this.reloadTicker = round_int(random()) * 50;
  this.angle = $intern_28;
}

defineClass(392, 54, $intern_30, Crab);
_.explode = function explode_2(){
  addEffect(new AlienExplosion(this.x_0, this.y_0));
  ($clinit_Resources() , explosion).play_0();
}
;
_.tick_1 = function tick_14(){
  if (this.x_0 < this.desiredX - this.wobbleWidth) {
    this.xVel += 1;
    this.xVel > 6 && (this.xVel = 6);
  }
   else if (this.x_0 > this.desiredX + this.wobbleWidth) {
    this.xVel -= 1;
    this.xVel < -6 && (this.xVel = -6);
  }
  $tickEnemy(this);
  --this.reloadTicker;
  if (this.reloadTicker < 0) {
    this.reloadTicker = 50;
    this.ammo = 3;
  }
  --this.refireTicker;
  if (this.refireTicker < 0 && this.ammo > 0) {
    --this.ammo;
    this.refireTicker = 5;
    $shoot(this);
  }
}
;
_.ammo = 0;
_.desiredX = 0;
_.refireTicker = 0;
_.reloadTicker = 0;
_.wobbleWidth = 0;
var COLLISION_RECT_5;
var Lnz_ac_auckland_spaceinvadersx_game_Crab_2_classLit = createForClass(392);
function $clinit_Dagger(){
  $clinit_Dagger = emptyMethod;
  $clinit_Sprite();
  COLLISION_RECT_6 = new Rectangle_0(70, 70);
  SPAWN_X_0 = initValues(getClassLiteralForArray(I_classLit, 1), $intern_32, 0, 7, [-300, 300]);
  MIN_ANGLE = initValues(getClassLiteralForArray(D_classLit, 1), $intern_34, 0, 7, [$intern_37, 3.3379421944391554]);
}

function Dagger(x_0, y_0, angle, shooter){
  Enemy.call(this, ($clinit_Resources() , dagger), daggerS, COLLISION_RECT_6, x_0, y_0, 40);
  $setAngleAndSpeed(this, angle, 6);
  this.minShootY = -200 + round_int(200 * random());
  this.shooter = shooter;
}

function spawnSwarm(startPos, shooterFraction){
  $clinit_Dagger();
  var daggerID, startAngle, trailX, trailY;
  startAngle = MIN_ANGLE[startPos] + random() * 0.5890486225480862;
  trailX = ($clinit_Sprite() , 100 * sin_0(startAngle));
  trailY = 100 * -cos_0(startAngle);
  for (daggerID = 0; daggerID < 5; daggerID++) {
    addEnemy(new Dagger(SPAWN_X_0[startPos] - trailX * daggerID, $intern_38 - trailY * daggerID, startAngle, random() < shooterFraction));
  }
}

defineClass(391, 54, $intern_30, Dagger);
_.draw = function draw_10(g){
  $drawRotateEnemy(this, g);
}
;
_.explode = function explode_3(){
  addEffect(new AlienExplosion(this.x_0, this.y_0));
  ($clinit_Resources() , explosion).play_0();
}
;
_.tick_1 = function tick_15(){
  var aimed;
  $tickEnemy(this);
  aimed = $homeFor(this, ($clinit_Game() , players_0), 0.05);
  this.shooter && aimed && this.y_0 >= this.minShootY && this.y_0 <= 200 && (this.shooter = false , ($clinit_Resources() , plasma).play_0() , addProjectile(new AlienPlasma(greenAlienPlasma, greenPlasmaEffect, this.x_0, this.y_0, this.angle)) , undefined);
}
;
_.minShootY = 0;
_.shooter = false;
var COLLISION_RECT_6, MIN_ANGLE, SPAWN_X_0;
var Lnz_ac_auckland_spaceinvadersx_game_Dagger_2_classLit = createForClass(391);
function $clinit_Destroyer(){
  $clinit_Destroyer = emptyMethod;
  $clinit_PlayerShip();
  COLLISION_RECT_7 = new Rectangle_0(40, 30);
  WHITE_TRANSPARENT = $transparent(($clinit_Colour() , WHITE));
}

function $tickDeathRay(this$static){
  var enemy, enemy$iterator;
  $setAbsBounds(this$static.deathRayBounds, round_int(this$static.x_0) - 5, -350, round_int(this$static.x_0) + 5, round_int(this$static.y_0) - 30);
  $setAbsBounds(this$static.deathRayGlowBounds, round_int(this$static.x_0) - 10, -350, round_int(this$static.x_0) + 10, round_int(this$static.y_0) - 30);
  for (enemy$iterator = $iterator_1(($clinit_Game() , enemies)); !enemy$iterator.node?!!enemy$iterator.this$01.head:!!enemy$iterator.node.next;) {
    enemy = $next_3(enemy$iterator);
    if (enemy.dead)
      continue;
    $intersects(this$static.deathRayBounds, enemy.bounds) && enemy.damage_0(10, this$static);
  }
}

function Destroyer(playerColour, startPos, controlState){
  $clinit_Destroyer();
  PlayerShip.call(this, ($clinit_Resources() , destroyerC), destroyerS, playerColour, COLLISION_RECT_7, startPos, 6, controlState);
  this.laserShieldImage = recolourImage_0(destroyerC, playerColour, 0);
  this.laserHitEffect = recolourTiles(laserEffectC, playerColour);
  this.laserBounds = new Rectangle;
  this.laserGlowBounds = new Rectangle;
  this.deathRayBounds = new Rectangle;
  this.deathRayGlowBounds = new Rectangle;
  this.laserTicker = 0;
  this.playerColourTransparent = (playerColour.color_0 >> 24 & 255) == 0?playerColour:new Colour_1(playerColour.color_0 >> 16 & 255, playerColour.color_0 >> 8 & 255, playerColour.color_0 & 255);
  this.deathRayBeam = ($clinit_Toolkit() , create_6(WHITE_TRANSPARENT, ($clinit_Colour() , WHITE), 10, true));
  this.deathRayGlow = create_6(this.playerColourTransparent, playerColour, 20, true);
}

defineClass(403, 55, $intern_33, Destroyer);
_.draw = function draw_11(g){
  var rayTime, shieldScale;
  if (this.laserTicker > 0) {
    $fillRect_1(g, this.laserBounds, this.playerColour, this.laserTicker / 5);
    $fillRect_1(g, this.laserGlowBounds, this.playerColour, 0.5 * this.laserTicker / 5);
  }
  if (this.deathRayTicker > 0) {
    rayTime = this.deathRayTicker / 30;
    $fillGradient_0(g, this.deathRayBounds, this.deathRayBeam, rayTime);
    $fillGradient_0(g, this.deathRayGlowBounds, this.deathRayGlow, rayTime);
    shieldScale = 0.5 * (1 - rayTime) + 1;
    $drawImage_3(g, this.laserShieldImage, this.x_0, this.y_0, 0, shieldScale, shieldScale, rayTime);
  }
  $drawPlayerShip(this, g);
}
;
_.fire = function fire_3(){
  var enemy, enemy$iterator, hitEnemy, hitY, laserY;
  this.laserTicker = 5;
  laserY = -350;
  $setAbsBounds(this.laserBounds, round_int(this.x_0) - 1, -350, round_int(this.x_0) + 1, round_int(this.y_0) - 30);
  hitEnemy = null;
  for (enemy$iterator = $iterator_1(($clinit_Game() , enemies)); !enemy$iterator.node?!!enemy$iterator.this$01.head:!!enemy$iterator.node.next;) {
    enemy = $next_3(enemy$iterator);
    if (enemy.dead)
      continue;
    if ($intersects(this.laserBounds, enemy.bounds)) {
      hitY = enemy.bounds.yMax;
      if (hitY > laserY) {
        hitEnemy = enemy;
        laserY = hitY;
        if (hitY >= round_int(this.y_0) - 30) {
          laserY = round_int(this.y_0) - 30;
          break;
        }
      }
    }
  }
  $setAbsBounds(this.laserBounds, round_int(this.x_0) - 1, laserY, round_int(this.x_0) + 1, round_int(this.y_0) - 30);
  if (hitEnemy) {
    hitEnemy.damage_0(20, this);
    addEffect(new AnimEffect(this.laserHitEffect, this.x_0, laserY, 1));
  }
}
;
_.fireSpecial = function fireSpecial_1(){
  this.deathRayTicker = 30;
  ($clinit_Resources() , deathRay).play_0();
}
;
_.kill = function kill_0(){
  if (this.deathRayTicker > 0)
    return false;
  return $kill(this);
}
;
_.tick_1 = function tick_16(){
  --this.laserTicker;
  --this.deathRayTicker;
  $tickPlayerShip(this);
  if (this.laserTicker > 0) {
    $setAbsBounds(this.laserBounds, round_int(this.x_0) - 1, this.laserBounds.yMin, round_int(this.x_0) + 1, this.laserBounds.yMax);
    $setAbsBounds(this.laserGlowBounds, round_int(this.x_0) - 2, this.laserBounds.yMin, round_int(this.x_0) + 2, this.laserBounds.yMax);
  }
  this.deathRayTicker > 0 && $tickDeathRay(this);
}
;
_.deathRayTicker = 0;
_.laserTicker = 0;
var COLLISION_RECT_7, WHITE_TRANSPARENT;
var Lnz_ac_auckland_spaceinvadersx_game_Destroyer_2_classLit = createForClass(403);
function $tickFadeEffect(this$static){
  this$static.alpha_0 = max_1(1 - this$static.ageTicker / this$static.fadeTicks, 0);
  this$static.scale_0 = this$static.alpha_0 * this$static.alpha_0;
  this$static.scale_0 = this$static.scale_0 * this$static.startScale + (1 - this$static.scale_0) * this$static.endScale;
  return this$static.ageTicker > this$static.fadeTicks;
}

function FadeEffect(image, x_0, y_0, startScale, endScale){
  Sprite.call(this, image, x_0, y_0);
  this.fadeTicks = 15;
  this.startScale = startScale;
  this.endScale = endScale;
  $tickFadeEffect(this);
}

defineClass(188, 13, $intern_30);
_.draw = function draw_12(g){
  $drawImage_3(g, this.image, this.x_0, this.y_0, 0, this.scale_0, this.scale_0, this.alpha_0);
}
;
_.tick_1 = function tick_17(){
  $tickSprite(this);
  $tickFadeEffect(this) && (this.dead = true);
}
;
_.alpha_0 = 0;
_.endScale = 0;
_.fadeTicks = 0;
_.scale_0 = 0;
_.startScale = 0;
var Lnz_ac_auckland_spaceinvadersx_game_FadeEffect_2_classLit = createForClass(188);
function $clinit_Game(){
  $clinit_Game = emptyMethod;
  enemies = new IterateList;
  players_0 = new IterateList;
  projectiles = new IterateList;
  effects = new IterateList;
}

function addEffect(newEffect){
  $clinit_Game();
  $add_6(effects, newEffect);
}

function addEnemy(newEnemy){
  $clinit_Game();
  $add_6(enemies, newEnemy);
}

function addProjectile(newProjectile){
  $clinit_Game();
  $add_6(projectiles, newProjectile);
}

function clearAll(){
  $clinit_Game();
  $clear(enemies);
  $clear(players_0);
  $clear(projectiles);
  $clear(effects);
}

function createPlayerShip(shipType, colour, startPos, controlState){
  $clinit_Game();
  var newShip;
  newShip = getPlayerShip(shipType, colour, startPos, controlState);
  $add_6(players_0, newShip);
  return newShip;
}

function draw_13(g){
  $clinit_Game();
  var effect, effect$iterator, enemy, enemy$iterator, player, player$iterator, player$iterator0, projectile, projectile$iterator;
  draw_17(g);
  for (enemy$iterator = $iterator_1(enemies); !enemy$iterator.node?!!enemy$iterator.this$01.head:!!enemy$iterator.node.next;) {
    enemy = $next_3(enemy$iterator);
    enemy.draw(g);
  }
  for (player$iterator0 = $iterator_1(players_0); !player$iterator0.node?!!player$iterator0.this$01.head:!!player$iterator0.node.next;) {
    player = $next_3(player$iterator0);
    player.draw(g);
  }
  for (projectile$iterator = $iterator_1(projectiles); !projectile$iterator.node?!!projectile$iterator.this$01.head:!!projectile$iterator.node.next;) {
    projectile = $next_3(projectile$iterator);
    projectile.draw(g);
  }
  for (effect$iterator = $iterator_1(effects); !effect$iterator.node?!!effect$iterator.this$01.head:!!effect$iterator.node.next;) {
    effect = $next_3(effect$iterator);
    effect.draw(g);
  }
  if (gameState_0 != 1)
    for (player$iterator = $iterator_1(players_0); !player$iterator.node?!!player$iterator.this$01.head:!!player$iterator.node.next;) {
      player = $next_3(player$iterator);
      $drawString(g, '' + player.score, ($clinit_Resources() , xenonWhite), HUD_X[player.startPos], -290, ALIGNMENT[player.startPos]);
      $drawIcons(g, heartHUD, player.lives, HUD_X[player.startPos], 290, ICON_GAP_X[player.startPos], 0);
      $drawIcons(g, nukeHUD, player.specialAmmo, HUD_X[player.startPos], 290, 0, -20);
      player.rapidFireTicker > 0 && (player.rapidFireTicker > 50?$drawImage_2(g, rapidHUD, HUD_X[player.startPos] + ICON_GAP_X[player.startPos], 270, 0.5 + 0.5 * sin_0(player.ageTicker * 0.2)):$drawImage_2(g, rapidHUD, HUD_X[player.startPos] + ICON_GAP_X[player.startPos], 270, 0.5 + 0.5 * sin_0(player.ageTicker * 0.3)));
    }
  gameState_0 == 3 && $fillRect_1(g, ($clinit_SpaceInvadersX() , SCREEN), ($clinit_Colour() , BLACK), 0.5);
}

function endGame(){
  $clinit_Game();
  var player, player$iterator;
  gameState_0 = 0;
  $clinit_PlayerShip();
  gameState = 2;
  for (player$iterator = $iterator_1(players_0); !player$iterator.node?!!player$iterator.this$01.head:!!player$iterator.node.next;) {
    player = $next_3(player$iterator);
    player.dead && (player.lives > 0 || training) && $respawn(player);
    player.xDir = 0;
    player.yDir = 0;
    player.xVel = 0;
    player.yVel = min_1(player.yVel, 0);
  }
  setMenuScreen(endGameScreen);
}

function removePlayerShip(player){
  $clinit_Game();
  $advanceToFind(players_0, player, true);
}

function startGame(){
  $clinit_Game();
  var player, player$iterator;
  $clear(enemies);
  startGame_0(players_0.size_0);
  for (player$iterator = $iterator_1(players_0); !player$iterator.node?!!player$iterator.this$01.head:!!player$iterator.node.next;) {
    player = $next_3(player$iterator);
    $respawn(player);
    player.lives = 2;
    player.specialAmmo = 1;
    player.score = 0;
  }
  playersAlive = players_0.size_0;
  $clinit_PlayerShip();
  gameState = 1;
  gameState_0 = 2;
  training = false;
}

function tick_18(){
  $clinit_Game();
  var effect, enemy, i, i0, i1, player, player$iterator, projectile;
  if (gameState_0 != 3) {
    height_0 += 2;
    height_0 >= 150 && (height_0 -= 300);
    current_0 < desired?++current_0:current_0 > desired && --current_0;
    if (gameState_0 == 2) {
      playersAlive == 0 && !training && ($setSuccess(endGameScreen, false) , endGame());
      tickLevel();
    }
    for (i0 = $iterator_1(enemies); !i0.node?!!i0.this$01.head:!!i0.node.next;) {
      enemy = $next_3(i0);
      enemy.dead?$remove_13(i0):enemy.tick_1();
    }
    for (player$iterator = $iterator_1(players_0); !player$iterator.node?!!player$iterator.this$01.head:!!player$iterator.node.next;) {
      player = $next_3(player$iterator);
      player.tick_1();
    }
    for (i1 = $iterator_1(projectiles); !i1.node?!!i1.this$01.head:!!i1.node.next;) {
      projectile = $next_3(i1);
      projectile.dead?$remove_13(i1):projectile.tick_1();
    }
    for (i = $iterator_1(effects); !i.node?!!i.this$01.head:!!i.node.next;) {
      effect = $next_3(i);
      effect.dead?$remove_13(i):effect.tick_1();
    }
  }
}

var effects, enemies, gameState_0 = 0, players_0, playersAlive = 0, projectiles, training = false;
function $clinit_Hawk(){
  $clinit_Hawk = emptyMethod;
  $clinit_Sprite();
  COLLISION_RECT_8 = new Rectangle_0(80, 60);
}

function $changeDirection(this$static){
  var forwards, right;
  this$static.directionTicker = 20;
  forwards = true;
  this$static.backwardPoints > 0 && this$static.y_0 > -250 && this$static.y_0 < 200 && (forwards = round_int(2 * random()) != 0);
  right = true;
  this$static.x_0 > -300 && this$static.x_0 < 300?(right = round_int(2 * random()) != 0):this$static.x_0 >= 300 && (right = false);
  if (forwards) {
    ++this$static.backwardPoints;
    $setAngleAndSpeed(this$static, random() * $intern_36 + (right?$intern_36:$intern_28), 4);
  }
   else {
    this$static.backwardPoints -= 2;
    $setAngleAndSpeed(this$static, random() * $intern_36 + (right?0:$intern_35), 4);
  }
  this$static.yVel += 2;
}

function Hawk(x_0){
  $clinit_Hawk();
  Enemy.call(this, ($clinit_Resources() , hawk), hawkS, COLLISION_RECT_8, x_0, $intern_38, 100);
  this.backwardPoints = -1;
  this.reloadTicker = -1;
  this.refireTicker = 100;
  $changeDirection(this);
}

defineClass(393, 54, $intern_30, Hawk);
_.explode = function explode_4(){
  addEffect(new AlienExplosion(this.x_0, this.y_0));
  ($clinit_Resources() , explosion).play_0();
}
;
_.tick_1 = function tick_19(){
  var fireX;
  $tickEnemy(this);
  --this.directionTicker;
  this.directionTicker <= 0 && $changeDirection(this);
  --this.reloadTicker;
  if (this.reloadTicker < -1 && this.y_0 > -250)
    this.reloadTicker = round_int(35 * random());
  else if (this.reloadTicker <= 0 && this.y_0 > -250) {
    this.refireTicker = 0;
    this.reloadTicker = round_int(25 * random() + 35) + 20;
  }
  ~~(this.refireTicker / 2) < 10 && this.refireTicker % 2 == 0 && (($clinit_Resources() , plasma).play_0() , fireX = this.x_0 + (~~(this.refireTicker / 2) % 2 == 0?13:-13) , addProjectile(new AlienPlasma(cyanAlienPlasma, cyanPlasmaEffect, fireX, this.y_0, $intern_28)) , undefined);
  ++this.refireTicker;
}
;
_.backwardPoints = 0;
_.directionTicker = 0;
_.refireTicker = 0;
_.reloadTicker = 0;
var COLLISION_RECT_8;
var Lnz_ac_auckland_spaceinvadersx_game_Hawk_2_classLit = createForClass(393);
function $add_6(this$static, element){
  if (this$static.size_0 == 0) {
    this$static.head = this$static.tail = new IterateList$IterateListNode(element);
  }
   else {
    this$static.tail.next = new IterateList$IterateListNode(element);
    this$static.tail = this$static.tail.next;
  }
  ++this$static.size_0;
  return true;
}

function $iterator_1(this$static){
  this$static.iterator = new IterateList$IL_Iterator(this$static);
  return this$static.iterator;
}

function IterateList(){
  this.head = null;
  this.tail = null;
  this.size_0 = 0;
}

defineClass(90, 448, {}, IterateList);
_.iterator_0 = function iterator_13(){
  return $iterator_1(this);
}
;
_.size_1 = function size_15(){
  return this.size_0;
}
;
_.size_0 = 0;
var Lnz_ac_auckland_spaceinvadersx_game_IterateList_2_classLit = createForClass(90);
function $hasNext_1(this$static){
  return !this$static.node?!!this$static.this$01.head:!!this$static.node.next;
}

function $next_3(this$static){
  if (this$static != this$static.this$01.iterator)
    throw new ConcurrentModificationException;
  this$static.prev = this$static.node;
  !this$static.node?(this$static.node = this$static.this$01.head):(this$static.node = this$static.node.next);
  return this$static.node.element;
}

function $remove_13(this$static){
  if (this$static != this$static.this$01.iterator)
    throw new ConcurrentModificationException;
  if (this$static.node == this$static.prev)
    throw new NullPointerException;
  this$static.node = this$static.node.next;
  if (!this$static.prev) {
    this$static.this$01.head = this$static.node;
    !this$static.node && (this$static.this$01.tail = null);
  }
   else {
    this$static.prev.next = this$static.node;
    !this$static.node && (this$static.this$01.tail = this$static.prev);
  }
  this$static.node = this$static.prev;
  --this$static.this$01.size_0;
}

function IterateList$IL_Iterator(this$0){
  this.this$01 = this$0;
  this.prev = null;
  this.node = null;
}

defineClass(91, 1, {}, IterateList$IL_Iterator);
_.hasNext = function hasNext_11(){
  return $hasNext_1(this);
}
;
_.next_0 = function next_12(){
  return $next_3(this);
}
;
_.remove_2 = function remove_33(){
  $remove_13(this);
}
;
var Lnz_ac_auckland_spaceinvadersx_game_IterateList$IL_1Iterator_2_classLit = createForClass(91);
function IterateList$IterateListNode(element){
  this.element = element;
  this.next = null;
}

defineClass(174, 1, {}, IterateList$IterateListNode);
var Lnz_ac_auckland_spaceinvadersx_game_IterateList$IterateListNode_2_classLit = createForClass(174);
function $clinit_Level(){
  $clinit_Level = emptyMethod;
  events_0 = initDim(I_classLit, $intern_6, 19, 4, 0, 2);
  events_0[0] = initValues(getClassLiteralForArray(I_classLit, 1), $intern_32, 0, 7, [100, 0, 1, 200, 1, 1, 250, 0, 1, 300, 1, 1, 400, 0, 1, 500, 1, 1, 534, 2, 1, 797, 1, 1, 847, 0, 1, 1055, 0, 1, 1070, 1, 1, 1085, 2, 1, 1255, 1, 1, 1274, 0, 1, 1471, 1, 1, 1493, 0, 1, 1534, 2, 1, 1578, 2, 1, 1725, 0, 1, 1750, 1, 1, 1775, 0, 1, 1804, 1, 1, 1833, 2, 1, 1993, 0, 1, 2020, 1, 1, 2060, 2, 1, 2097, 2, 1, 2146, 2, 1, 2328, 1, 1, 2352, 0, 1, 2370, 1, 1, 2391, 0, 1, 2425, 2, 1, 2457, 2, 1, 2498, 3, 1, 2677, 2, 1, 2699, 2, 1, 2750, 2, 1, 2800, 3, 1, 2994, 0, 1, 3020, 1, 1, 3061, 2, 1, 3082, 2, 1, 3113, 3, 1, 3275, 0, 1, 3298, 0, 1, 3324, 1, 1, 3346, 1, 1, 3467, 2, 1, 3489, 2, 1, 3512, 3, 1, 3620, 11, 1]);
  events_0[1] = initValues(getClassLiteralForArray(I_classLit, 1), $intern_32, 0, 7, [102, 0, 1, 133, 1, 1, 178, 0, 1, 219, 1, 1, 274, 2, 1, 302, 3, 1, 342, 4, 1, 542, 0, 1, 569, 1, 1, 654, 4, 1, 777, 3, 1, 820, 2, 1, 921, 2, 1, 956, 3, 1, 1013, 1, 1, 1035, 0, 1, 1192, 1, 1, 1219, 0, 1, 1298, 0, 1, 1320, 1, 1, 1370, 2, 1, 1401, 3, 1, 1426, 4, 1, 1610, 2, 1, 1634, 3, 1, 1661, 4, 1, 1680, 1, 1, 1680, 0, 1, 1850, 1, 1, 1850, 0, 1, 1939, 4, 1, 1961, 3, 1, 1982, 2, 1, 2170, 0, 1, 2192, 1, 1, 2235, 4, 1, 2254, 4, 1, 2446, 0, 1, 2468, 1, 1, 2501, 2, 1, 2528, 3, 1, 2545, 4, 1, 2784, 0, 1, 2809, 1, 1, 2959, 1, 1, 2980, 0, 1, 3033, 5, 1, 3062, 5, 1, 3094, 3, 1, 3123, 3, 1, 3240, 2, 1, 3262, 2, 1, 3293, 3, 1, 3319, 3, 1, 3564, 2, 1, 3581, 3, 1, 3595, 4, 1, 3669, 11, 1]);
  events_0[2] = initValues(getClassLiteralForArray(I_classLit, 1), $intern_32, 0, 7, [150, 5, 1, 250, 5, 1, 350, 5, 1, 450, 5, 1, 500, 0, 1, 500, 1, 1, 750, 5, 1, 850, 5, 1, 950, 5, 1, 1050, 5, 1, 1127, 2, 1, 1166, 5, 1, 1358, 5, 1, 1481, 5, 1, 1498, 5, 1, 1516, 5, 1, 1537, 5, 1, 1560, 4, 1, 1686, 4, 1, 1710, 3, 1, 1794, 5, 1, 1953, 1, 1, 1967, 0, 1, 2170, 2, 1, 2189, 3, 1, 2215, 4, 1, 2421, 2, 1, 2454, 3, 1, 2526, 4, 1, 2690, 5, 1, 2701, 5, 1, 2715, 5, 1, 2833, 5, 1, 2850, 5, 1, 2865, 5, 1, 2902, 5, 1, 3065, 5, 1, 3083, 5, 1, 3101, 5, 1, 3276, 2, 1, 3295, 3, 1, 3314, 4, 1, 3526, 5, 1, 3549, 5, 1, 3568, 5, 1, 3704, 5, 1, 3721, 5, 1, 3737, 5, 1, 3826, 2, 1, 3848, 3, 1, 3868, 4, 1, 4050, 1, 1, 4050, 0, 1, 4192, 4, 1, 4205, 4, 1, 4217, 4, 1, 4468, 5, 1, 4486, 5, 1, 4509, 5, 1, 4680, 5, 1, 4695, 5, 1, 4708, 5, 1, 4841, 2, 1, 4852, 2, 1, 4864, 2, 1, 4876, 2, 1, 5039, 5, 1, 5055, 5, 1, 5110, 2, 1, 5129, 3, 1, 5255, 3, 1, 5267, 3, 1, 5465, 3, 1, 5480, 3, 1, 5500, 5, 1, 5513, 5, 1, 5635, 5, 1, 5647, 5, 1, 5824, 2, 1, 5841, 3, 1, 5856, 4, 1, 5879, 1, 1, 5897, 0, 1, 6104, 2, 1, 6121, 3, 1, 6140, 4, 1, 6174, 5, 1, 6203, 5, 1, 6393, 5, 1, 6414, 5, 1, 6434, 5, 1, 6456, 5, 1, 6479, 5, 1, 6500, 5, 1, 6523, 5, 1, 6546, 5, 1, 6651, 2, 1, 6675, 3, 1, 6711, 4, 1, 6745, 4, 1, 6933, 5, 1, 6950, 5, 1, 6977, 3, 1, 6987, 3, 1, 7004, 4, 1, 7192, 8, 1, 7209, 8, 1, 7227, 8, 1, 7250, 8, 1, 7299, 11, 1]);
  events_0[3] = initValues(getClassLiteralForArray(I_classLit, 1), $intern_32, 0, 7, [200, 6, 1]);
  DAGGER_NASTINESS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_34, 0, 7, [0.1, 0.5, 0.5, 0.5]);
}

function doEvent(eventType){
  var x_0, wobbleWidth;
  switch (eventType) {
    case 0:
      spawnSwarm(0, DAGGER_NASTINESS[levelNumber]);
      break;
    case 1:
      spawnSwarm(1, DAGGER_NASTINESS[levelNumber]);
      break;
    case 2:
      $clinit_Crab();
      x_0 = -210 + random() * 420;
      wobbleWidth = 50 + random() * 100;
      addEnemy(new Crab(x_0, wobbleWidth));
      break;
    case 3:
      $clinit_Hawk();
      addEnemy(new Hawk(-360 + random() * 720));
      break;
    case 4:
      $clinit_Wasp();
      addEnemy(new Wasp(-360 + random() * 720));
      break;
    case 5:
      $clinit_Phantom();
      addEnemy(new Phantom(-360 + random() * 720));
      break;
    case 6:
      $clinit_Beast();
      addEnemy(new Beast);
      break;
    case 7:
      $clinit_Pickup();
      addProjectile(new LifePickup(-360 + random() * 720, $intern_38));
      break;
    case 8:
      $clinit_Pickup();
      addProjectile(new NukePickup(-360 + random() * 720, $intern_38));
      break;
    case 9:
      $clinit_Pickup();
      addProjectile(new ShieldPickup(-360 + random() * 720, $intern_38));
      break;
    case 10:
      $clinit_Pickup();
      addProjectile(new RapidPickup(-360 + random() * 720, $intern_38));
      break;
    case 11:
      nextLevel();
  }
}

function nextLevel(){
  var nextTrack;
  ++levelNumber;
  if (levelNumber < 0 || levelNumber >= 4)
    return;
  levelTicker = 0;
  eventIndex = 0;
  nextTrack = null;
  switch (levelNumber) {
    case 0:
      nextTrack = ($clinit_Resources() , track1);
      break;
    case 1:
      nextTrack = ($clinit_Resources() , track2);
      break;
    case 2:
      nextTrack = ($clinit_Resources() , track3);
      break;
    case 3:
      nextTrack = ($clinit_Resources() , track4);
  }
  fadeToTrack(nextTrack);
}

function startGame_0(numPlayers){
  $clinit_Level();
  numPlayers_0 = numPlayers;
  levelNumber = -1;
  nextLevel();
}

function tickLevel(){
  $clinit_Level();
  if (levelNumber < 0 || levelNumber >= 4)
    return;
  ++levelTicker;
  while (eventIndex * 3 < events_0[levelNumber].length && levelTicker >= events_0[levelNumber][eventIndex * 3]) {
    if (events_0[levelNumber][eventIndex * 3 + 2] > numPlayers_0) {
      ++eventIndex;
      continue;
    }
    doEvent(events_0[levelNumber][eventIndex++ * 3 + 1]);
  }
  levelNumber == 2 && levelTicker % 100 == 0 && ($clinit_Sprite() , addEffect(new Cloud($intern_38 + random() * 800, 2 + random() * 2)));
}

var DAGGER_NASTINESS, eventIndex = 0, events_0, levelNumber = -1, levelTicker = 0, numPlayers_0 = 1;
function $clinit_Pickup(){
  $clinit_Pickup = emptyMethod;
  $clinit_Projectile();
  COLLISION_RECT_9 = new Rectangle_0(32, 32);
}

function Pickup(tiles, x_0, y_0){
  EnemyProjectile.call(this, tiles.tiles[0], COLLISION_RECT_9, x_0, y_0);
  this.yVel = 3;
  this.tiles = tiles;
}

defineClass(109, 178, $intern_30);
_.award_0 = function award_1(collector){
  return true;
}
;
_.collidePlayer = function collidePlayer_0(hitPlayer){
  if (this.award_0(hitPlayer)) {
    ($clinit_Resources() , collect_1).play_0();
    ($clinit_PlayerShip() , gameState) == 1 && (hitPlayer.score += 1000);
    this.dead = true;
  }
   else {
    this.yVel -= 2;
  }
}
;
_.draw = function draw_14(g){
  this.dead || $drawImage_1(g, this.image, this.x_0, this.y_0);
}
;
_.removeIfStray = function removeIfStray_2(){
  this.y_0 > 350 && (this.dead = true);
}
;
_.tick_1 = function tick_20(){
  var frame_0;
  if (this.ageTicker % 2 == 0) {
    frame_0 = ~~(this.ageTicker / 2) % (2 * this.tiles.tiles.length);
    frame_0 >= this.tiles.tiles.length && (frame_0 = 2 * this.tiles.tiles.length - frame_0 - 1);
    this.image = $getTile(this.tiles, frame_0);
  }
  this.yVel = min_1(this.yVel + 1, 3);
  $tickProjectile(this);
}
;
var COLLISION_RECT_9;
var Lnz_ac_auckland_spaceinvadersx_game_Pickup_2_classLit = createForClass(109);
function LifePickup(x_0, y_0){
  $clinit_Pickup();
  Pickup.call(this, ($clinit_Resources() , heart), x_0, y_0);
}

defineClass(179, 109, $intern_30, LifePickup);
_.award_0 = function award_2(collector){
  return $giveLife(collector);
}
;
var Lnz_ac_auckland_spaceinvadersx_game_LifePickup_2_classLit = createForClass(179);
function NukePickup(x_0, y_0){
  $clinit_Pickup();
  Pickup.call(this, ($clinit_Resources() , nuke), x_0, y_0);
}

defineClass(180, 109, $intern_30, NukePickup);
_.award_0 = function award_3(collector){
  return $giveSpecialAmmo(collector);
}
;
var Lnz_ac_auckland_spaceinvadersx_game_NukePickup_2_classLit = createForClass(180);
function $clinit_Phantom(){
  $clinit_Phantom = emptyMethod;
  $clinit_Sprite();
  COLLISION_RECT_10 = new Rectangle_0(50, 100);
  ANGLES = initValues(getClassLiteralForArray(D_classLit, 2), $intern_6, 31, 0, [initValues(getClassLiteralForArray(D_classLit, 1), $intern_34, 0, 7, [$intern_31, $intern_39]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_34, 0, 7, [0, $intern_28]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_34, 0, 7, [$intern_36, -1.5707963267948966]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_34, 0, 7, [0, $intern_37, $intern_40]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_34, 0, 7, [$intern_31, $intern_39, $intern_37, $intern_40])]);
}

function $shoot_0(this$static){
  var i;
  for (i = 0; i < ANGLES[this$static.angleSet].length; i++)
    addEnemy(new AlienMissile(this$static.x_0, this$static.y_0, ANGLES[this$static.angleSet][i]));
}

function Phantom(x_0){
  $clinit_Phantom();
  Enemy.call(this, ($clinit_Resources() , phantom), phantomS, COLLISION_RECT_10, x_0, $intern_38, 20);
  this.yVel = 4;
  this.startAlpha = 0.5;
  this.alpha_0 = 0.5;
  this.angleSet = 0;
  this.angle = $intern_28;
}

defineClass(395, 54, $intern_30, Phantom);
_.drawSprite = function drawSprite_0(g){
  this.dead || $drawImage_2(g, this.image, this.x_0, this.y_0, this.alpha_0);
}
;
_.explode = function explode_5(){
  addEffect(new AlienExplosion(this.x_0, this.y_0));
  ($clinit_Resources() , explosion).play_0();
}
;
_.tick_1 = function tick_21(){
  var explodeY, player, player$iterator;
  $tickEnemy(this);
  if (!this.dead) {
    explodeY = 200;
    for (player$iterator = $iterator_1(($clinit_Game() , players_0)); !player$iterator.node?!!player$iterator.this$01.head:!!player$iterator.node.next;) {
      player = $next_3(player$iterator);
      !player.dead && round_int(player.y_0) < explodeY && (explodeY = round_int(player.y_0));
    }
    this.y_0 >= explodeY?(addEffect(new AlienExplosion(this.x_0, this.y_0)) , ($clinit_Resources() , explosion).play_0() , $shoot_0(this) , this.dead = true):this.y_0 > explodeY - 100 && (this.alpha_0 = max_1(this.alpha_0, 1 - (explodeY - this.y_0) / 100 * (1 - this.startAlpha)));
  }
}
;
_.alpha_0 = 0;
_.angleSet = 0;
_.startAlpha = 0;
var ANGLES, COLLISION_RECT_10;
var Lnz_ac_auckland_spaceinvadersx_game_Phantom_2_classLit = createForClass(395);
function RapidPickup(x_0, y_0){
  $clinit_Pickup();
  Pickup.call(this, ($clinit_Resources() , rapid), x_0, y_0);
}

defineClass(182, 109, $intern_30, RapidPickup);
_.award_0 = function award_4(collector){
  return $giveRapidFire(collector);
}
;
_.tick_1 = function tick_22(){
  $animateSprite(this, this.tiles, this.ageTicker, 1);
  this.yVel = min_1(this.yVel + 1, 3);
  $tickProjectile(this);
}
;
var Lnz_ac_auckland_spaceinvadersx_game_RapidPickup_2_classLit = createForClass(182);
function ShieldPickup(x_0, y_0){
  $clinit_Pickup();
  Pickup.call(this, ($clinit_Resources() , shield), x_0, y_0);
}

defineClass(181, 109, $intern_30, ShieldPickup);
_.award_0 = function award_5(collector){
  return $giveShield(collector);
}
;
var Lnz_ac_auckland_spaceinvadersx_game_ShieldPickup_2_classLit = createForClass(181);
function ShipExplosion(x_0, y_0){
  $clinit_Sprite();
  var smokeID;
  AnimEffect.call(this, ($clinit_Resources() , shipExplosion), x_0, y_0, 2);
  for (smokeID = 0; smokeID < 20; smokeID++)
    addEffect(new SmokeEffect_0(x_0, y_0, $intern_29 * smokeID / 20));
}

defineClass(187, 30, $intern_30, ShipExplosion);
var Lnz_ac_auckland_spaceinvadersx_game_ShipExplosion_2_classLit = createForClass(187);
function ShockWave(x_0, y_0){
  $clinit_Sprite();
  FadeEffect.call(this, ($clinit_Resources() , shockWave), x_0, y_0, 0.25, 1);
}

defineClass(194, 188, $intern_30, ShockWave);
var Lnz_ac_auckland_spaceinvadersx_game_ShockWave_2_classLit = createForClass(194);
function SmokeEffect(x_0, y_0){
  $clinit_Sprite();
  FadeEffect.call(this, null, x_0, y_0, 1, 5);
  $setRandomImage(this, ($clinit_Resources() , smokeEffect));
}

function SmokeEffect_0(x_0, y_0, angle){
  SmokeEffect.call(this, x_0, y_0);
  $setAngleAndSpeed(this, angle, 8);
}

defineClass(110, 188, $intern_30, SmokeEffect, SmokeEffect_0);
var Lnz_ac_auckland_spaceinvadersx_game_SmokeEffect_2_classLit = createForClass(110);
function $clinit_Wasp(){
  $clinit_Wasp = emptyMethod;
  $clinit_Sprite();
  COLLISION_RECT_11 = new Rectangle_0(70, 70);
}

function Wasp(x_0){
  $clinit_Wasp();
  Enemy.call(this, ($clinit_Resources() , wasp), waspS, COLLISION_RECT_11, x_0, $intern_38, 100);
  $setAngleAndSpeed(this, $intern_28, 4);
  this.reloadTicker = 25 + round_int(25 * random());
  this.shot = 0;
}

defineClass(394, 54, $intern_30, Wasp);
_.draw = function draw_15(g){
  $drawRotateEnemy(this, g);
}
;
_.explode = function explode_6(){
  addEffect(new AlienExplosion(this.x_0, this.y_0));
  ($clinit_Resources() , explosion).play_0();
}
;
_.tick_1 = function tick_23(){
  $tickEnemy(this);
  if (this.shot < 4) {
    $homeFor(this, ($clinit_Game() , players_0), 0.05);
    --this.reloadTicker;
    if (this.reloadTicker == 0) {
      this.reloadTicker = 25;
      this.shot < 3?(($clinit_Resources() , plasma).play_0() , addProjectile(new AlienPlasma(cyanAlienPlasma, cyanPlasmaEffect, this.x_0, this.y_0, this.angle))):(($clinit_Resources() , missileLaunch).play_0() , addEnemy(new AlienMissile(this.x_0, this.y_0, this.angle)));
      ++this.shot;
    }
  }
   else {
    if ($approachRelAngle(this, normaliseAngle($intern_28 - this.angle), 0.2)) {
      this.speed_0 = min_1(this.speed_0 + 1, 12);
      this.xVel = xAngle(this.angle, this.speed_0);
      this.yVel = yAngle(this.angle, this.speed_0);
    }
  }
}
;
_.reloadTicker = 0;
_.shot = 0;
var COLLISION_RECT_11;
var Lnz_ac_auckland_spaceinvadersx_game_Wasp_2_classLit = createForClass(394);
function $clinit_XWing(){
  $clinit_XWing = emptyMethod;
  $clinit_PlayerShip();
  COLLISION_RECT_12 = new Rectangle_0(40, 30);
  SALVO_ANGLES = initValues(getClassLiteralForArray(D_classLit, 2), $intern_6, 31, 0, [initValues(getClassLiteralForArray(D_classLit, 1), $intern_34, 0, 7, [0, -1.0471975511965976, -2.0943951023931953]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_34, 0, 7, [0, 1.0471975511965976, 2.0943951023931953])]);
}

function XWing(playerColour, startPos, controlState){
  $clinit_XWing();
  PlayerShip.call(this, ($clinit_Resources() , xWingC), xWingS, playerColour, COLLISION_RECT_12, startPos, 8, controlState);
  this.bulletImage = recolourImage(xWingLaserC, playerColour);
  this.missileImage = recolourImage(xWingMissileC, playerColour);
  this.bulletHitEffect = recolourTiles(laserEffectC, playerColour);
  this.specialRefireTicker = 100;
}

defineClass(401, 55, $intern_33, XWing);
_.fire = function fire_4(){
  addProjectile(new XWingBullet(this.bulletImage, this.bulletHitEffect, this.x_0 - 23, this.y_0, this));
  addProjectile(new XWingBullet(this.bulletImage, this.bulletHitEffect, this.x_0 + 23, this.y_0, this));
}
;
_.fireSpecial = function fireSpecial_2(){
  this.specialRefireTicker = 0;
  ($clinit_Resources() , missileLaunch).play_0();
}
;
_.tick_1 = function tick_24(){
  $tickPlayerShip(this);
  if (~~(this.specialRefireTicker / 5) < 3 && this.specialRefireTicker % 5 == 0) {
    addProjectile(new XWingMissile(this.missileImage, this.x_0 - 23, this.y_0, SALVO_ANGLES[0][~~(this.specialRefireTicker / 5)], this));
    addProjectile(new XWingMissile(this.missileImage, this.x_0 + 23, this.y_0, SALVO_ANGLES[1][~~(this.specialRefireTicker / 5)], this));
  }
  ++this.specialRefireTicker;
}
;
_.specialRefireTicker = 0;
var COLLISION_RECT_12, SALVO_ANGLES;
var Lnz_ac_auckland_spaceinvadersx_game_XWing_2_classLit = createForClass(401);
function $clinit_XWingBullet(){
  $clinit_XWingBullet = emptyMethod;
  $clinit_PlayerProjectile();
  COLLISION_RECT_13 = new Rectangle_0(4, 12);
}

function XWingBullet(image, hitEffect, x_0, y_0, owner){
  $clinit_XWingBullet();
  PlayerProjectile.call(this, image, COLLISION_RECT_13, x_0, y_0, 15, owner);
  this.hitEffect = hitEffect;
  this.xVel = 0;
  this.yVel = -10;
}

defineClass(190, 112, $intern_30, XWingBullet);
_.spawnHitEffect = function spawnHitEffect_3(){
  addEffect(new AnimEffect(this.hitEffect, this.x_0, this.y_0, 1));
}
;
var COLLISION_RECT_13;
var Lnz_ac_auckland_spaceinvadersx_game_XWingBullet_2_classLit = createForClass(190);
function $clinit_XWingMissile(){
  $clinit_XWingMissile = emptyMethod;
  $clinit_PlayerProjectile();
  COLLISION_RECT_14 = new Rectangle_0(5, 5);
}

function XWingMissile(image, x_0, y_0, angle, owner){
  $clinit_XWingMissile();
  PlayerProjectile.call(this, image, COLLISION_RECT_14, x_0, y_0, 60, owner);
  $setAngleAndSpeed(this, angle, 12);
}

defineClass(189, 112, $intern_30, XWingMissile);
_.draw = function draw_16(g){
  this.dead || $drawImage_3(g, this.image, this.x_0, this.y_0, this.angle, 1, 1, 1);
}
;
_.spawnHitEffect = function spawnHitEffect_4(){
  addEffect(new AnimEffect(($clinit_Resources() , missileExplosion), this.x_0, this.y_0, 2));
}
;
_.tick_1 = function tick_25(){
  ($clinit_PlayerShip() , gameState) == 1?this.ageTicker < 200 && $homeFor(this, ($clinit_Game() , enemies), 0.1):$approachRelAngle(this, normaliseAngle(0 - this.angle), 0.1);
  addEffect(new AnimEffect(($clinit_Resources() , missileFlame), this.x_0, this.y_0, 1));
  this.ageTicker % 3 == 0 && addEffect(new SmokeEffect(this.x_0, this.y_0));
  $tickRotateProjectile(this);
}
;
var COLLISION_RECT_14;
var Lnz_ac_auckland_spaceinvadersx_game_XWingMissile_2_classLit = createForClass(189);
function $clinit_Colour(){
  $clinit_Colour = emptyMethod;
  WHITE = new Colour($intern_41);
  BLACK = new Colour(0);
  GREY = new Colour(8355711);
  RED = new Colour($intern_42);
  GREEN = new Colour($intern_43);
  BLUE = new Colour(255);
  YELLOW = new Colour(16776960);
  CYAN = new Colour($intern_25);
  MAGENTA = new Colour(16711935);
}

function $transparent(this$static){
  return (this$static.color_0 >> 24 & 255) == 0?this$static:new Colour_1(this$static.color_0 >> 16 & 255, this$static.color_0 >> 8 & 255, this$static.color_0 & 255);
}

function Colour(rgb){
  $clinit_Colour();
  this.color_0 = $intern_44 | rgb;
}

function Colour_0(red, green, blue){
  $clinit_Colour();
  this.color_0 = $intern_44 | red << 16 | green << 8 | blue;
}

function Colour_1(red, green, blue){
  $clinit_Colour();
  this.color_0 = 0 | red << 16 | green << 8 | blue;
}

function gradient_0(zero, one, scale){
  $clinit_Colour();
  var b, g, r;
  scale = (1 < scale?1:scale) > 0?1 < scale?1:scale:0;
  r = round_int(scale * (one.color_0 >> 16 & 255) + (1 - scale) * (zero.color_0 >> 16 & 255));
  g = round_int(scale * (one.color_0 >> 8 & 255) + (1 - scale) * (zero.color_0 >> 8 & 255));
  b = round_int(scale * (one.color_0 & 255) + (1 - scale) * (zero.color_0 & 255));
  return new Colour_0(r, g, b);
}

defineClass(17, 1, {17:1}, Colour, Colour_0, Colour_1);
_.color_0 = 0;
var BLACK, BLUE, CYAN, GREEN, GREY, MAGENTA, RED, WHITE, YELLOW;
var Lnz_ac_auckland_spaceinvadersx_graphics_Colour_2_classLit = createForClass(17);
function ColourableFont(colourableTiles){
  this.colourableTiles = colourableTiles;
  this.firstChar = 32;
}

defineClass(157, 1, {}, ColourableFont);
_.firstChar = 0;
var Lnz_ac_auckland_spaceinvadersx_graphics_ColourableFont_2_classLit = createForClass(157);
function ColourableImage(image, recolourType){
  this.image = image;
  this.recolourType = recolourType;
}

defineClass(153, 1, {}, ColourableImage);
_.recolourType = 0;
var Lnz_ac_auckland_spaceinvadersx_graphics_ColourableImage_2_classLit = createForClass(153);
function ColourableTiles(colourableImage, tileWidth, tileHeight){
  this.colourableImage = colourableImage;
  this.tileWidth = tileWidth;
  this.tileHeight = tileHeight;
}

defineClass(155, 1, {}, ColourableTiles);
_.tileHeight = 0;
_.tileWidth = 0;
var Lnz_ac_auckland_spaceinvadersx_graphics_ColourableTiles_2_classLit = createForClass(155);
function $getCharTile(this$static, character){
  var index_0;
  index_0 = character - this$static.firstChar;
  if (index_0 < 0 || index_0 >= this$static.charTiles.tiles.length)
    return null;
  return $getTile(this$static.charTiles, index_0);
}

function Font(charTiles, firstChar){
  this.charTiles = charTiles;
  this.firstChar = firstChar;
}

defineClass(156, 1, {}, Font);
_.firstChar = 0;
var Lnz_ac_auckland_spaceinvadersx_graphics_Font_2_classLit = createForClass(156);
function create_6(zero, one, width_0, symmetric){
  var c, color_0, h, i, pixels, scale;
  pixels = initDim(I_classLit, $intern_32, 0, width_0 * 16, 7, 1);
  c = createCanvas(width_0, 16);
  for (i = 0; i < width_0; i++) {
    scale = i / (width_0 - 1);
    if (symmetric) {
      scale *= 2;
      scale > 1 && (scale = 2 - scale);
    }
    color_0 = gradient_1(zero, one, scale);
    for (h = 0; h < 16; h++) {
      pixels[h * width_0 + i] = color_0;
    }
  }
  $setRgb(c.image, width_0, 16, pixels, width_0);
  $reference($texture(c.image));
  return new Image_0(c.image, $texture(c.image), width_0, 16);
}

function gradient_1(zero, one, scale){
  var a, b, g, r;
  scale = (1 < scale?1:scale) > 0?1 < scale?1:scale:0;
  a = 255 & round_int(scale * (one.color_0 >> 24 & 255) + (1 - scale) * (zero.color_0 >> 24 & 255));
  r = 255 & round_int(scale * (one.color_0 >> 16 & 255) + (1 - scale) * (zero.color_0 >> 16 & 255));
  g = 255 & round_int(scale * (one.color_0 >> 8 & 255) + (1 - scale) * (zero.color_0 >> 8 & 255));
  b = 255 & round_int(scale * (one.color_0 & 255) + (1 - scale) * (zero.color_0 & 255));
  return a << 24 | r << 16 | g << 8 | b;
}

function $drawImage_1(this$static, image, x_0, y_0){
  if (!image)
    return;
  $draw_3(this$static.surface, image.tile, round_int(x_0 - 0.5 * image.width_0), round_int(y_0 - 0.5 * image.height_0));
}

function $drawImage_2(this$static, image, x_0, y_0, alpha_0){
  if (!image)
    return;
  $setAlpha(this$static, alpha_0);
  $draw_3(this$static.surface, image.tile, round_int(x_0 - 0.5 * image.width_0), round_int(y_0 - 0.5 * image.height_0));
  $setAlpha_0(this$static.surface, 1);
}

function $drawImage_3(this$static, image, x_0, y_0, angle, scaleX, scaleY, alpha_0){
  if (!image)
    return;
  $setAlpha(this$static, alpha_0);
  $saveTx(this$static.surface);
  $translate(this$static.surface, x_0, y_0);
  angle != 0 && $rotate(this$static.surface, angle);
  $translate(this$static.surface, -0.5 * image.width_0 * scaleX, -0.5 * image.height_0 * scaleY);
  $scale_0(this$static.surface, scaleX, scaleY);
  $draw_3(this$static.surface, image.tile, 0, 0);
  $restoreTx(this$static.surface);
  $setAlpha_0(this$static.surface, 1);
}

function $drawRect(this$static, rectangle, colour){
  if (!rectangle)
    return;
  $setFillColor(this$static.surface, colour.color_0);
  $drawLine(this$static.surface, rectangle.xMin, rectangle.yMin, rectangle.xMax, rectangle.yMin);
  $drawLine(this$static.surface, rectangle.xMin, rectangle.yMax, rectangle.xMax, rectangle.yMax);
  $drawLine(this$static.surface, rectangle.xMin, rectangle.yMin, rectangle.xMin, rectangle.yMax);
  $drawLine(this$static.surface, rectangle.xMax, rectangle.yMin, rectangle.xMax, rectangle.yMax);
}

function $drawRect_0(this$static, rectangle, colour, alpha_0){
  $setAlpha(this$static, alpha_0);
  $drawRect(this$static, rectangle, colour);
  $setAlpha_0(this$static.surface, 1);
}

function $drawString(this$static, string, font, x_0, y_0, alignment){
  var c, charTile, charWidth, index_0;
  if (!font)
    return;
  charWidth = font.charTiles.tiles[0].width_0;
  switch (alignment) {
    case 0:
      x_0 -= ~~(string.length * charWidth / 2);
      break;
    case -1:
      x_0 -= string.length * charWidth;
  }
  y_0 -= ~~(font.charTiles.tiles[0].height_0 / 2);
  for (index_0 = 0; index_0 < string.length; index_0++) {
    c = string.charCodeAt(index_0);
    charTile = $getCharTile(font, c);
    !!charTile && $draw_3(this$static.surface, charTile.tile, x_0 + index_0 * charWidth, y_0);
  }
}

function $drawString_0(this$static, string, font, alpha_0){
  $setAlpha(this$static, alpha_0);
  $drawString(this$static, string, font, 0, 0, 0);
  $setAlpha_0(this$static.surface, 1);
}

function $fillGradient(this$static, r, g){
  if (!r)
    return;
  $draw_5(this$static.surface, g.tile, r.xMin, r.yMin, r.xMax - r.xMin, r.yMax - r.yMin, min_3(g.width_0, r.xMax - r.xMin), g.height_0);
}

function $fillGradient_0(this$static, rectangle, gradientFill, alpha_0){
  $setAlpha(this$static, alpha_0);
  $fillGradient(this$static, rectangle, gradientFill);
  $setAlpha_0(this$static.surface, 1);
}

function $fillRect_0(this$static, rectangle, colour){
  if (!rectangle)
    return;
  $setFillColor(this$static.surface, colour.color_0);
  $fillRect_2(this$static.surface, rectangle.xMin, rectangle.yMin, rectangle.xMax - rectangle.xMin, rectangle.yMax - rectangle.yMin);
}

function $fillRect_1(this$static, rectangle, colour, alpha_0){
  $setAlpha(this$static, alpha_0);
  $fillRect_0(this$static, rectangle, colour);
  $setAlpha_0(this$static.surface, 1);
}

function $setAlpha(this$static, alpha_0){
  if (alpha_0 >= 1)
    return;
  $setAlpha_0(this$static.surface, alpha_0);
}

function $setSurface(this$static, surface){
  this$static.surface = surface;
}

function Graphics(){
}

defineClass(318, 1, {}, Graphics);
var Lnz_ac_auckland_spaceinvadersx_graphics_Graphics_2_classLit = createForClass(318);
function Image_0(playnImage, tile, width_0, height){
  this.playnImage = playnImage;
  this.tile = tile;
  this.width_0 = width_0;
  this.height_0 = height;
}

function Image_1(tile, width_0, height){
  this.tile = tile;
  this.width_0 = width_0;
  this.height_0 = height;
}

defineClass(35, 1, {35:1}, Image_0, Image_1);
_.height_0 = 0;
_.width_0 = 0;
var Lnz_ac_auckland_spaceinvadersx_graphics_Image_2_classLit = createForClass(35);
function $contains_2(this$static, x_0, y_0){
  return x_0 >= this$static.xMin && x_0 <= this$static.xMax && y_0 >= this$static.yMin && y_0 <= this$static.yMax;
}

function $getHeight(this$static){
  return this$static.yMax - this$static.yMin;
}

function $getWidth(this$static){
  return this$static.xMax - this$static.xMin;
}

function $getX(this$static){
  return ~~((this$static.xMin + this$static.xMax) / 2);
}

function $getY(this$static){
  return ~~((this$static.yMin + this$static.yMax) / 2);
}

function $intersects(this$static, other){
  return this$static.xMax >= other.xMin && this$static.xMin <= other.xMax && this$static.yMax >= other.yMin && this$static.yMin <= other.yMax;
}

function $setAbsBounds(this$static, x1, y1, x2, y2){
  this$static.xMin = x1 < x2?x1:x2;
  this$static.yMin = y1 < y2?y1:y2;
  this$static.xMax = x1 > x2?x1:x2;
  this$static.yMax = y1 > y2?y1:y2;
}

function $setBounds(this$static, x_0, y_0, width_0, height){
  width_0 = ~~((width_0 < 0?-width_0:width_0) / 2);
  height = ~~((height < 0?-height:height) / 2);
  this$static.xMin = x_0 - width_0;
  this$static.yMin = y_0 - height;
  this$static.xMax = x_0 + width_0;
  this$static.yMax = y_0 + height;
}

function $setBounds_0(this$static, x_0, y_0, other){
  this$static.xMin = other.xMin + x_0;
  this$static.yMin = other.yMin + y_0;
  this$static.xMax = other.xMax + x_0;
  this$static.yMax = other.yMax + y_0;
}

function $xDist(this$static, x_0){
  if (x_0 >= this$static.xMin && x_0 <= this$static.xMax)
    return 0;
  if (x_0 < this$static.xMin)
    return this$static.xMin - x_0;
  return x_0 - this$static.xMax;
}

function $yDist(this$static, y_0){
  if (y_0 >= this$static.yMin && y_0 <= this$static.yMax)
    return 0;
  if (y_0 < this$static.yMin)
    return this$static.yMin - y_0;
  return y_0 - this$static.yMax;
}

function Rectangle(){
  $setAbsBounds(this, 0, 0, 0, 0);
}

function Rectangle_0(width_0, height){
  $setBounds(this, 0, 0, width_0, height);
}

function Rectangle_1(x_0, y_0, width_0, height){
  $setBounds(this, x_0, y_0, width_0, height);
}

function Rectangle_2(other){
  $setBounds_0(this, 0, 0, other);
}

function getAbsRectangle(x1, y1, x2, y2){
  var newRectangle;
  newRectangle = new Rectangle;
  $setAbsBounds(newRectangle, x1, y1, x2, y2);
  return newRectangle;
}

defineClass(11, 1, {11:1}, Rectangle, Rectangle_0, Rectangle_1, Rectangle_2);
_.xMax = 0;
_.xMin = 0;
_.yMax = 0;
_.yMin = 0;
var Lnz_ac_auckland_spaceinvadersx_graphics_Rectangle_2_classLit = createForClass(11);
function $getTile(this$static, index_0){
  return this$static.tiles[index_0];
}

function Tiles(tiles){
  this.tiles = tiles;
}

function Tiles_0(tiles){
  this.tiles = tiles;
}

defineClass(154, 1, {}, Tiles, Tiles_0);
var Lnz_ac_auckland_spaceinvadersx_graphics_Tiles_2_classLit = createForClass(154);
function $clinit_Toolkit(){
  $clinit_Toolkit = emptyMethod;
  map_1 = new HashMap;
  NULL_IMAGE = new Image_1(null, 0, 0);
  NULL_CI = new ColourableImage(NULL_IMAGE, 0);
  NULL_TILES = new Tiles(initDim(Lnz_ac_auckland_spaceinvadersx_graphics_Image_2_classLit, $intern_2, 35, 0, 0, 1));
  NULL_CT = new ColourableTiles(NULL_CI, 0, 0);
  NULL_FONT = new Font(NULL_TILES, 32);
  NULL_CF = new ColourableFont(NULL_CT);
}

function createCanvas(pixelWidth, pixelHeight){
  $clinit_Toolkit();
  if (canvasCreator_0)
    return $createCanvas(canvasCreator_0, pixelWidth, pixelHeight);
  return $createCanvas_0(platform_0.graphics, pixelWidth, pixelHeight);
}

function flipImage(im){
  $clinit_Toolkit();
  var c;
  if (im == NULL_IMAGE)
    return NULL_IMAGE;
  c = createCanvas(im.width_0, im.height_0);
  c.ctx.rotate(3.1415927410125732);
  $draw_1(c, im.playnImage, -im.width_0, -im.height_0);
  $reference($texture(c.image));
  return new Image_0(c.image, $texture(c.image), im.width_0, im.height_0);
}

function getColourableFont(colourableTiles){
  $clinit_Toolkit();
  if (colourableTiles == NULL_CT)
    return NULL_CF;
  return new ColourableFont(colourableTiles);
}

function getColourableImage(image, recolourType){
  $clinit_Toolkit();
  if (image == NULL_IMAGE)
    return NULL_CI;
  return new ColourableImage(image, recolourType);
}

function getColourableTiles(colourableImage, tileWidth, tileHeight){
  $clinit_Toolkit();
  if (colourableImage == NULL_CI)
    return NULL_CT;
  return new ColourableTiles(colourableImage, tileWidth, tileHeight);
}

function getFont(tiles, firstChar){
  if (tiles == NULL_TILES)
    return NULL_FONT;
  return new Font(tiles, firstChar);
}

function getTiles(image, tileWidth, tileHeight){
  $clinit_Toolkit();
  var columns, numTiles, texture, tile, tileID, tiles;
  if (image == NULL_IMAGE)
    return NULL_TILES;
  columns = ~~(image.width_0 / tileWidth);
  numTiles = columns * ~~(image.height_0 / tileHeight);
  if (numTiles == 0)
    throw new IllegalArgumentException_0('Image smaller than tile: (' + image.width_0 + ', ' + image.height_0 + ') / (' + tileWidth + ', ' + tileHeight + ')');
  tiles = initDim(Lnz_ac_auckland_spaceinvadersx_graphics_Image_2_classLit, $intern_2, 35, numTiles, 0, 1);
  texture = image.tile;
  for (tileID = 0; tileID < numTiles; tileID++) {
    tile = new Texture$1(texture, tileWidth, tileHeight, tileWidth * (tileID % columns), tileHeight * ~~(tileID / columns));
    tiles[tileID] = new Image_1(tile, tileWidth, tileHeight);
  }
  return new Tiles_0(tiles);
}

function isImagesLoaded(){
  $clinit_Toolkit();
  var image, image$iterator;
  if (map_1.size_0 == 0) {
    return false;
  }
  for (image$iterator = $iterator_0(new AbstractMap$2(map_1)); $hasNext(image$iterator.val$outerIter2);) {
    image = $next_2(image$iterator);
    if (image.state._result_0._value == null) {
      return false;
    }
  }
  return true;
}

function loadImage_0(fileName){
  $clinit_Toolkit();
  var texture;
  $hasStringValue(map_1, fileName) || $putStringValue(map_1, fileName, $getImage(platform_0.assets, fileName));
  if ($getStringValue(map_1, fileName).state._result_0._value != null) {
    texture = $texture($getStringValue(map_1, fileName));
    texture.config.managed && ++texture.refs;
    return new Image_0($getStringValue(map_1, fileName), texture, round_int(texture.displayWidth), round_int(texture.displayHeight));
  }
  return NULL_IMAGE;
}

function loaded_0(){
  $clinit_Toolkit();
  var image, image$iterator, loaded;
  loaded = 0;
  for (image$iterator = $iterator_0(new AbstractMap$2(map_1)); $hasNext(image$iterator.val$outerIter2);) {
    image = $next_2(image$iterator);
    image.state._result_0._value != null && ++loaded;
  }
  return loaded;
}

function recolourFont(colourableFont, newColour){
  $clinit_Toolkit();
  return getFont(recolourTiles_1(colourableFont.colourableTiles, newColour), colourableFont.firstChar);
}

function recolourImage(colourableImage, newColour){
  $clinit_Toolkit();
  if (colourableImage == NULL_CI)
    return NULL_IMAGE;
  return recolourImage_0(colourableImage, newColour, -1);
}

function recolourImage_0(colourableImage, newColour, recolourType){
  $clinit_Toolkit();
  var image;
  if (colourableImage == NULL_CI)
    return NULL_IMAGE;
  image = colourableImage.image;
  if (!newColour)
    return image;
  recolourType == -1 && (recolourType = colourableImage.recolourType);
  switch (recolourType) {
    case 7:
      return recolourImage_1(image, new Toolkit$RecolourAllFilter(newColour));
    case 4:
      return recolourImage_1(image, new Toolkit$RecolourPrimaryFilter(newColour, 0));
    case 2:
      return recolourImage_1(image, new Toolkit$RecolourPrimaryFilter(newColour, 1));
    case 1:
      return recolourImage_1(image, new Toolkit$RecolourPrimaryFilter(newColour, 2));
    case 0:
      return recolourImage_1(image, new Toolkit$ShadowFilter(newColour));
  }
  return image;
}

function recolourImage_1(im, filter){
  var c, i, pixels;
  if (im == NULL_IMAGE)
    return NULL_IMAGE;
  pixels = initDim(I_classLit, $intern_32, 0, im.width_0 * im.height_0, 7, 1);
  $getRgb(im.playnImage, im.width_0, im.height_0, pixels, im.width_0);
  for (i = 0; i < pixels.length; i++) {
    pixels[i] = filter.filter(pixels[i]);
  }
  c = createCanvas(im.width_0, im.height_0);
  $setRgb(c.image, im.width_0, im.height_0, pixels, im.width_0);
  $reference($texture(c.image));
  return new Image_0(c.image, $texture(c.image), im.width_0, im.height_0);
}

function recolourTiles_0(colourableTiles, newColour){
  $clinit_Toolkit();
  return getTiles(recolourImage_0(colourableTiles.colourableImage, newColour, -1), colourableTiles.tileWidth, colourableTiles.tileHeight);
}

function recolourTiles_1(colourableTiles, newColour){
  return getTiles(recolourImage_0(colourableTiles.colourableImage, newColour, -1), colourableTiles.tileWidth, colourableTiles.tileHeight);
}

function scaleImage(image){
  $clinit_Toolkit();
  return scaleImage_0(image, round_int(image.width_0 * 0.5 + 0.5), round_int(image.height_0 * 0.5 + 0.5));
}

function scaleImage_0(image, width_0, height){
  $clinit_Toolkit();
  var c;
  if (image == NULL_IMAGE)
    return NULL_IMAGE;
  c = createCanvas(width_0, height);
  $draw_2(c, image.playnImage, 0, 0, width_0, height);
  $reference($texture(c.image));
  return new Image_0(c.image, $texture(c.image), width_0, height);
}

var NULL_CF, NULL_CI, NULL_CT, NULL_FONT, NULL_IMAGE, NULL_TILES, canvasCreator_0, map_1, platform_0 = null;
function Toolkit$RecolourAllFilter(newColour){
  this.newRed = newColour.color_0 >> 16 & 255;
  this.newGreen = newColour.color_0 >> 8 & 255;
  this.newBlue = newColour.color_0 & 255;
}

defineClass(198, 1, {}, Toolkit$RecolourAllFilter);
_.filter = function filter_0(rgb){
  var blue, brightness, green, red, rgbSum;
  rgbSum = (rgb & $intern_42) >> 16;
  rgbSum += (rgb & $intern_43) >> 8;
  rgbSum += rgb & 255;
  brightness = rgbSum / 255 / 3;
  red = round_int(this.newRed * brightness);
  green = round_int(this.newGreen * brightness);
  blue = round_int(this.newBlue * brightness);
  return rgb & $intern_44 | red << 16 | green << 8 | blue;
}
;
_.newBlue = 0;
_.newGreen = 0;
_.newRed = 0;
var Lnz_ac_auckland_spaceinvadersx_graphics_Toolkit$RecolourAllFilter_2_classLit = createForClass(198);
function Toolkit$RecolourPrimaryFilter(newColour, primary){
  this.primaries = initDim(I_classLit, $intern_32, 0, 3, 7, 1);
  this.newRed = newColour.color_0 >> 16 & 255;
  this.newGreen = newColour.color_0 >> 8 & 255;
  this.newBlue = newColour.color_0 & 255;
  this.p = primary;
  switch (this.p) {
    case 0:
      this.a = 1;
      this.b = 2;
      break;
    case 1:
      this.a = 0;
      this.b = 2;
      break;
    case 2:
      this.a = 0;
      this.b = 1;
  }
}

defineClass(116, 1, {}, Toolkit$RecolourPrimaryFilter);
_.filter = function filter_1(rgb){
  var blue, brightness, dullness, green, red;
  this.primaries[0] = (rgb & $intern_42) >> 16;
  this.primaries[1] = (rgb & $intern_43) >> 8;
  this.primaries[2] = rgb & 255;
  if (this.primaries[this.p] <= this.primaries[this.a] || this.primaries[this.p] <= this.primaries[this.b])
    return rgb;
  brightness = this.primaries[this.p] / 255;
  dullness = 0.5 * (this.primaries[this.a] + this.primaries[this.b]) / this.primaries[this.p];
  red = round_int((255 * dullness + (1 - dullness) * this.newRed) * brightness);
  green = round_int((255 * dullness + (1 - dullness) * this.newGreen) * brightness);
  blue = round_int((255 * dullness + (1 - dullness) * this.newBlue) * brightness);
  return rgb & $intern_44 | red << 16 | green << 8 | blue;
}
;
_.a = 0;
_.b = 0;
_.newBlue = 0;
_.newGreen = 0;
_.newRed = 0;
_.p = 0;
var Lnz_ac_auckland_spaceinvadersx_graphics_Toolkit$RecolourPrimaryFilter_2_classLit = createForClass(116);
function Toolkit$ShadowFilter(newColour){
  this.rgbNew = (newColour.color_0 >> 16 & 255) << 16 | (newColour.color_0 >> 8 & 255) << 8 | newColour.color_0 & 255;
}

defineClass(199, 1, {}, Toolkit$ShadowFilter);
_.filter = function filter_2(rgb){
  return rgb & $intern_44 | this.rgbNew;
}
;
_.rgbNew = 0;
var Lnz_ac_auckland_spaceinvadersx_graphics_Toolkit$ShadowFilter_2_classLit = createForClass(199);
function $createCanvas(this$static, pixelWidth, pixelHeight){
  var elem;
  elem = $doc.createElement('canvas');
  $setWidth(elem, pixelWidth);
  $setHeight(elem, pixelHeight);
  return new HtmlCanvas(new HtmlImage(this$static.graphics, ($clinit_Scale() , ONE), elem));
}

function SpaceInvadersXHtml$HtmlCanvasCreator(graphics){
  this.graphics = graphics;
}

defineClass(196, 1, {}, SpaceInvadersXHtml$HtmlCanvasCreator);
var Lnz_ac_auckland_spaceinvadersx_html_SpaceInvadersXHtml$HtmlCanvasCreator_2_classLit = createForClass(196);
function SpaceInvadersXHtml$HtmlFullScreener(){
}

defineClass(197, 1, {}, SpaceInvadersXHtml$HtmlFullScreener);
var Lnz_ac_auckland_spaceinvadersx_html_SpaceInvadersXHtml$HtmlFullScreener_2_classLit = createForClass(197);
function draw_17(g){
  if (current_0 == 50) {
    $fillRect_0(g, ($clinit_SpaceInvadersX() , SCREEN), ($clinit_Colour() , BLACK));
  }
   else {
    $drawImage_1(g, ($clinit_Resources() , twinkle), -200, height_0 - 300);
    $drawImage_1(g, twinkle, 200, height_0 - 300);
    $drawImage_1(g, twinkle, -200, height_0);
    $drawImage_1(g, twinkle, 200, height_0);
    $drawImage_1(g, twinkle, -200, height_0 + 300);
    $drawImage_1(g, twinkle, 200, height_0 + 300);
    current_0 < 50?$drawImage_1(g, stars, 0, 0):$drawImage_1(g, nebula, 0, 0);
    current_0 > 0 && current_0 < 100 && $fillRect_1(g, ($clinit_SpaceInvadersX() , SCREEN), ($clinit_Colour() , BLACK), (50 - abs_0(current_0 - 50)) / 50);
  }
}

function fadeTo(newDesired){
  desired = newDesired;
}

var current_0 = 50, desired = 50, height_0 = 0;
function $mouseClick_0(this$static, buttonCode, x_0, y_0){
  $contains_2(this$static.bounds, x_0, y_0) && this$static.mouseClickIn(buttonCode, x_0, y_0);
}

function $tick(this$static, mouseX, mouseY){
  $contains_2(this$static.bounds, mouseX, mouseY)?this$static.tickIn(mouseX, mouseY):this$static.tickOut();
}

function Widget(bounds){
  this.bounds = bounds;
}

function drawLeftArrow(g, x_0, y_0){
  var offset, ticker;
  ticker = ($clinit_SpaceInvadersX() , ticks % 10);
  offset = 2 * ticker;
  $drawImage_2(g, ($clinit_Resources() , arrowLeft), x_0 + 60 - offset, y_0, ticker / 10);
  $drawImage_1(g, arrowLeft, x_0 + 40 - offset, y_0);
  $drawImage_2(g, arrowLeft, x_0 + 20 - offset, y_0, (10 - ticker) / 10);
}

function drawRightArrow(g, x_0, y_0){
  var offset, ticker;
  ticker = ($clinit_SpaceInvadersX() , ticks % 10);
  offset = 2 * ticker;
  $drawImage_2(g, ($clinit_Resources() , arrowRight), x_0 - 60 + offset, y_0, ticker / 10);
  $drawImage_1(g, arrowRight, x_0 - 40 + offset, y_0);
  $drawImage_2(g, arrowRight, x_0 - 20 + offset, y_0, (10 - ticker) / 10);
}

defineClass(14, 1, $intern_45);
_.draw = function draw_18(g){
}
;
_.mouseClick = function mouseClick_0(buttonCode, x_0, y_0){
  $mouseClick_0(this, buttonCode, x_0, y_0);
}
;
_.mouseClickIn = function mouseClickIn(buttonCode, x_0, y_0){
}
;
_.tick_0 = function tick_26(mouseX, mouseY){
  $tick(this, mouseX, mouseY);
}
;
_.tickIn = function tickIn(mouseX, mouseY){
}
;
_.tickOut = function tickOut(){
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_Widget_2_classLit = createForClass(14);
function $draw(this$static, g){
  var font;
  font = this$static.highlit?this$static.highlitFont:this$static.normalFont;
  $drawString(g, this$static.text_0, font, $getX(this$static.bounds), $getY(this$static.bounds), 0);
  if (this$static.highlit) {
    drawRightArrow(g, this$static.bounds.xMin, $getY(this$static.bounds));
    drawLeftArrow(g, this$static.bounds.xMax, $getY(this$static.bounds));
  }
}

function Button(text_0, x_0, y_0){
  Button_0.call(this, text_0, x_0, y_0, ($clinit_Resources() , xenonGrey), xenonWhite);
}

function Button_0(text_0, x_0, y_0, normalFont, highlitFont){
  Button_1.call(this, text_0, new Rectangle_1(x_0, y_0, normalFont.charTiles.tiles[0].width_0 * text_0.length, normalFont.charTiles.tiles[0].height_0), normalFont, highlitFont);
}

function Button_1(text_0, bounds, normalFont, highlitFont){
  Widget.call(this, bounds);
  this.text_0 = text_0;
  this.normalFont = normalFont;
  this.highlitFont = highlitFont;
}

defineClass(34, 14, $intern_45);
_.draw = function draw_19(g){
  $draw(this, g);
}
;
_.tickIn = function tickIn_0(mouseX, mouseY){
  this.highlit = true;
}
;
_.tickOut = function tickOut_0(){
  this.highlit = false;
}
;
_.highlit = false;
var Lnz_ac_auckland_spaceinvadersx_menu_Button_2_classLit = createForClass(34);
function Selecter(texts){
  Selecter_0.call(this, texts, 180, ($clinit_Resources() , xenonGrey), xenonWhite);
}

function Selecter_0(texts, y_0, normalFont, highlitFont){
  var i;
  Button_0.call(this, texts[0], 0, y_0, normalFont, highlitFont);
  this.texts = texts;
  this.numValues = texts.length;
  this.textBounds = initDim(Lnz_ac_auckland_spaceinvadersx_graphics_Rectangle_2_classLit, $intern_2, 11, this.numValues, 0, 1);
  for (i = 0; i < this.numValues; i++)
    this.textBounds[i] = new Rectangle_1(0, y_0, normalFont.charTiles.tiles[0].width_0 * texts[i].length, normalFont.charTiles.tiles[0].height_0);
  this.readValue();
  this.text_0 = this.texts[this.value_0];
  this.bounds = this.textBounds[this.value_0];
}

function Selecter_1(texts, bounds){
  Selecter_2.call(this, texts, bounds, ($clinit_Resources() , xenonGrey), xenonWhite);
}

function Selecter_2(texts, bounds, normalFont, highlitFont){
  var i;
  Button_1.call(this, texts[0], bounds, normalFont, highlitFont);
  this.texts = texts;
  this.numValues = texts.length;
  this.textBounds = initDim(Lnz_ac_auckland_spaceinvadersx_graphics_Rectangle_2_classLit, $intern_2, 11, this.numValues, 0, 1);
  for (i = 0; i < this.numValues; i++)
    this.textBounds[i] = bounds;
  this.readValue();
  this.text_0 = this.texts[this.value_0];
  this.bounds = this.textBounds[this.value_0];
}

defineClass(81, 34, $intern_45);
_.applyValue = function applyValue(){
}
;
_.mouseClickIn = function mouseClickIn_0(buttonCode, x_0, y_0){
  this.value_0 = (this.value_0 + 1) % this.numValues;
  this.applyValue();
  this.text_0 = this.texts[this.value_0];
  this.bounds = this.textBounds[this.value_0];
}
;
_.readValue = function readValue(){
}
;
_.numValues = 0;
_.value_0 = 0;
var Lnz_ac_auckland_spaceinvadersx_menu_Selecter_2_classLit = createForClass(81);
function BoolSelecter(text_0, y_0){
  BoolSelecter_0.call(this, text_0 + ' Off', text_0 + ' On', y_0, ($clinit_Resources() , xenonGrey), xenonWhite);
}

function BoolSelecter_0(falseText, trueText, y_0, normalFont, highlitFont){
  Selecter_0.call(this, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, [falseText, trueText]), y_0, normalFont, highlitFont);
}

defineClass(107, 81, $intern_45);
_.applyBool = function applyBool(){
}
;
_.applyValue = function applyValue_0(){
  this.bool = this.value_0 == 1;
  this.applyBool();
}
;
_.readBool = function readBool(){
}
;
_.readValue = function readValue_0(){
  this.readBool();
  this.value_0 = this.bool?1:0;
}
;
_.bool = false;
var Lnz_ac_auckland_spaceinvadersx_menu_BoolSelecter_2_classLit = createForClass(107);
function $clinit_ColourSelecter(){
  $clinit_ColourSelecter = emptyMethod;
  $clinit_Colour();
}

function $setColour(this$static, colour){
  this$static.colour = colour;
  this$static.applyColour();
}

function $setHue(this$static, hue){
  $setHue_1(this$static.shadeSlider, hue);
}

function ColourSelecter(x_0, defaultHue){
  Widget.call(this, new Rectangle);
  this.colour = defaultHue;
  this.hueSlider = new HueSlider(this, x_0);
  this.shadeSlider = new ShadeSlider(this, x_0);
  $setHue_0(this.hueSlider, defaultHue);
}

defineClass(177, 14, $intern_45);
_.applyColour = function applyColour(){
}
;
_.draw = function draw_20(g){
  if (!!this.hueSlider && !!this.shadeSlider) {
    $draw_0(this.hueSlider, g);
    $draw_0(this.shadeSlider, g);
  }
}
;
_.mouseClick = function mouseClick_1(buttonCode, x_0, y_0){
  if (!!this.hueSlider && !!this.shadeSlider) {
    $mouseClick_0(this.hueSlider, buttonCode, x_0, y_0);
    $mouseClick_0(this.shadeSlider, buttonCode, x_0, y_0);
  }
}
;
_.tick_0 = function tick_27(mouseX, mouseY){
  if (!!this.hueSlider && !!this.shadeSlider) {
    $tick(this.hueSlider, mouseX, mouseY);
    $tick(this.shadeSlider, mouseX, mouseY);
  }
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_ColourSelecter_2_classLit = createForClass(177);
function $clinit_Slider(){
  $clinit_Slider = emptyMethod;
  HIGHLIT_COLOUR = ($clinit_Colour() , WHITE);
  NORMAL_COLOUR = GREY;
  HIGHLIT_COLOUR0 = BLUE;
  HIGHLIT_COLOUR1 = WHITE;
  NORMAL_COLOUR0 = new Colour(136);
  NORMAL_COLOUR1 = GREY;
}

function Slider(text_0, y_0){
  Slider_0.call(this, text_0, 0, y_0, 200, 10, ($clinit_Resources() , xenonGrey), xenonWhite);
}

function Slider_0(text_0, x_0, y_0, width_0, stepValue, normalFont, highlitFont){
  $clinit_Slider();
  Widget.call(this, new Rectangle_1(x_0, y_0, width_0 + 100, normalFont.charTiles.tiles[0].height_0 * 2 + 8));
  this.text_0 = text_0;
  this.width_0 = width_0;
  this.height_0 = normalFont.charTiles.tiles[0].height_0;
  this.stepValue = stepValue;
  this.normalFont = normalFont;
  this.highlitFont = highlitFont;
  this.readValue();
  this.borderBounds = new Rectangle_1(x_0, y_0 + ~~(this.height_0 / 2), width_0 + 4, this.height_0 + 4);
  this.sliderFill = getAbsRectangle(this.borderBounds.xMin + 2, this.borderBounds.yMin + 2, this.borderBounds.xMax - 2, this.borderBounds.yMax - 2);
  if (!normalGradient || !highlitGradient) {
    normalGradient = ($clinit_Toolkit() , create_6(NORMAL_COLOUR0, NORMAL_COLOUR1, width_0, false));
    highlitGradient = create_6(HIGHLIT_COLOUR0, HIGHLIT_COLOUR1, width_0, false);
  }
  this.updateSliderFill();
}

defineClass(108, 14, $intern_45);
_.applyValue = function applyValue_1(){
}
;
_.draw = function draw_21(g){
  var borderColour, font, gradient;
  font = this.highlit != 0?this.highlitFont:this.normalFont;
  borderColour = this.highlit != 0?HIGHLIT_COLOUR:NORMAL_COLOUR;
  gradient = this.highlit != 0?highlitGradient:normalGradient;
  $drawString(g, this.text_0, font, $getX(this.bounds), $getY(this.bounds) - ~~(this.height_0 / 2) - 4, 0);
  $fillGradient_0(g, this.sliderFill, gradient, 0.5);
  $drawRect(g, this.borderBounds, borderColour);
  if (this.highlit == 1) {
    drawLeftArrow(g, this.bounds.xMin - 10, $getY(this.bounds));
  }
   else if (this.highlit == 2) {
    drawRightArrow(g, this.bounds.xMax + 10, $getY(this.bounds));
  }
   else if (this.highlit == 3) {
    drawRightArrow(g, this.bounds.xMin + 40, $getY(this.bounds));
    drawLeftArrow(g, this.bounds.xMax - 40, $getY(this.bounds));
  }
}
;
_.mouseClickIn = function mouseClickIn_1(buttonCode, x_0, y_0){
  $contains_2(this.borderBounds, x_0, y_0)?(this.value_0 = x_0 - $getX(this.bounds) + ~~(this.width_0 / 2)):x_0 < $getX(this.bounds)?(this.value_0 -= this.stepValue):(this.value_0 += this.stepValue);
  this.value_0 = min_3(this.width_0, max_2(0, this.value_0));
  this.updateSliderFill();
  this.applyValue();
}
;
_.readValue = function readValue_1(){
}
;
_.tickIn = function tickIn_1(mouseX, mouseY){
  this.highlit = $contains_2(this.borderBounds, mouseX, mouseY)?3:mouseX < $getX(this.bounds)?1:2;
}
;
_.tickOut = function tickOut_1(){
  this.highlit = 0;
}
;
_.updateSliderFill = function updateSliderFill(){
  $setAbsBounds(this.sliderFill, this.sliderFill.xMin, this.sliderFill.yMin, this.sliderFill.xMin + this.value_0, this.sliderFill.yMax);
}
;
_.height_0 = 0;
_.highlit = 0;
_.stepValue = 0;
_.value_0 = 0;
_.width_0 = 0;
var HIGHLIT_COLOUR, HIGHLIT_COLOUR0, HIGHLIT_COLOUR1, NORMAL_COLOUR, NORMAL_COLOUR0, NORMAL_COLOUR1, highlitGradient, normalGradient;
var Lnz_ac_auckland_spaceinvadersx_menu_Slider_2_classLit = createForClass(108);
function $clinit_ColourSlider(){
  $clinit_ColourSlider = emptyMethod;
  $clinit_Slider();
  HIGHLIT_PULSE0 = ($clinit_Colour() , BLACK);
  HIGHLIT_PULSE1 = WHITE;
  NORMAL_PULSE0 = new Colour(5592405);
  NORMAL_PULSE1 = new Colour(11184810);
  highlitPulse = HIGHLIT_PULSE0;
  normalPulse = NORMAL_PULSE0;
}

function $draw_0(this$static, g){
  var barColour, borderColour, font;
  font = this$static.highlit != 0?this$static.highlitFont:this$static.normalFont;
  borderColour = this$static.highlit != 0?($clinit_Slider() , HIGHLIT_COLOUR):($clinit_Slider() , NORMAL_COLOUR);
  barColour = this$static.highlit != 0?highlitPulse:normalPulse;
  $drawString(g, this$static.text_0, font, $getX(this$static.bounds), $getY(this$static.bounds) - ~~(this$static.height_0 / 2) - 4, 0);
  this$static.drawColourBar(g);
  $drawRect(g, this$static.borderBounds, borderColour);
  $drawRect(g, this$static.sliderBar, barColour);
  if (this$static.highlit == 1) {
    drawLeftArrow(g, this$static.bounds.xMin - 10, $getY(this$static.bounds));
  }
   else if (this$static.highlit == 2) {
    drawRightArrow(g, this$static.bounds.xMax + 10, $getY(this$static.bounds));
  }
   else if (this$static.highlit == 3) {
    drawRightArrow(g, this$static.bounds.xMin + 40, $getY(this$static.bounds));
    drawLeftArrow(g, this$static.bounds.xMax - 40, $getY(this$static.bounds));
  }
}

function $updateSliderFill(this$static){
  var sliderX, sliderXmax, sliderXmin;
  if (!this$static.sliderBar)
    return;
  sliderX = this$static.sliderFill.xMin + this$static.value_0;
  sliderXmin = max_2(this$static.sliderFill.xMin, sliderX - 5);
  sliderXmax = min_3(this$static.sliderFill.xMax, sliderX + 5);
  $setAbsBounds(this$static.sliderBar, sliderXmin, this$static.sliderFill.yMin, sliderXmax, this$static.sliderFill.yMax);
}

function ColourSlider(parent_0, text_0, x_0, y_0, normalFont, highlitFont){
  $clinit_ColourSlider();
  Slider_0.call(this, text_0, x_0, y_0, 256, 15, normalFont, highlitFont);
  this.parent_0 = parent_0;
  this.sliderBar = new Rectangle;
  $updateSliderFill(this);
}

defineClass(184, 108, $intern_45);
_.draw = function draw_22(g){
  $draw_0(this, g);
}
;
_.readValue = function readValue_2(){
  this.value_0 = 0;
}
;
_.updateSliderFill = function updateSliderFill_0(){
  $updateSliderFill(this);
}
;
var HIGHLIT_PULSE0, HIGHLIT_PULSE1, NORMAL_PULSE0, NORMAL_PULSE1, highlitPulse, normalPulse;
var Lnz_ac_auckland_spaceinvadersx_menu_ColourSlider_2_classLit = createForClass(184);
function ControlMenu(){
  MenuScreen_0.call(this, createControlWidgets());
}

function createControlWidgets(){
  var controlID, controlID0, controlWidgets, playerID, playerID0, widgetID;
  controlWidgets = initDim(Lnz_ac_auckland_spaceinvadersx_menu_Widget_2_classLit, $intern_2, 14, 22, 0, 1);
  widgetID = 0;
  for (playerID0 = 0; playerID0 < 2; playerID0++)
    controlWidgets[widgetID++] = new Label(($clinit_Controls() , PLAYER_NAMES)[playerID0], (4 * playerID0 - 1) * 76, -40);
  for (controlID0 = 0; controlID0 < 6; controlID0++)
    controlWidgets[widgetID++] = new Label(($clinit_Controls() , PLAYER_CONTROL_NAMES)[controlID0], -304, -60 + (2 * controlID0 + 3) * 20);
  for (playerID = 0; playerID < 2; playerID++)
    for (controlID = 0; controlID < 6; controlID++)
      controlWidgets[widgetID++] = new ControlWidget(playerID, controlID, getAbsRectangle((4 * playerID - 3) * 76, -60 + (2 * controlID + 2) * 20, (4 * playerID + 1) * 76, -60 + (2 * controlID + 4) * 20));
  controlWidgets[widgetID++] = new ControlMenu$1;
  controlWidgets[widgetID++] = new ControlMenu$2;
  return controlWidgets;
}

defineClass(367, 29, {}, ControlMenu);
_.tick_0 = function tick_28(mouseX, mouseY){
  $tickWidgets(this, mouseX, mouseY);
  $clinit_ControlWidget();
  assignPulse = gradient_0(PULSE0, PULSE1, 0.5 + 0.5 * sin_0(($clinit_SpaceInvadersX() , ticks * 0.1)));
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_ControlMenu_2_classLit = createForClass(367);
function ControlMenu$1(){
  Button.call(this, 'Reset Controls', -152, 280);
}

defineClass(368, 34, $intern_45, ControlMenu$1);
_.mouseClickIn = function mouseClickIn_2(buttonCode, x_0, y_0){
  resetKeys();
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_ControlMenu$1_2_classLit = createForClass(368);
function ControlMenu$2(){
  Button.call(this, 'Back', 152, 280);
}

defineClass(369, 34, $intern_45, ControlMenu$2);
_.mouseClickIn = function mouseClickIn_3(buttonCode, x_0, y_0){
  $clinit_Controls();
  waitingForKeyAssign = false;
  popMenuScreen();
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_ControlMenu$2_2_classLit = createForClass(369);
function $clinit_ControlWidget(){
  $clinit_ControlWidget = emptyMethod;
  PULSE0 = ($clinit_Colour() , BLUE);
  PULSE1 = CYAN;
  assignPulse = PULSE0;
}

function ControlWidget(playerID, controlID, bounds){
  $clinit_ControlWidget();
  ControlWidget_0.call(this, playerID, controlID, bounds, ($clinit_Resources() , xenonWhite));
}

function ControlWidget_0(playerID, controlID, bounds, font){
  Widget.call(this, bounds);
  this.playerID = playerID;
  this.controlID = controlID;
  this.font = font;
  this.highlit = false;
}

defineClass(183, 14, $intern_45, ControlWidget);
_.draw = function draw_23(g){
  var key, text_0;
  this.highlit && $drawRect(g, this.bounds, PULSE0);
  key = getKey_3(this.playerID, this.controlID);
  if (key == ($clinit_Controls() , UNASSIGNED)) {
    text_0 = 'Unassigned';
  }
   else if (key == WAITING_FOR_ASSIGN) {
    text_0 = 'Press a key:';
    $drawRect(g, this.bounds, assignPulse);
  }
   else {
    text_0 = key.name_0 != null?key.name_0:'' + key.ordinal;
  }
  $drawString(g, text_0, this.font, $getX(this.bounds), $getY(this.bounds), 0);
}
;
_.mouseClickIn = function mouseClickIn_4(buttonCode, x_0, y_0){
  assignNextKey(this.playerID, this.controlID);
}
;
_.tickIn = function tickIn_2(mouseX, mouseY){
  this.highlit = true;
}
;
_.tickOut = function tickOut_2(){
  this.highlit = false;
}
;
_.controlID = 0;
_.highlit = false;
_.playerID = 0;
var PULSE0, PULSE1, assignPulse;
var Lnz_ac_auckland_spaceinvadersx_menu_ControlWidget_2_classLit = createForClass(183);
function $clinit_CreditsScreen(){
  $clinit_CreditsScreen = emptyMethod;
  CREDITS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['=== Graphics ===', '', 'Thanks to the creators of:', "SWIV, Unreal, Star Wars, Star Trek, Abe's Oddysee", 'and various others', '', '', '=== Sound ===', '', 'Thanks to the creators of:', 'SWIV and Unreal', '', '', '=== Music ===', '', '** SWIV_decimation.mod **', 'Title track of "SWIV"', 'Andrew Barnabas, Storm', 'Released for Amiga 1991', '', '** Stardust.mod **', 'Main track of "Stardust"', 'RIB, Bloodhouse', 'Released for Amiga 1993', '', '** Blade_Raver.mod **', '"Blade Raver"', 'Bionic Blade, 1992', '', '** Assassin.mod **', 'Title track of "Assassin"', 'Allister Brimble, Psionic Systems', 'Released for Amiga 1992', '', '** Xpedition.mod **', 'Main track of "Xpedition"', 'GOBI, for Amiga', '', '** SWIV_Mellow.mod **', 'Highscore track of "SWIV"', 'Andrew Barnabas, Storm', 'Released for Amiga 1991', '', '** SD_GameOver.mod **', 'Gameover track of "Stardust"', 'RIB, Bloodhouse', 'Released for Amiga 1993', '', '', '=== Development ===', 'Programmer: aols010', '', '** Special Thanks To **', 'My family', 'UoA SOFTENG 2004-2007', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '\x7F aols010 2007']);
}

function CreditsScreen(){
  $clinit_CreditsScreen();
  MenuScreen.call(this);
}

defineClass(363, 29, {}, CreditsScreen);
_.backgroundType = function backgroundType_1(){
  return 100;
}
;
_.draw = function draw_24(g){
  var i, logoY, y_0;
  y_0 = this.startY;
  for (i = 0; i < CREDITS.length; i++) {
    y_0 > -320 && !!CREDITS[i].length && $drawString(g, CREDITS[i], ($clinit_Resources() , xenonWhite), 0, y_0, 0);
    y_0 += 32;
    if (y_0 > 320)
      break;
  }
  logoY = this.startY + 2080;
  logoY > -420 && logoY < 420 && draw_33(g, logoY);
}
;
_.enter = function enter_1(){
  this.startY = 320;
}
;
_.tick_0 = function tick_29(mouseX, mouseY){
  this.startY -= 2;
  this.startY + CREDITS.length * 32 < -320 && popMenuScreen();
}
;
_.startY = 0;
var CREDITS;
var Lnz_ac_auckland_spaceinvadersx_menu_CreditsScreen_2_classLit = createForClass(363);
function $setSuccess(this$static, success){
  this$static.success = success;
  message_0 = success?'Congratulations!':'Game Over';
}

function EndGameScreen(){
  MenuScreen.call(this);
}

defineClass(366, 29, {}, EndGameScreen);
_.draw = function draw_25(g){
  var alpha_0;
  if (fadeTicker < 50) {
    alpha_0 = fadeTicker / 50;
    $fillRect_1(g, ($clinit_SpaceInvadersX() , SCREEN), ($clinit_Colour() , BLACK), alpha_0);
    $drawString_0(g, message_0, ($clinit_Resources() , xenonWhite), alpha_0);
  }
   else {
    $fillRect_0(g, ($clinit_SpaceInvadersX() , SCREEN), ($clinit_Colour() , BLACK));
    fadeTicker < 150?$drawString(g, message_0, ($clinit_Resources() , xenonWhite), 0, 0, 0):fadeTicker < 200 && $drawString_0(g, message_0, ($clinit_Resources() , xenonWhite), (200 - fadeTicker) / 50);
  }
}
;
_.enter = function enter_2(){
  fadeTicker = 0;
  this.success?fadeToTrack(($clinit_Resources() , gameWonTrack)):fadeToTrack(($clinit_Resources() , gameOverTrack));
}
;
_.tick_0 = function tick_30(mouseX, mouseY){
  ++fadeTicker;
  if (fadeTicker == 50) {
    $setPlayers(enterNameScreen, ($clinit_Game() , players_0));
    clearAll();
    gameState_0 = 0;
  }
  if (fadeTicker == 225) {
    desired = 50;
    current_0 = 50;
    this.success && queueMenuScreen(creditsScreen);
    queueMenuScreen(enterNameScreen);
    queueMenuScreen(highscoreScreen);
    queueMenuScreen(introScreen);
    popMenuScreen();
  }
}
;
_.success = false;
var fadeTicker = 0, message_0;
var Lnz_ac_auckland_spaceinvadersx_menu_EndGameScreen_2_classLit = createForClass(366);
function $nextShip(this$static){
  var startPos;
  if ($hasNext_1(this$static.iterator)) {
    this$static.currentShip = $next_3(this$static.iterator);
    startPos = this$static.currentShip.startPos;
    this$static.playerDescription = startPos == 2?'Solo Player':($clinit_Controls() , PLAYER_NAMES)[startPos];
    this$static.score = this$static.currentShip.score;
    this$static.scoreString = 'Score: ' + this$static.score;
    this$static.playerName = '';
  }
   else {
    $sortHighscores(highscoreScreen);
    $clear(this$static.players);
    popMenuScreen();
  }
}

function $setPlayers(this$static, players){
  $clear(this$static.players);
  $addAll(this$static.players, players);
}

function EnterNameScreen(){
  MenuScreen.call(this);
  this.players = new IterateList;
}

defineClass(365, 29, {}, EnterNameScreen);
_.back_0 = function back_2(){
}
;
_.backgroundType = function backgroundType_2(){
  return 100;
}
;
_.draw = function draw_26(g){
  var cursorName;
  $drawString(g, this.playerDescription, ($clinit_Resources() , xenonWhite), 0, -150, 0);
  this.currentShip.drawIcon(g, 0, -50);
  $drawString(g, this.scoreString, xenonWhite, 0, 25, 0);
  $drawString(g, 'Enter your name:', xenonWhite, 0, 100, 0);
  cursorName = this.playerName + ($clinit_SpaceInvadersX() , ~~(ticks / 10) % 2 == 0?' ':'_');
  $drawString(g, cursorName, xenonWhite, 0, 125, 0);
}
;
_.enter = function enter_3(){
  this.iterator = $iterator_1(this.players);
  $nextShip(this);
}
;
_.typeChar = function typeChar_0(character){
  if (character == 10) {
    if ($trim(this.playerName).length > 0) {
      $add_7(highscoreScreen, $trim(this.playerName), this.score);
      $nextShip(this);
    }
  }
   else if (character == 8)
    this.playerName = this.playerName.length > 1?__substr(this.playerName, 0, this.playerName.length - 1):'';
  else if (character >= 32 && character <= 126 && this.playerName.length < 20 && (character > 32 || this.playerName.length > 0))
    this.playerName += charToString(character);
  else 
    throw new IllegalArgumentException_0('' + character);
}
;
_.score = 0;
var Lnz_ac_auckland_spaceinvadersx_menu_EnterNameScreen_2_classLit = createForClass(365);
function FadeWaitScreen(){
  MenuScreen.call(this);
}

defineClass(362, 29, {}, FadeWaitScreen);
_.back_0 = function back_3(){
  current_0 = desired;
  $clinit_SpaceInvadersX();
  currentScreen = $getFirst(menuStack);
  currentScreen.enter();
}
;
_.draw = function draw_27(g){
}
;
_.mouseClick = function mouseClick_2(buttonCode, x_0, y_0){
  current_0 = desired;
  $clinit_SpaceInvadersX();
  currentScreen = $getFirst(menuStack);
  currentScreen.enter();
}
;
_.tick_0 = function tick_31(mouseX, mouseY){
  current_0 == desired && ($clinit_SpaceInvadersX() , $clinit_SpaceInvadersX() , currentScreen = $getFirst(menuStack) , currentScreen.enter());
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_FadeWaitScreen_2_classLit = createForClass(362);
function $clinit_GlowButton(){
  $clinit_GlowButton = emptyMethod;
  GLOW_COLOUR = ($clinit_Colour() , WHITE);
}

function GlowButton(normalFont, highlitFont){
  GlowButton_0.call(this, new Rectangle_1(0, 240, normalFont.charTiles.tiles[0].width_0 * 5 + 30, normalFont.charTiles.tiles[0].height_0 + 30), normalFont, highlitFont);
}

function GlowButton_0(bounds, normalFont, highlitFont){
  Button_1.call(this, 'START', bounds, normalFont, highlitFont);
  this.glowRect = new Rectangle_2(bounds);
}

defineClass(138, 34, $intern_45);
_.draw = function draw_28(g){
  var font, offset, ticker;
  $draw(this, g);
  font = this.highlit?this.highlitFont:this.normalFont;
  $drawString(g, this.text_0, font, $getX(this.bounds), $getY(this.bounds), 0);
  if (this.highlit) {
    ticker = ($clinit_SpaceInvadersX() , ticks % 10);
    offset = 2 * ticker;
    $setBounds(this.glowRect, $getX(this.bounds), $getY(this.bounds), $getWidth(this.bounds) + 30 - offset, $getHeight(this.bounds) + 30 - offset);
    $drawRect_0(g, this.glowRect, GLOW_COLOUR, ticker / 10);
    $setBounds(this.glowRect, $getX(this.bounds), $getY(this.bounds), $getWidth(this.bounds) + 10 - offset, $getHeight(this.bounds) + 10 - offset);
    $drawRect(g, this.glowRect, GLOW_COLOUR);
    $setBounds(this.glowRect, $getX(this.bounds), $getY(this.bounds), $getWidth(this.bounds) - 10 - offset, $getHeight(this.bounds) - 10 - offset);
    $drawRect_0(g, this.glowRect, GLOW_COLOUR, (10 - ticker) / 10);
  }
   else {
    $drawRect(g, this.bounds, GLOW_COLOUR);
  }
}
;
var GLOW_COLOUR;
var Lnz_ac_auckland_spaceinvadersx_menu_GlowButton_2_classLit = createForClass(138);
function $clinit_HighscoreScreen(){
  $clinit_HighscoreScreen = emptyMethod;
  DEFAULT_NAMES = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Atari', 'Commodore', 'Epic', 'Konami', 'Midway', 'Namco', 'Sega', 'Storm', 'Taito', 'Tecmo']);
  DEFAULT_SCORES = initValues(getClassLiteralForArray(I_classLit, 1), $intern_32, 0, 7, [100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000]);
}

function $add_7(this$static, name_0, score){
  $add_5(this$static.entries, new ScoreEntry(name_0, score, true));
  this$static.isCurrent = true;
}

function $endCurrent(this$static){
  var entry, entry$iterator;
  while (this$static.entries.arrayList.array.length > 10) {
    $remove_12(this$static.entries, 10);
  }
  for (entry$iterator = new AbstractList$IteratorImpl(this$static.entries.arrayList); entry$iterator.i < entry$iterator.this$01_0.size_1();) {
    entry = (checkCriticalElement(entry$iterator.i < entry$iterator.this$01_0.size_1()) , entry$iterator.this$01_0.get_0(entry$iterator.last = entry$iterator.i++));
    entry.current = false;
  }
  this$static.isCurrent = false;
}

function $resetHighscores(this$static){
  var entryID;
  this$static.entries.arrayList.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
  for (entryID = 0; entryID < 10; entryID++)
    $add_5(this$static.entries, new ScoreEntry(DEFAULT_NAMES[entryID], DEFAULT_SCORES[entryID], false));
  this$static.isCurrent = false;
  $sortHighscores(this$static);
}

function $sortHighscores(this$static){
  var entryID;
  $clinit_Collections();
  sort_0(this$static.entries);
  for (entryID = this$static.entries.arrayList.array.length - 1; entryID >= 0; entryID--) {
    entryID >= 10 && !$get_6(this$static.entries, entryID).current?$remove_12(this$static.entries, entryID):$entryString($get_6(this$static.entries, entryID), entryID + 1);
  }
}

function HighscoreScreen(){
  $clinit_HighscoreScreen();
  MenuScreen.call(this);
  this.entries = new Vector;
  $resetHighscores(this);
}

defineClass(364, 29, {}, HighscoreScreen);
_.back_0 = function back_4(){
  this.isCurrent && $endCurrent(this);
  popMenuScreen();
}
;
_.backgroundType = function backgroundType_3(){
  return 100;
}
;
_.draw = function draw_29(g){
  var entry, entry$iterator, entryY;
  $drawImage_2(g, ($clinit_Resources() , xPulse), 0, -240, 0.5 + 0.5 * sin_0(($clinit_SpaceInvadersX() , ticks * 0.2)));
  $drawImage_1(g, xMini, 0, -240);
  $drawString(g, 'Highscores', xenonWhite, 0, -240, 0);
  entryY = -150;
  for (entry$iterator = new AbstractList$IteratorImpl(this.entries.arrayList); entry$iterator.i < entry$iterator.this$01_0.size_1();) {
    entry = (checkCriticalElement(entry$iterator.i < entry$iterator.this$01_0.size_1()) , entry$iterator.this$01_0.get_0(entry$iterator.last = entry$iterator.i++));
    if (entry.current) {
      drawRightArrow(g, -272, entryY);
      drawLeftArrow(g, 272, entryY);
    }
    $drawString(g, entry.entryString, xenonWhite, 0, entryY, 0);
    entryY += 36;
  }
}
;
_.enter = function enter_4(){
}
;
_.mouseClick = function mouseClick_3(buttonCode, x_0, y_0){
  this.isCurrent && $endCurrent(this);
  popMenuScreen();
}
;
_.isCurrent = false;
var DEFAULT_NAMES, DEFAULT_SCORES;
var Lnz_ac_auckland_spaceinvadersx_menu_HighscoreScreen_2_classLit = createForClass(364);
function $clinit_HueSlider(){
  $clinit_HueSlider = emptyMethod;
  $clinit_ColourSlider();
  HUES = initValues(getClassLiteralForArray(Lnz_ac_auckland_spaceinvadersx_graphics_Colour_2_classLit, 1), $intern_2, 17, 0, [($clinit_Colour() , RED), YELLOW, GREEN, CYAN, BLUE, MAGENTA, RED]);
}

function $getHue(this$static){
  var f, hue, i;
  hue = this$static.value_0 * 6 / 255;
  i = round_int(hue);
  f = round_int((hue - i) * 255);
  switch (i) {
    case 0:
    case 6:
      return new Colour_0(255, f, 0);
    case 1:
      return new Colour_0(255 - f, 255, 0);
    case 2:
      return new Colour_0(0, 255, f);
    case 3:
      return new Colour_0(0, 255 - f, 255);
    case 4:
      return new Colour_0(f, 0, 255);
    case 5:
      return new Colour_0(255, 0, 255 - f);
  }
  return $clinit_Colour() , RED;
}

function $setHue_0(this$static, c){
  var b, g, hue, max_0, min_0, r;
  r = (c.color_0 >> 16 & 255) / 255;
  g = (c.color_0 >> 8 & 255) / 255;
  b = (c.color_0 & 255) / 255;
  min_0 = (r < g?r:g) < b?r < g?r:g:b;
  max_0 = (r > g?r:g) > b?r > g?r:g:b;
  if (min_0 == max_0)
    return;
  hue = r == max_0?b - g:g == max_0?2 + (r - b):4 + (g - r);
  this$static.value_0 = round_int(hue * 255 / 6);
  $updateSliderFill(this$static);
  $setHue(this$static.parent_0, $getHue(this$static));
}

function HueSlider(parent_0, x_0){
  $clinit_HueSlider();
  HueSlider_0.call(this, parent_0, x_0, ($clinit_Resources() , xenonGrey), xenonWhite);
}

function HueSlider_0(parent_0, x_0, normalFont, highlitFont){
  var i, x1, x2;
  ColourSlider.call(this, parent_0, 'Hue:', x_0, 20, normalFont, highlitFont);
  this.pieces = initDim(Lnz_ac_auckland_spaceinvadersx_graphics_Rectangle_2_classLit, $intern_2, 11, HUES.length - 1, 0, 1);
  this.pieceColours = initDim(Lnz_ac_auckland_spaceinvadersx_graphics_Image_2_classLit, $intern_2, 35, HUES.length - 1, 0, 1);
  for (i = 0; i < HUES.length - 1; i++) {
    x1 = this.sliderFill.xMin + ~~($getWidth(this.sliderFill) * i / (HUES.length - 1));
    x2 = this.sliderFill.xMin + ~~($getWidth(this.sliderFill) * (i + 1) / (HUES.length - 1));
    this.pieces[i] = getAbsRectangle(x1, this.sliderFill.yMin, x2, this.sliderFill.yMax);
    this.pieceColours[i] = ($clinit_Toolkit() , create_6(HUES[i], HUES[i + 1], x2 - x1, false));
  }
}

defineClass(185, 184, $intern_45, HueSlider);
_.applyValue = function applyValue_2(){
  $setHue(this.parent_0, $getHue(this));
}
;
_.drawColourBar = function drawColourBar(g){
  var i;
  for (i = 0; i < this.pieces.length; i++) {
    $fillGradient(g, this.pieces[i], this.pieceColours[i]);
  }
}
;
var HUES;
var Lnz_ac_auckland_spaceinvadersx_menu_HueSlider_2_classLit = createForClass(185);
function $clinit_InGameScreen(){
  $clinit_InGameScreen = emptyMethod;
  PAUSE_RECTANGLE = new Rectangle_1(0, 0, 128, 64);
}

function InGameScreen(){
  $clinit_InGameScreen();
  MenuScreen_0.call(this, initValues(getClassLiteralForArray(Lnz_ac_auckland_spaceinvadersx_menu_Widget_2_classLit, 1), $intern_2, 14, 0, [new InGameScreen$1, new Link_0('Options', 48, optionMenu), new InGameScreen$2]));
}

defineClass(386, 29, {}, InGameScreen);
_.back_0 = function back_5(){
  if (state_1 == 2) {
    $clinit_Game();
    gameState_0 = 2;
    state_1 = 0;
  }
   else {
    $clinit_Game();
    gameState_0 = 3;
    state_1 = 2;
  }
}
;
_.draw = function draw_30(g){
  if (state_1 == 1) {
    $fillRect_1(g, PAUSE_RECTANGLE, ($clinit_Colour() , BLACK), 0.5);
    $drawRect(g, PAUSE_RECTANGLE, WHITE);
    $drawString(g, 'PAUSED', ($clinit_Resources() , xenonWhite), 0, 0, 0);
  }
   else if (state_1 == 2) {
    draw_33(g, -160);
    $drawWidgets(this, g);
  }
   else {
    messageTicker > 0 && $drawString_0(g, message_1, ($clinit_Resources() , xenonWhite), messageTicker / 100);
  }
}
;
_.enter = function enter_5(){
  $enterWidgets(this);
}
;
_.mouseClick = function mouseClick_4(buttonCode, x_0, y_0){
  state_1 == 2 && $mouseClick(this, buttonCode, x_0, y_0);
}
;
_.pause_0 = function pause_0(){
  if (state_1 == 0) {
    $clinit_Game();
    gameState_0 = 3;
    state_1 = 1;
  }
   else if (state_1 == 1) {
    $clinit_Game();
    gameState_0 = 2;
    state_1 = 0;
  }
}
;
_.tick_0 = function tick_32(mouseX, mouseY){
  $tickWidgets(this, mouseX, mouseY);
  state_1 == 0 && --messageTicker;
}
;
var PAUSE_RECTANGLE, message_1, messageTicker = 0, state_1 = 0;
var Lnz_ac_auckland_spaceinvadersx_menu_InGameScreen_2_classLit = createForClass(386);
function InGameScreen$1(){
  Button.call(this, 'Return to Game', 0, 0);
}

defineClass(387, 34, $intern_45, InGameScreen$1);
_.mouseClickIn = function mouseClickIn_5(buttonCode, x_0, y_0){
  $clinit_Game();
  gameState_0 = 2;
  $clinit_InGameScreen();
  state_1 = 0;
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_InGameScreen$1_2_classLit = createForClass(387);
function InGameScreen$2(){
  Button.call(this, 'End Game', 0, 96);
}

defineClass(388, 34, $intern_45, InGameScreen$2);
_.mouseClickIn = function mouseClickIn_6(buttonCode, x_0, y_0){
  $clinit_Game();
  clearAll();
  gameState_0 = 0;
  fadeToTrack(($clinit_Resources() , titleTrack));
  setMenuScreen(mainMenu);
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_InGameScreen$2_2_classLit = createForClass(388);
function IntroScreen(){
  MenuScreen.call(this);
}

defineClass(361, 29, {}, IntroScreen);
_.back_0 = function back_6(){
  setMenuScreen(mainMenu);
}
;
_.draw = function draw_31(g){
  drawFadeIn(g);
}
;
_.enter = function enter_6(){
  fadeTicker_0 = 0;
}
;
_.mouseClick = function mouseClick_5(buttonCode, x_0, y_0){
  setMenuScreen(mainMenu);
}
;
_.prefade = function prefade_0(){
  fadeToTrack(($clinit_Resources() , titleTrack));
}
;
_.tick_0 = function tick_33(mouseX, mouseY){
  ++fadeTicker_0;
  fadeTicker_0 >= 150 && setMenuScreen(mainMenu);
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_IntroScreen_2_classLit = createForClass(361);
function Label(text_0, x_0, y_0){
  Label_0.call(this, text_0, x_0, y_0, ($clinit_Resources() , xenonWhite));
}

function Label_0(text_0, x_0, y_0, font){
  Widget.call(this, new Rectangle_1(x_0, y_0, font.charTiles.tiles[0].width_0 * text_0.length, font.charTiles.tiles[0].height_0));
  this.text_0 = text_0;
  this.font = font;
}

defineClass(64, 14, $intern_45, Label);
_.draw = function draw_32(g){
  $drawString(g, this.text_0, this.font, $getX(this.bounds), $getY(this.bounds), 0);
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_Label_2_classLit = createForClass(64);
function Link_0(text_0, y_0, target){
  Link_1.call(this, text_0, y_0, target, ($clinit_Resources() , xenonGrey), xenonWhite);
}

function Link_1(text_0, y_0, target, normalFont, highlitFont){
  Button_0.call(this, text_0, 0, y_0, normalFont, highlitFont);
  this.target = target;
  this.pushScreenOnStack = true;
}

defineClass(56, 34, $intern_45, Link_0);
_.mouseClickIn = function mouseClickIn_7(buttonCode, x_0, y_0){
  !this.target?popMenuScreen():this.pushScreenOnStack?pushMenuScreen(this.target):setMenuScreen(this.target);
}
;
_.pushScreenOnStack = false;
var Lnz_ac_auckland_spaceinvadersx_menu_Link_2_classLit = createForClass(56);
function draw_33(g, y_0){
  $drawImage_2(g, ($clinit_Resources() , siRed), 0, y_0 - 10, random() + 0.5);
  $drawImage_2(g, siYellow, 0, y_0, random() + 0.5);
  $drawImage_1(g, xLogo, 0, y_0);
  $drawImage_1(g, xSilver, 0, y_0);
}

function drawFadeIn(g){
  var textGlow;
  if (fadeTicker_0 > 100) {
    textGlow = min_1((fadeTicker_0 - 100) / 50, 1);
    $drawImage_2(g, ($clinit_Resources() , siRed), 0, -170, textGlow * (random() + 0.5));
    $drawImage_2(g, siYellow, 0, -160, textGlow * (random() + 0.5));
  }
  $drawImage_2(g, ($clinit_Resources() , xLogo), 0, -160, fadeTicker_0 / 50);
  fadeTicker_0 > 50 && $drawImage_2(g, xSilver, 0, -160, (fadeTicker_0 - 50) / 50);
}

var fadeTicker_0 = 0;
function MainMenu(){
  MenuScreen_0.call(this, initValues(getClassLiteralForArray(Lnz_ac_auckland_spaceinvadersx_menu_Widget_2_classLit, 1), $intern_2, 14, 0, [new Link_0('New Game', 0, shipMenu), new Link_0('Options', 40, optionMenu), new Link_0('Highscores', 80, highscoreScreen), new Link_0('Credits', 120, creditsScreen), new Label('\x7F aols010 2007', 0, 250)]));
}

defineClass(385, 29, {}, MainMenu);
var Lnz_ac_auckland_spaceinvadersx_menu_MainMenu_2_classLit = createForClass(385);
var controlMenu, creditsScreen, endGameScreen, enterNameScreen, fadeWaitScreen_0, highscoreScreen, inGameScreen, introScreen, mainMenu, optionMenu, resources, shipMenu;
function OptionMenu(){
  MenuScreen_0.call(this, initValues(getClassLiteralForArray(Lnz_ac_auckland_spaceinvadersx_menu_Widget_2_classLit, 1), $intern_2, 14, 0, [new Link_0('Controls', -30, controlMenu), new OptionMenu$1, new OptionMenu$2, new OptionMenu$3, new OptionMenu$4, new OptionMenu$5, new Link_0('Back', 250, null)]));
}

defineClass(370, 29, {}, OptionMenu);
var Lnz_ac_auckland_spaceinvadersx_menu_OptionMenu_2_classLit = createForClass(370);
function OptionMenu$1(){
  Button.call(this, 'Toggle Full-Screen', 0, 20);
}

defineClass(371, 34, $intern_45, OptionMenu$1);
_.mouseClickIn = function mouseClickIn_8(buttonCode, x_0, y_0){
  var d, d_0, p;
  $clinit_SpaceInvadersX();
  !!fullScreener_0 && ((d = parent.document , d.isFullScreen || d.webkitIsFullScreen || d.mozIsFullScreen || false)?(d_0 = parent.document , d_0.exitFullScreen?d_0.exitFullScreen():d_0.webkitCancelFullScreen?d_0.webkitCancelFullScreen():d_0.mozCancelFullScreen && d_0.mozCancelFullScreen() , undefined):(p = parent.document.getElementById('playn-root') , p.requestFullScreen?p.requestFullScreen():p.webkitRequestFullScreen?p.webkitRequestFullScreen():p.mozRequestFullScreen && p.mozRequestFullScreen() , undefined));
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_OptionMenu$1_2_classLit = createForClass(371);
function OptionMenu$2(){
  BoolSelecter.call(this, 'Sound:', 70);
}

defineClass(372, 107, $intern_45, OptionMenu$2);
_.applyBool = function applyBool_0(){
  setSoundMuted(!this.bool);
}
;
_.readBool = function readBool_0(){
  this.bool = ($clinit_Resources() , !soundMuted_0);
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_OptionMenu$2_2_classLit = createForClass(372);
function OptionMenu$3(){
  $clinit_Slider();
  Slider.call(this, 'Sound Volume:', 104);
}

defineClass(373, 108, $intern_45, OptionMenu$3);
_.applyValue = function applyValue_3(){
  setSoundVolume(this.value_0 / 200);
  ($clinit_Resources() , collect_1).play_0();
}
;
_.readValue = function readValue_3(){
  this.value_0 = ($clinit_Resources() , round_int(soundVolume_0 * 200));
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_OptionMenu$3_2_classLit = createForClass(373);
function OptionMenu$4(){
  BoolSelecter.call(this, 'Music:', 164);
}

defineClass(374, 107, $intern_45, OptionMenu$4);
_.applyBool = function applyBool_1(){
  setMusicMuted(!this.bool);
}
;
_.readBool = function readBool_1(){
  this.bool = ($clinit_Resources() , !musicMuted_0);
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_OptionMenu$4_2_classLit = createForClass(374);
function OptionMenu$5(){
  $clinit_Slider();
  Slider.call(this, 'Music Volume:', 200);
}

defineClass(375, 108, $intern_45, OptionMenu$5);
_.applyValue = function applyValue_4(){
  setMusicVolume(this.value_0 / 200);
}
;
_.readValue = function readValue_4(){
  this.value_0 = ($clinit_Resources() , round_int(musicVolume_0 * 200));
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_OptionMenu$5_2_classLit = createForClass(375);
defineClass(379, 81, $intern_45);
_.draw = function draw_34(g){
  var font;
  font = this.highlit?this.highlitFont:this.normalFont;
  $drawString(g, this.text_0, font, $getX(this.bounds), $getY(this.bounds), 0);
  if (this.highlit) {
    this.value_0 != 1 && drawLeftArrow(g, this.bounds.xMin - 50, $getY(this.bounds));
    this.value_0 != 0 && drawRightArrow(g, this.bounds.xMax + 50, $getY(this.bounds));
  }
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_PlayerSelecter_2_classLit = createForClass(379);
function $compareTo_3(this$static, other){
  if (($clinit_Game() , training) && this$static.current != other.current)
    return this$static.current?1:-1;
  return other.score - this$static.score;
}

function $entryString(this$static, place){
  var placeString, spaceLength;
  spaceLength = 30 - this$static.name_0.length - ('' + this$static.score).length;
  placeString = '    ';
  place < 10?(placeString = ' ' + place + '. '):place <= 10 && (placeString = place + '. ');
  this$static.entryString = placeString + this$static.name_0 + '                              '.substr(0, spaceLength) + this$static.score;
}

function ScoreEntry(name_0, score, current){
  this.name_0 = name_0;
  this.score = score;
  this.current = current;
}

defineClass(176, 1, {9:1}, ScoreEntry);
_.compareTo = function compareTo_6(other){
  return $compareTo_3(this, other);
}
;
_.toString$ = function toString_27(){
  return this.entryString;
}
;
_.current = false;
_.score = 0;
var Lnz_ac_auckland_spaceinvadersx_menu_ScoreEntry_2_classLit = createForClass(176);
function $getColour(this$static){
  var f, i, shade;
  shade = this$static.value_0 * 2 / 255;
  i = round_int(shade);
  f = shade - i;
  switch (i) {
    case 0:
      return gradient_0(($clinit_Colour() , BLACK), this$static.hue, f);
    case 1:
      return gradient_0(this$static.hue, ($clinit_Colour() , WHITE), f);
  }
  return $clinit_Colour() , WHITE;
}

function $setHue_1(this$static, hue){
  this$static.hue = hue;
  this$static.fillLeft = ($clinit_Toolkit() , create_6(($clinit_Colour() , BLACK), hue, ~~($getWidth(this$static.sliderFill) / 2), false));
  this$static.fillRight = create_6(hue, WHITE, ~~($getWidth(this$static.sliderFill) / 2), false);
  $setColour(this$static.parent_0, $getColour(this$static));
}

function ShadeSlider(parent_0, x_0){
  $clinit_ColourSlider();
  ShadeSlider_0.call(this, parent_0, x_0, ($clinit_Resources() , xenonGrey), xenonWhite, ($clinit_Colour() , RED));
}

function ShadeSlider_0(parent_0, x_0, normalFont, highlitFont, defaultHue){
  ColourSlider.call(this, parent_0, 'Shade:', x_0, 80, normalFont, highlitFont);
  this.pieceLeft = getAbsRectangle(this.sliderFill.xMin, this.sliderFill.yMin, $getX(this.sliderFill), this.sliderFill.yMax);
  this.pieceRight = getAbsRectangle($getX(this.sliderFill), this.sliderFill.yMin, this.sliderFill.xMax, this.sliderFill.yMax);
  this.value_0 = 128;
  $updateSliderFill(this);
  $setHue_1(this, defaultHue);
}

defineClass(186, 184, $intern_45, ShadeSlider);
_.applyValue = function applyValue_5(){
  $setColour(this.parent_0, $getColour(this));
}
;
_.drawColourBar = function drawColourBar_0(g){
  if (!!this.pieceLeft && !!this.pieceRight) {
    $fillGradient(g, this.pieceLeft, this.fillLeft);
    $fillGradient(g, this.pieceRight, this.fillRight);
  }
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_ShadeSlider_2_classLit = createForClass(186);
function $clinit_ShipMenu(){
  $clinit_ShipMenu = emptyMethod;
  shipTypes = initValues(getClassLiteralForArray(I_classLit, 1), $intern_32, 0, 7, [0, 1]);
  shipColours = initValues(getClassLiteralForArray(Lnz_ac_auckland_spaceinvadersx_graphics_Colour_2_classLit, 1), $intern_2, 17, 0, [($clinit_Colour() , RED), BLUE]);
  ships = initDim(Lnz_ac_auckland_spaceinvadersx_game_PlayerShip_2_classLit, $intern_2, 55, 2, 0, 1);
}

function ShipMenu(){
  $clinit_ShipMenu();
  MenuScreen_0.call(this, initValues(getClassLiteralForArray(Lnz_ac_auckland_spaceinvadersx_menu_Widget_2_classLit, 1), $intern_2, 14, 0, [new Label('Left Hand Player', -200, -30), new Label('Right Hand Player', 200, -30), new ShipMenu$1(shipColours[0]), new ShipMenu$2(shipColours[1]), new Label('Players:', 0, 150), new ShipMenu$3, new ShipMenu$4(($clinit_PlayerShip() , SHIP_TYPE_NAMES), new Rectangle_1(-200, 280, 144, 216)), new ShipMenu$5(SHIP_TYPE_NAMES, new Rectangle_1(200, 280, 144, 216)), new ShipMenu$6, new ShipMenu$7]));
}

function setShip(shipID){
  $clinit_ShipMenu();
  if (!entered)
    return;
  !!ships[shipID] && removePlayerShip(ships[shipID]);
  ships[shipID] = createPlayerShip(shipTypes[shipID], shipColours[shipID], shipID, ($clinit_Controls() , playerControlStates[shipID]));
}

function startGame_1(){
  $clinit_ShipMenu();
  if (multiplayOption != 2) {
    removePlayerShip(ships[1 - multiplayOption]);
    ships[multiplayOption].startPos = 2;
  }
  startGame();
  setMenuScreen(inGameScreen);
  state_1 = 0;
  message_1 = 'Good Luck!';
  messageTicker = 100;
}

defineClass(376, 29, {}, ShipMenu);
_.back_0 = function back_7(){
  $clinit_Game();
  clearAll();
  gameState_0 = 0;
  popMenuScreen();
}
;
_.enter = function enter_7(){
  $enterWidgets(this);
  fill_0(ships);
  entered = true;
  $clinit_Game();
  clearAll();
  ($clinit_CollisionBlock() , instance).hurtGlowTicker = 0;
  $add_6(enemies, instance);
  gameState_0 = 1;
  $clinit_PlayerShip();
  gameState = 0;
  setShip(0);
  setShip(1);
}
;
_.tick_0 = function tick_34(mouseX, mouseY){
  $tickWidgets(this, mouseX, mouseY);
  $clinit_ColourSlider();
  highlitPulse = gradient_0(HIGHLIT_PULSE0, HIGHLIT_PULSE1, 0.5 + 0.5 * sin_0(($clinit_SpaceInvadersX() , ticks * 0.2)));
  normalPulse = gradient_0(NORMAL_PULSE0, NORMAL_PULSE1, 0.5 + 0.5 * sin_0(ticks * 0.1));
}
;
var entered = false, multiplayOption = 2, shipColours, shipTypes, ships;
var Lnz_ac_auckland_spaceinvadersx_menu_ShipMenu_2_classLit = createForClass(376);
function ShipMenu$1($anonymous2){
  $clinit_ColourSelecter();
  ColourSelecter.call(this, -200, $anonymous2);
}

defineClass(377, 177, $intern_45, ShipMenu$1);
_.applyColour = function applyColour_0(){
  ($clinit_ShipMenu() , shipColours)[0] = this.colour;
  setShip(0);
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_ShipMenu$1_2_classLit = createForClass(377);
function ShipMenu$2($anonymous2){
  $clinit_ColourSelecter();
  ColourSelecter.call(this, 200, $anonymous2);
}

defineClass(378, 177, $intern_45, ShipMenu$2);
_.applyColour = function applyColour_1(){
  ($clinit_ShipMenu() , shipColours)[1] = this.colour;
  setShip(1);
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_ShipMenu$2_2_classLit = createForClass(378);
function ShipMenu$3(){
  Selecter.call(this, ($clinit_Controls() , MULTIPLAY_OPTIONS));
}

defineClass(380, 379, $intern_45, ShipMenu$3);
_.applyValue = function applyValue_6(){
  $clinit_ShipMenu();
  multiplayOption = this.value_0;
}
;
_.readValue = function readValue_5(){
  this.value_0 = 2;
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_ShipMenu$3_2_classLit = createForClass(380);
function ShipMenu$4($anonymous0, $anonymous1){
  Selecter_1.call(this, $anonymous0, $anonymous1);
}

defineClass(381, 81, $intern_45, ShipMenu$4);
_.applyValue = function applyValue_7(){
  ($clinit_ShipMenu() , shipTypes)[0] = this.value_0;
  setShip(0);
}
;
_.readValue = function readValue_6(){
  this.value_0 = 0;
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_ShipMenu$4_2_classLit = createForClass(381);
function ShipMenu$5($anonymous0, $anonymous1){
  Selecter_1.call(this, $anonymous0, $anonymous1);
}

defineClass(382, 81, $intern_45, ShipMenu$5);
_.applyValue = function applyValue_8(){
  ($clinit_ShipMenu() , shipTypes)[1] = this.value_0;
  setShip(1);
}
;
_.readValue = function readValue_7(){
  this.value_0 = 1;
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_ShipMenu$5_2_classLit = createForClass(382);
function ShipMenu$6(){
  $clinit_GlowButton();
  GlowButton.call(this, ($clinit_Resources() , xenonGrey), xenonWhite);
}

defineClass(383, 138, $intern_45, ShipMenu$6);
_.mouseClickIn = function mouseClickIn_9(buttonCode, x_0, y_0){
  startGame_1();
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_ShipMenu$6_2_classLit = createForClass(383);
function ShipMenu$7(){
  Button.call(this, 'TRAIN', 0, -280);
}

defineClass(384, 34, $intern_45, ShipMenu$7);
_.draw = function draw_35(g){
  this.highlit && $draw(this, g);
}
;
_.mouseClickIn = function mouseClickIn_10(buttonCode, x_0, y_0){
  startGame_1();
  $clinit_Game();
  training = true;
}
;
var Lnz_ac_auckland_spaceinvadersx_menu_ShipMenu$7_2_classLit = createForClass(384);
defineClass(450, 1, {});
var Lplayn_core_Assets_2_classLit = createForClass(450);
defineClass(454, 1, {});
var Lplayn_core_Audio_2_classLit = createForClass(454);
function $draw_1(this$static, image, x_0, y_0){
  return $draw_2(this$static, image, x_0, y_0, $invScaled(image.scale_0, image.pixelWidth), $invScaled(image.scale_0, image.pixelHeight));
}

function $draw_2(this$static, image, x_0, y_0, w, h){
  $draw_6(image, this$static.ctx, x_0, y_0, w, h);
  return this$static;
}

function $toTexture(this$static, config){
  return $createTexture_0(this$static.image, config);
}

function Canvas_0(image){
  this.image = image;
  this.width_0 = $invScaled(image.scale_0, image.pixelWidth);
  this.height_0 = $invScaled(image.scale_0, image.pixelHeight);
  if (this.width_0 <= 0 || this.height_0 <= 0)
    throw new IllegalArgumentException_0('Canvas must be > 0 in width and height: ' + this.width_0 + 'x' + this.height_0);
}

defineClass(354, 1, $intern_46);
_.height_0 = 0;
_.width_0 = 0;
var Lplayn_core_Canvas_2_classLit = createForClass(354);
function Clock(){
}

defineClass(165, 1, {}, Clock);
_.tick = 0;
var Lplayn_core_Clock_2_classLit = createForClass(165);
defineClass(38, 1, {38:1});
var Lplayn_core_Event_2_classLit = createForClass(38);
function $setFlag(this$static, flag){
  this$static.flags |= flag;
}

function Event$Input(time){
  this.flags = 0;
  this.time = time;
}

function modifierFlags(altP, ctrlP, metaP, shiftP){
  var flags;
  flags = 0;
  altP && (flags |= 2);
  ctrlP && (flags |= 4);
  metaP && (flags |= 16);
  shiftP && (flags |= 8);
  return flags;
}

defineClass(32, 38, $intern_47);
_.addFields = function addFields(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
}
;
_.name_1 = function name_2(){
  return 'Input';
}
;
_.toString$ = function toString_28(){
  var builder;
  builder = $append_1(new StringBuilder_1(this.name_1()), 91);
  this.addFields(builder);
  return (builder.string += ']' , builder).string;
}
;
_.flags = 0;
_.time = 0;
var Lplayn_core_Event$Input_2_classLit = createForClass(32);
function Event$XY(time, x_0, y_0){
  Event$Input.call(this, time);
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(52, 32, $intern_48);
_.addFields = function addFields_0(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_6($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
}
;
_.name_1 = function name_3(){
  return 'XY';
}
;
_.x_1 = function x_1(){
  return this.x_0;
}
;
_.y_1 = function y_1(){
  return this.y_0;
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lplayn_core_Event$XY_2_classLit = createForClass(52);
defineClass(458, 1, {});
var Lplayn_core_Exec_2_classLit = createForClass(458);
function RFuture(result){
  this._result_0 = result;
}

defineClass(122, 1, {}, RFuture);
var Lreact_RFuture_2_classLit = createForClass(122);
function RPromise(){
  RPromise_0.call(this, new RPromise$3);
}

function RPromise_0(result){
  RFuture.call(this, result);
  this._result = result;
}

defineClass(123, 122, {}, RPromise);
_.fail = function fail(cause){
  $updateAndNotify_0(this._result, new Try$Failure(cause), false);
}
;
_.succeed = function succeed(value_0){
  $updateAndNotify_0(this._result, new Try$Success(value_0), false);
}
;
var Lreact_RPromise_2_classLit = createForClass(123);
function $superFail(this$static, cause){
  $updateAndNotify_0(this$static._result, new Try$Failure(cause), false);
}

function $superSucceed(this$static, value_0){
  $updateAndNotify_0(this$static._result, new Try$Success(value_0), false);
}

function Exec$1(this$0){
  this.this$01 = this$0;
  RPromise.call(this);
}

defineClass(277, 123, {}, Exec$1);
_.fail = function fail_0(cause){
  $invokeLater(this.this$01, new Exec$1$2(this, cause));
}
;
_.succeed = function succeed_0(value_0){
  $invokeLater(this.this$01, new Exec$1$1(this, value_0));
}
;
var Lplayn_core_Exec$1_2_classLit = createForClass(277);
function Exec$1$1(this$1, val$value){
  this.this$11 = this$1;
  this.val$value2 = val$value;
}

defineClass(278, 1, {}, Exec$1$1);
_.run = function run_1(){
  $superSucceed(this.this$11, this.val$value2);
}
;
var Lplayn_core_Exec$1$1_2_classLit = createForClass(278);
function Exec$1$2(this$1, val$cause){
  this.this$11 = this$1;
  this.val$cause2 = val$cause;
}

defineClass(279, 1, {}, Exec$1$2);
_.run = function run_2(){
  $superFail(this.this$11, this.val$cause2);
}
;
var Lplayn_core_Exec$1$2_2_classLit = createForClass(279);
function $dispatch(this$static){
  var action, e, ii, ll;
  $addAll_0(this$static.running, this$static.pending);
  this$static.pending.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
  for (ii = 0 , ll = this$static.running.array.length; ii < ll; ii++) {
    action = $get(this$static.running, ii);
    try {
      action.run();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 12)) {
        e = $e0;
        $reportError(this$static.plat, 'invokeLater Runnable failed: ' + action, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  this$static.running.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
}

function $invokeLater(this$static, action){
  $add_0(this$static.pending, action);
}

function Exec$Default(plat){
  this.pending = new ArrayList;
  this.running = new ArrayList;
  this.plat = plat;
  $atPrio($addConnection(plat.frame_0, new Exec$Default$1(this)), 32767);
}

defineClass(275, 458, {}, Exec$Default);
var Lplayn_core_Exec$Default_2_classLit = createForClass(275);
function Exec$Default$1(this$1){
  this.this$11 = this$1;
}

defineClass(276, 441, {}, Exec$Default$1);
_.onEmit = function onEmit_1(unused){
  $dispatch(this.this$11);
}
;
var Lplayn_core_Exec$Default$1_2_classLit = createForClass(276);
function $checkError(this$static){
  var reported;
  reported = 0;
  if (this$static.checkErrors) {
    while (this$static.glc.getError() != 0) {
      reported += 1;
    }
  }
  return reported > 0;
}

function $glGenTexture(this$static){
  $resizeIntBuffer(this$static.bufs);
  $genObjects(this$static, this$static.bufs.intBuffer, ($clinit_HtmlGL20$WebGLObjectType() , TEXTURE));
  return this$static.bufs.intBuffer.intArray[0];
}

function $glUniform4fv(this$static, location_0, count, v){
  $setFloatBuffer(this$static.bufs, v, 4 * count);
  $glUniform4fv_0(this$static, location_0, count, this$static.bufs.floatBuffer);
}

function GL20(buffers, checkErrors){
  this.bufs = buffers;
  this.checkErrors = checkErrors;
}

defineClass(282, 1, {});
_.checkErrors = false;
var Lplayn_core_GL20_2_classLit = createForClass(282);
function $newCap(cap, length_0){
  var newLength;
  newLength = cap << 1;
  while (newLength < length_0) {
    newLength <<= 1;
  }
  return newLength;
}

function $resizeIntBuffer(this$static){
  var cap;
  cap = this$static.intBuffer.capacity;
  cap < 1?(this$static.intBuffer = $asIntBuffer($createByteBuffer($newCap(cap, 1) * 4))):$position(this$static.intBuffer);
  $limit(this$static.intBuffer, 1);
}

function $setFloatBuffer(this$static, source, length_0){
  var cap;
  cap = this$static.floatBuffer.capacity;
  cap < length_0?(this$static.floatBuffer = new FloatBuffer($slice($createByteBuffer($newCap(cap, length_0) * 4)))):$position(this$static.floatBuffer);
  $limit(this$static.floatBuffer, length_0);
  $put_0(this$static.floatBuffer, source, length_0);
  $rewind(this$static.floatBuffer);
}

function $setShortBuffer(this$static, source, length_0){
  var cap;
  cap = this$static.shortBuffer.capacity;
  cap < length_0?(this$static.shortBuffer = $asShortBuffer($createByteBuffer($newCap(cap, length_0) * 2))):$position(this$static.shortBuffer);
  $limit(this$static.shortBuffer, length_0);
  $put_2(this$static.shortBuffer, source, length_0);
  $rewind(this$static.shortBuffer);
}

defineClass(284, 1, {});
var Lplayn_core_GL20$Buffers_2_classLit = createForClass(284);
function $begin(this$static){
  if (this$static.begun)
    throw new IllegalStateException_0($getSimpleName(this$static.___clazz$) + ' mismatched begin()');
  this$static.begun = true;
}

function $end(this$static){
  if (!this$static.begun)
    throw new IllegalStateException_0($getSimpleName(this$static.___clazz$) + ' mismatched end()');
  try {
    this$static.flush();
  }
   finally {
    this$static.begun = false;
  }
}

function $flush(this$static){
  if (!this$static.begun)
    throw new IllegalStateException_0($getSimpleName(this$static.___clazz$) + ' flush() without begin()');
}

defineClass(465, 1, $intern_46);
_.begin = function begin_0(fbufWidth, fbufHeight, flip){
  $begin(this);
}
;
_.flush = function flush(){
  $flush(this);
}
;
_.begun = false;
var Lplayn_core_GLBatch_2_classLit = createForClass(465);
function $activate(this$static){
  $glUseProgram(this$static.gl, this$static.id_0);
}

function $compileShader_0(this$static, type_0, shaderSource){
  var compiled, log_0, shader;
  shader = $glCreateShader(this$static.gl, type_0);
  if (shader == 0)
    throw new RuntimeException_0('Failed to create shader (' + type_0 + '): ' + this$static.gl.glc.getError());
  $glShaderSource(this$static.gl, shader, shaderSource);
  $glCompileShader(this$static.gl, shader);
  compiled = initDim(I_classLit, $intern_32, 0, 1, 7, 1);
  $glGetShaderiv(this$static.gl, shader, compiled);
  if (compiled[0] == 0) {
    log_0 = $glGetShaderInfoLog(this$static.gl, shader);
    $deleteObject(this$static.gl, shader, ($clinit_HtmlGL20$WebGLObjectType() , SHADER));
    throw new RuntimeException_0('Failed to compile shader (' + type_0 + '): ' + log_0);
  }
  return shader;
}

function $getAttribLocation_0(this$static, name_0){
  var loc;
  loc = $glGetAttribLocation(this$static.gl, this$static.id_0, name_0);
  return loc;
}

function $getUniformLocation_0(this$static, name_0){
  var loc;
  loc = $glGetUniformLocation(this$static.gl, this$static.id_0, name_0);
  return loc;
}

function GLProgram(gl, vertexSource, fragmentSource){
  var fragmentShader, id_0, linkStatus, log_0, vertexShader;
  this.gl = gl;
  id_0 = 0;
  vertexShader = 0;
  fragmentShader = 0;
  try {
    id_0 = $createObject(gl, gl.glc.createProgram(), ($clinit_HtmlGL20$WebGLObjectType() , PROGRAM));
    if (id_0 == 0)
      throw new RuntimeException_0('Failed to create program: ' + gl.glc.getError());
    $checkError(gl);
    vertexShader = $compileShader_0(this, 35633, vertexSource);
    $attachShader(gl.glc, gl.webGLObjects[id_0], gl.webGLObjects[vertexShader]);
    $checkError(gl);
    fragmentShader = $compileShader_0(this, 35632, fragmentSource);
    $attachShader(gl.glc, gl.webGLObjects[id_0], gl.webGLObjects[fragmentShader]);
    $checkError(gl);
    $linkProgram(gl.glc, gl.webGLObjects[id_0]);
    linkStatus = initDim(I_classLit, $intern_32, 0, 1, 7, 1);
    linkStatus[0] = $getProgramParameterb(gl.glc, gl.webGLObjects[id_0], 35714)?1:0;
    if (linkStatus[0] == 0) {
      log_0 = $getProgramInfoLog(gl.glc, gl.webGLObjects[id_0]);
      $deleteObject(gl, id_0, PROGRAM);
      throw new RuntimeException_0('Failed to link program: ' + log_0);
    }
    this.id_0 = id_0;
    id_0 = vertexShader = fragmentShader = 0;
  }
   finally {
    id_0 != 0 && $deleteObject(gl, id_0, ($clinit_HtmlGL20$WebGLObjectType() , PROGRAM));
    vertexShader != 0 && $deleteObject(gl, vertexShader, ($clinit_HtmlGL20$WebGLObjectType() , SHADER));
    fragmentShader != 0 && $deleteObject(gl, fragmentShader, ($clinit_HtmlGL20$WebGLObjectType() , SHADER));
  }
}

defineClass(168, 1, $intern_46, GLProgram);
_.id_0 = 0;
var Lplayn_core_GLProgram_2_classLit = createForClass(168);
function $onEmit_0(this$static){
  $onFrame(this$static.this$01);
}

function Game$1(this$0){
  this.this$01 = this$0;
}

defineClass(205, 441, {}, Game$1);
_.onEmit = function onEmit_2(plat){
  $onEmit_0(this, plat);
}
;
var Lplayn_core_Game$1_2_classLit = createForClass(205);
function $colorTex(this$static){
  var canvas;
  if (!this$static.colorTex) {
    canvas = $createCanvasImpl(this$static, this$static.scale_0, iceil(this$static.scale_0.factor * 1), iceil(this$static.scale_0.factor * 1));
    $fillRect_3((canvas.ctx.fillStyle = 'rgba(255,255,255,1.0)' , undefined , canvas), canvas.width_0, canvas.height_0);
    this$static.colorTex = $toTexture(canvas, ($clinit_Texture$Config() , UNMANAGED));
  }
  return this$static.colorTex;
}

function $createCanvas_0(this$static, width_0, height){
  return $createCanvasImpl(this$static, this$static.scale_0, iceil($scaled(this$static.scale_0, width_0)), iceil($scaled(this$static.scale_0, height)));
}

function $createTexture(this$static, config){
  var id_0, minFilter;
  id_0 = $glGenTexture(this$static.gl);
  $glBindTexture(this$static.gl, id_0);
  $glTexParameteri(this$static.gl, 10240, config.magFilter);
  minFilter = mipmapify(config.minFilter, config.mipmaps);
  $glTexParameteri(this$static.gl, 10241, minFilter);
  $glTexParameteri(this$static.gl, 10242, config.repeatX?10497:33071);
  $glTexParameteri(this$static.gl, 10243, config.repeatY?10497:33071);
  return id_0;
}

function $viewportChanged(this$static, pixelWidth, pixelHeight){
  this$static.viewPixelWidth = pixelWidth;
  this$static.viewPixelHeight = pixelHeight;
  this$static.viewSizeM.width_0 = $invScaled(this$static.scale_0, pixelWidth);
  this$static.viewSizeM.height_0 = $invScaled(this$static.scale_0, pixelHeight);
  $info(this$static.plat.log_0, 'viewPortChanged ' + pixelWidth + 'x' + pixelHeight + ' / ' + this$static.scale_0.factor + ' -> ' + this$static.viewSize);
}

function Graphics_0(plat, gl, scale){
  this.viewSizeM = new Dimension;
  this.viewSize = this.viewSizeM;
  this.defaultRenderTarget = new Graphics$1(this, this);
  this.plat = plat;
  this.gl = gl;
  this.scale_0 = scale;
}

function mipmapify(filter, mipmaps){
  if (!mipmaps)
    return filter;
  switch (filter) {
    case 9728:
      return 9984;
    case 9729:
      return 9985;
    default:return filter;
  }
}

defineClass(224, 1, {});
_.viewPixelHeight = 0;
_.viewPixelWidth = 0;
var Lplayn_core_Graphics_2_classLit = createForClass(224);
function $bind(this$static){
  $glBindFramebuffer(this$static.gfx.gl);
  $glViewport(this$static.gfx.gl, this$static.this$01.viewPixelWidth, this$static.this$01.viewPixelHeight);
}

defineClass(227, 1, $intern_46);
_.toString$ = function toString_29(){
  return '[id=0, size=' + this.this$01.viewPixelWidth + 'x' + this.this$01.viewPixelHeight + ' @ ' + this.this$01.scale_0.factor + 'x' + this.this$01.scale_0.factor + ', flip=' + true + ']';
}
;
var Lplayn_core_RenderTarget_2_classLit = createForClass(227);
function Graphics$1(this$0, $anonymous0){
  this.this$01 = this$0;
  this.gfx = $anonymous0;
}

defineClass(228, 227, $intern_46, Graphics$1);
var Lplayn_core_Graphics$1_2_classLit = createForClass(228);
defineClass(462, 1, {});
var Lplayn_core_TileSource_2_classLit = createForClass(462);
function $$init_0(this$static){
  this$static.texconf = ($clinit_Texture$Config() , DEFAULT);
}

function $createTexture_0(this$static, config){
  var tex, texHeight, texWidth;
  if (this$static.state._result_0._value == null)
    throw new IllegalStateException_0('Cannot create texture from unready image: ' + this$static);
  texWidth = $toTexWidth(config, this$static.pixelWidth);
  texHeight = $toTexHeight(config, this$static.pixelHeight);
  if (texWidth <= 0 || texHeight <= 0)
    throw new IllegalArgumentException_0('Invalid texture size: ' + texWidth + 'x' + texHeight + ' from: ' + this$static);
  tex = new Texture(this$static.gfx, $createTexture(this$static.gfx, config), config, texWidth, texHeight, this$static.scale_0, $invScaled(this$static.scale_0, this$static.pixelWidth), $invScaled(this$static.scale_0, this$static.pixelHeight));
  $update(tex, this$static);
  return tex;
}

function $texture(this$static){
  (!this$static.texture || this$static.texture.disposed) && (this$static.texture = $createTexture_0(this$static, this$static.texconf));
  return this$static.texture;
}

defineClass(169, 462, {});
var Lplayn_core_Image_2_classLit = createForClass(169);
function ImageImpl(gfx, scale, pixelWidth, pixelHeight, bitmap){
  $$init_0(this);
  this.gfx = gfx;
  this.state = new RFuture(($clinit_AbstractValue() , new Value(new Try$Success(this))));
  if (pixelWidth == 0 || pixelHeight == 0)
    throw new IllegalArgumentException_0('Invalid size for ready image: ' + pixelWidth + 'x' + pixelHeight + ' bitmap: ' + bitmap);
  this.source = '<canvas>';
  this.scale_0 = scale;
  this.pixelWidth = pixelWidth;
  this.pixelHeight = pixelHeight;
  this.img = bitmap;
}

function ImageImpl_0(gfx, state, preScale, preWidth, preHeight, source){
  $$init_0(this);
  this.gfx = gfx;
  this.state = state;
  this.source = source;
  this.scale_0 = preScale;
  this.pixelWidth = preWidth;
  this.pixelHeight = preHeight;
}

defineClass(172, 169, {});
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_ImageImpl_2_classLit = createForClass(172);
defineClass(245, 1, {});
var Lplayn_core_Input_2_classLit = createForClass(245);
function $clinit_Key(){
  $clinit_Key = emptyMethod;
  A = new Key('A', 0);
  B = new Key('B', 1);
  C = new Key('C', 2);
  D = new Key('D', 3);
  E_0 = new Key('E', 4);
  F_0 = new Key('F', 5);
  G = new Key('G', 6);
  H = new Key('H', 7);
  I = new Key('I', 8);
  J = new Key('J', 9);
  K = new Key('K', 10);
  L = new Key('L', 11);
  M = new Key('M', 12);
  N = new Key('N', 13);
  O = new Key('O', 14);
  P = new Key('P', 15);
  Q = new Key('Q', 16);
  R = new Key('R', 17);
  S = new Key('S', 18);
  T = new Key('T', 19);
  U = new Key('U', 20);
  V = new Key('V', 21);
  W = new Key('W', 22);
  X = new Key('X', 23);
  Y = new Key('Y', 24);
  Z = new Key('Z', 25);
  K0 = new Key('K0', 26);
  K1 = new Key('K1', 27);
  K2 = new Key('K2', 28);
  K3 = new Key('K3', 29);
  K4 = new Key('K4', 30);
  K5 = new Key('K5', 31);
  K6 = new Key('K6', 32);
  K7 = new Key('K7', 33);
  K8 = new Key('K8', 34);
  K9 = new Key('K9', 35);
  NP0 = new Key('NP0', 36);
  NP1 = new Key('NP1', 37);
  NP2 = new Key('NP2', 38);
  NP3 = new Key('NP3', 39);
  NP4 = new Key('NP4', 40);
  NP5 = new Key('NP5', 41);
  NP6 = new Key('NP6', 42);
  NP7 = new Key('NP7', 43);
  NP8 = new Key('NP8', 44);
  NP9 = new Key('NP9', 45);
  NP_ADD = new Key('NP_ADD', 46);
  NP_DECIMAL = new Key('NP_DECIMAL', 47);
  NP_DELETE = new Key('NP_DELETE', 48);
  NP_DIVIDE = new Key('NP_DIVIDE', 49);
  NP_MULTIPLY = new Key('NP_MULTIPLY', 50);
  NP_NUM_LOCK = new Key('NP_NUM_LOCK', 51);
  NP_SUBTRACT = new Key('NP_SUBTRACT', 52);
  NP_DOWN = new Key('NP_DOWN', 53);
  NP_LEFT = new Key('NP_LEFT', 54);
  NP_RIGHT = new Key('NP_RIGHT', 55);
  NP_UP = new Key('NP_UP', 56);
  F1 = new Key('F1', 57);
  F2 = new Key('F2', 58);
  F3 = new Key('F3', 59);
  F4 = new Key('F4', 60);
  F5 = new Key('F5', 61);
  F6 = new Key('F6', 62);
  F7 = new Key('F7', 63);
  F8 = new Key('F8', 64);
  F9 = new Key('F9', 65);
  F10 = new Key('F10', 66);
  F11 = new Key('F11', 67);
  F12 = new Key('F12', 68);
  AMPERSAND = new Key('AMPERSAND', 69);
  ASTERISK = new Key('ASTERISK', 70);
  AT = new Key('AT', 71);
  BACKQUOTE = new Key('BACKQUOTE', 72);
  BACKSLASH = new Key('BACKSLASH', 73);
  BANG = new Key('BANG', 74);
  CIRCUMFLEX = new Key('CIRCUMFLEX', 75);
  COLON = new Key('COLON', 76);
  COMMA = new Key('COMMA', 77);
  DOLLAR = new Key('DOLLAR', 78);
  DOUBLE_QUOTE = new Key('DOUBLE_QUOTE', 79);
  EQUALS = new Key('EQUALS', 80);
  GREATER = new Key('GREATER', 81);
  HASH = new Key('HASH', 82);
  LEFT_BRACE = new Key('LEFT_BRACE', 83);
  LEFT_BRACKET = new Key('LEFT_BRACKET', 84);
  LEFT_PAREN = new Key('LEFT_PAREN', 85);
  LESS = new Key('LESS', 86);
  MINUS = new Key('MINUS', 87);
  MULTIPLY = new Key('MULTIPLY', 88);
  PERCENT = new Key('PERCENT', 89);
  PERIOD = new Key('PERIOD', 90);
  PLUS = new Key('PLUS', 91);
  QUOTE = new Key('QUOTE', 92);
  RIGHT_BRACE = new Key('RIGHT_BRACE', 93);
  RIGHT_BRACKET = new Key('RIGHT_BRACKET', 94);
  RIGHT_PAREN = new Key('RIGHT_PAREN', 95);
  SEMICOLON = new Key('SEMICOLON', 96);
  SLASH = new Key('SLASH', 97);
  SPACE = new Key('SPACE', 98);
  TILDE = new Key('TILDE', 99);
  QUESTION_MARK = new Key('QUESTION_MARK', 100);
  UNDERSCORE = new Key('UNDERSCORE', 101);
  VERTICAL_BAR = new Key('VERTICAL_BAR', 102);
  ALT = new Key('ALT', 103);
  CONTROL = new Key('CONTROL', 104);
  CAPS_LOCK = new Key('CAPS_LOCK', 105);
  SHIFT = new Key('SHIFT', 106);
  META = new Key('META', 107);
  DOWN = new Key('DOWN', 108);
  END = new Key('END', 109);
  HOME = new Key('HOME', 110);
  LEFT = new Key('LEFT', 111);
  PAGE_UP = new Key('PAGE_UP', 112);
  PAGE_DOWN = new Key('PAGE_DOWN', 113);
  RIGHT = new Key('RIGHT', 114);
  UP = new Key('UP', 115);
  BACKSPACE = new Key('BACKSPACE', 116);
  DELETE = new Key('DELETE', 117);
  ENTER = new Key('ENTER', 118);
  INSERT = new Key('INSERT', 119);
  TAB = new Key('TAB', 120);
  ESCAPE = new Key('ESCAPE', 121);
  PAUSE = new Key('PAUSE', 122);
  PRINT_SCREEN = new Key('PRINT_SCREEN', 123);
  SCROLL_LOCK = new Key('SCROLL_LOCK', 124);
  WINDOWS = new Key('WINDOWS', 125);
  MEDIA_CLOSE = new Key('MEDIA_CLOSE', 126);
  MEDIA_EJECT = new Key('MEDIA_EJECT', 127);
  MEDIA_FAST_FORWARD = new Key('MEDIA_FAST_FORWARD', 128);
  MEDIA_NEXT = new Key('MEDIA_NEXT', 129);
  MEDIA_PAUSE = new Key('MEDIA_PAUSE', 130);
  MEDIA_PLAY = new Key('MEDIA_PLAY', 131);
  MEDIA_PLAY_PAUSE = new Key('MEDIA_PLAY_PAUSE', 132);
  MEDIA_PREVIOUS = new Key('MEDIA_PREVIOUS', 133);
  MEDIA_RECORD = new Key('MEDIA_RECORD', 134);
  MEDIA_REWIND = new Key('MEDIA_REWIND', 135);
  MEDIA_STOP = new Key('MEDIA_STOP', 136);
  BLUE_0 = new Key('BLUE', 137);
  GREEN_0 = new Key('GREEN', 138);
  RED_0 = new Key('RED', 139);
  YELLOW_0 = new Key('YELLOW', 140);
  APP_SWITCH = new Key('APP_SWITCH', 141);
  AVR_INPUT = new Key('AVR_INPUT', 142);
  AVR_POWER = new Key('AVR_POWER', 143);
  BACK = new Key('BACK', 144);
  BOOKMARK = new Key('BOOKMARK', 145);
  BREAK = new Key('BREAK', 146);
  BUTTON_1 = new Key('BUTTON_1', 147);
  BUTTON_2 = new Key('BUTTON_2', 148);
  BUTTON_3 = new Key('BUTTON_3', 149);
  BUTTON_4 = new Key('BUTTON_4', 150);
  BUTTON_5 = new Key('BUTTON_5', 151);
  BUTTON_6 = new Key('BUTTON_6', 152);
  BUTTON_7 = new Key('BUTTON_7', 153);
  BUTTON_8 = new Key('BUTTON_8', 154);
  BUTTON_9 = new Key('BUTTON_9', 155);
  BUTTON_10 = new Key('BUTTON_10', 156);
  BUTTON_11 = new Key('BUTTON_11', 157);
  BUTTON_12 = new Key('BUTTON_12', 158);
  BUTTON_13 = new Key('BUTTON_13', 159);
  BUTTON_14 = new Key('BUTTON_14', 160);
  BUTTON_15 = new Key('BUTTON_15', 161);
  BUTTON_16 = new Key('BUTTON_16', 162);
  BUTTON_A = new Key('BUTTON_A', 163);
  BUTTON_B = new Key('BUTTON_B', 164);
  BUTTON_C = new Key('BUTTON_C', 165);
  BUTTON_L1 = new Key('BUTTON_L1', 166);
  BUTTON_L2 = new Key('BUTTON_L2', 167);
  BUTTON_MODE = new Key('BUTTON_MODE', 168);
  BUTTON_R1 = new Key('BUTTON_R1', 169);
  BUTTON_R2 = new Key('BUTTON_R2', 170);
  BUTTON_SELECT = new Key('BUTTON_SELECT', 171);
  BUTTON_START = new Key('BUTTON_START', 172);
  BUTTON_THUMBL = new Key('BUTTON_THUMBL', 173);
  BUTTON_THUMBR = new Key('BUTTON_THUMBR', 174);
  BUTTON_X = new Key('BUTTON_X', 175);
  BUTTON_Y = new Key('BUTTON_Y', 176);
  BUTTON_Z = new Key('BUTTON_Z', 177);
  CALL = new Key('CALL', 178);
  CAMERA = new Key('CAMERA', 179);
  CAPTIONS = new Key('CAPTIONS', 180);
  CHANNEL_DOWN = new Key('CHANNEL_DOWN', 181);
  CHANNEL_UP = new Key('CHANNEL_UP', 182);
  CLEAR = new Key('CLEAR', 183);
  DPAD_CENTER = new Key('DPAD_CENTER', 184);
  DPAD_DOWN = new Key('DPAD_DOWN', 185);
  DPAD_LEFT = new Key('DPAD_LEFT', 186);
  DPAD_RIGHT = new Key('DPAD_RIGHT', 187);
  DPAD_UP = new Key('DPAD_UP', 188);
  DVR = new Key('DVR', 189);
  ENDCALL = new Key('ENDCALL', 190);
  ENVELOPE = new Key('ENVELOPE', 191);
  EXPLORER = new Key('EXPLORER', 192);
  FOCUS = new Key('FOCUS', 193);
  FORWARD = new Key('FORWARD', 194);
  FORWARD_DEL = new Key('FORWARD_DEL', 195);
  FUNCTION = new Key('FUNCTION', 196);
  GUIDE = new Key('GUIDE', 197);
  HEADSETHOOK = new Key('HEADSETHOOK', 198);
  INFO = new Key('INFO', 199);
  MENU = new Key('MENU', 200);
  MUTE = new Key('MUTE', 201);
  NOTIFICATION = new Key('NOTIFICATION', 202);
  NUM = new Key('NUM', 203);
  PICTSYMBOLS = new Key('PICTSYMBOLS', 204);
  POWER = new Key('POWER', 205);
  SEARCH = new Key('SEARCH', 206);
  SETTINGS = new Key('SETTINGS', 207);
  SOFT_LEFT = new Key('SOFT_LEFT', 208);
  SOFT_RIGHT = new Key('SOFT_RIGHT', 209);
  STAR = new Key('STAR', 210);
  STB_INPUT = new Key('STB_INPUT', 211);
  STB_POWER = new Key('STB_POWER', 212);
  SWITCH_CHARSET = new Key('SWITCH_CHARSET', 213);
  SYM = new Key('SYM', 214);
  SYSRQ = new Key('SYSRQ', 215);
  TV = new Key('TV', 216);
  TV_INPUT = new Key('TV_INPUT', 217);
  TV_POWER = new Key('TV_POWER', 218);
  VOLUME_DOWN = new Key('VOLUME_DOWN', 219);
  VOLUME_MUTE = new Key('VOLUME_MUTE', 220);
  VOLUME_UP = new Key('VOLUME_UP', 221);
  WINDOW = new Key('WINDOW', 222);
  ZOOM_IN = new Key('ZOOM_IN', 223);
  ZOOM_OUT = new Key('ZOOM_OUT', 224);
  UNKNOWN = new Key('UNKNOWN', 225);
}

function Key(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_Key();
  return initValues(getClassLiteralForArray(Lplayn_core_Key_2_classLit, 1), $intern_26, 4, 0, [A, B, C, D, E_0, F_0, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_MULTIPLY, NP_NUM_LOCK, NP_SUBTRACT, NP_DOWN, NP_LEFT, NP_RIGHT, NP_UP, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, AMPERSAND, ASTERISK, AT, BACKQUOTE, BACKSLASH, BANG, CIRCUMFLEX, COLON, COMMA, DOLLAR, DOUBLE_QUOTE, EQUALS, GREATER, HASH, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, MINUS, MULTIPLY, PERCENT, PERIOD, PLUS, QUOTE, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, SEMICOLON, SLASH, SPACE, TILDE, QUESTION_MARK, UNDERSCORE, VERTICAL_BAR, ALT, CONTROL, CAPS_LOCK, SHIFT, META, DOWN, END, HOME, LEFT, PAGE_UP, PAGE_DOWN, RIGHT, UP, BACKSPACE, DELETE, ENTER, INSERT, TAB, ESCAPE, PAUSE, PRINT_SCREEN, SCROLL_LOCK, WINDOWS, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, BLUE_0, GREEN_0, RED_0, YELLOW_0, APP_SWITCH, AVR_INPUT, AVR_POWER, BACK, BOOKMARK, BREAK, BUTTON_1, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, CALL, CAMERA, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CLEAR, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, ENDCALL, ENVELOPE, EXPLORER, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, GUIDE, HEADSETHOOK, INFO, MENU, MUTE, NOTIFICATION, NUM, PICTSYMBOLS, POWER, SEARCH, SETTINGS, SOFT_LEFT, SOFT_RIGHT, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, TV, TV_INPUT, TV_POWER, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, WINDOW, ZOOM_IN, ZOOM_OUT, UNKNOWN]);
}

defineClass(4, 7, {3:1, 9:1, 7:1, 4:1}, Key);
var A, ALT, AMPERSAND, APP_SWITCH, ASTERISK, AT, AVR_INPUT, AVR_POWER, B, BACK, BACKQUOTE, BACKSLASH, BACKSPACE, BANG, BLUE_0, BOOKMARK, BREAK, BUTTON_1, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, C, CALL, CAMERA, CAPS_LOCK, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CIRCUMFLEX, CLEAR, COLON, COMMA, CONTROL, D, DELETE, DOLLAR, DOUBLE_QUOTE, DOWN, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, E_0, END, ENDCALL, ENTER, ENVELOPE, EQUALS, ESCAPE, EXPLORER, F_0, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, G, GREATER, GREEN_0, GUIDE, H, HASH, HEADSETHOOK, HOME, I, INFO, INSERT, J, K, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, L, LEFT, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, M, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, MENU, META, MINUS, MULTIPLY, MUTE, N, NOTIFICATION, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_DOWN, NP_LEFT, NP_MULTIPLY, NP_NUM_LOCK, NP_RIGHT, NP_SUBTRACT, NP_UP, NUM, O, P, PAGE_DOWN, PAGE_UP, PAUSE, PERCENT, PERIOD, PICTSYMBOLS, PLUS, POWER, PRINT_SCREEN, Q, QUESTION_MARK, QUOTE, R, RED_0, RIGHT, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, S, SCROLL_LOCK, SEARCH, SEMICOLON, SETTINGS, SHIFT, SLASH, SOFT_LEFT, SOFT_RIGHT, SPACE, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, T, TAB, TILDE, TV, TV_INPUT, TV_POWER, U, UNDERSCORE, UNKNOWN, UP, V, VERTICAL_BAR, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, W, WINDOW, WINDOWS, X, Y, YELLOW_0, Z, ZOOM_IN, ZOOM_OUT;
var Lplayn_core_Key_2_classLit = createForEnum(4, values_8);
function Keyboard$Event(time){
  Event$Input.call(this, time);
}

defineClass(167, 32, $intern_47);
var Lplayn_core_Keyboard$Event_2_classLit = createForClass(167);
function Keyboard$KeyEvent(time, key, down){
  Keyboard$Event.call(this, time);
  this.key_0 = key;
  this.down = down;
}

defineClass(104, 167, {38:1, 32:1, 104:1}, Keyboard$KeyEvent);
_.addFields = function addFields_1(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_7($append_6($append_5((builder.string += ', key=' , builder), this.key_0), ', down='), this.down);
}
;
_.name_1 = function name_4(){
  return 'Key';
}
;
_.down = false;
var Lplayn_core_Keyboard$KeyEvent_2_classLit = createForClass(104);
function Keyboard$TypedEvent(time, typedChar){
  Keyboard$Event.call(this, time);
  this.typedChar = typedChar;
}

defineClass(132, 167, {38:1, 32:1, 132:1}, Keyboard$TypedEvent);
_.addFields = function addFields_2(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_1((builder.string += ', typedChar=' , builder), this.typedChar);
}
;
_.name_1 = function name_5(){
  return 'Typed';
}
;
_.typedChar = 0;
var Lplayn_core_Keyboard$TypedEvent_2_classLit = createForClass(132);
function $debug(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , DEBUG), msg, null);
}

function $error(this$static, e){
  $log(this$static, ($clinit_Log$Level() , ERROR), 'init()', e);
}

function $info(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , INFO_0), msg, null);
}

function $log(this$static, level, msg, e){
  var lmsg;
  level.ordinal >= this$static.minLevel.ordinal && (lmsg = level + ': ' + msg , !!e && (lmsg += ': ' + e.getMessage()) , !!e && $printStackTrace(e) , $wnd.console && $wnd.console.info && (e != null?$wnd.console.info(lmsg, e):$wnd.console.info(lmsg)) , undefined , undefined);
}

function $warn(this$static, msg, e){
  $log(this$static, ($clinit_Log$Level() , WARN), msg, e);
}

defineClass(243, 1, {});
var Lplayn_core_Log_2_classLit = createForClass(243);
function $clinit_Log$Level(){
  $clinit_Log$Level = emptyMethod;
  DEBUG = new Log$Level('DEBUG', 0);
  INFO_0 = new Log$Level('INFO', 1);
  WARN = new Log$Level('WARN', 2);
  ERROR = new Log$Level('ERROR', 3);
}

function Log$Level(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_Log$Level();
  return initValues(getClassLiteralForArray(Lplayn_core_Log$Level_2_classLit, 1), $intern_1, 72, 0, [DEBUG, INFO_0, WARN, ERROR]);
}

defineClass(72, 7, {3:1, 9:1, 7:1, 72:1}, Log$Level);
var DEBUG, ERROR, INFO_0, WARN;
var Lplayn_core_Log$Level_2_classLit = createForEnum(72, values_9);
function Mouse$Event(time, x_0, y_0){
  Event$XY.call(this, time, x_0, y_0);
}

defineClass(133, 52, $intern_48);
var Lplayn_core_Mouse$Event_2_classLit = createForClass(133);
function Mouse$ButtonEvent(time, x_0, y_0, button, down){
  Mouse$Event.call(this, time, x_0, y_0);
  this.button_0 = button;
  this.down = down;
}

defineClass(105, 133, {38:1, 32:1, 52:1, 105:1, 58:1}, Mouse$ButtonEvent);
_.addFields = function addFields_3(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_6($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_7($append_6($append_5((builder.string += ', id=' , builder), this.button_0), ', down='), this.down);
}
;
_.name_1 = function name_6(){
  return 'Button';
}
;
_.down = false;
var Lplayn_core_Mouse$ButtonEvent_2_classLit = createForClass(105);
function $clinit_Mouse$ButtonEvent$Id(){
  $clinit_Mouse$ButtonEvent$Id = emptyMethod;
  LEFT_0 = new Mouse$ButtonEvent$Id('LEFT', 0);
  RIGHT_0 = new Mouse$ButtonEvent$Id('RIGHT', 1);
  MIDDLE = new Mouse$ButtonEvent$Id('MIDDLE', 2);
  X1 = new Mouse$ButtonEvent$Id('X1', 3);
  X2 = new Mouse$ButtonEvent$Id('X2', 4);
}

function Mouse$ButtonEvent$Id(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_10(){
  $clinit_Mouse$ButtonEvent$Id();
  return initValues(getClassLiteralForArray(Lplayn_core_Mouse$ButtonEvent$Id_2_classLit, 1), $intern_1, 63, 0, [LEFT_0, RIGHT_0, MIDDLE, X1, X2]);
}

defineClass(63, 7, {3:1, 9:1, 7:1, 63:1}, Mouse$ButtonEvent$Id);
var LEFT_0, MIDDLE, RIGHT_0, X1, X2;
var Lplayn_core_Mouse$ButtonEvent$Id_2_classLit = createForEnum(63, values_10);
function Mouse$MotionEvent(time, x_0, y_0, dx, dy){
  Mouse$Event.call(this, time, x_0, y_0);
  this.dx = dx;
  this.dy = dy;
}

defineClass(356, 133, $intern_48, Mouse$MotionEvent);
_.addFields = function addFields_4(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_6($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3($append_6($append_3((builder.string += ', dx=' , builder), this.dx), ', dy='), this.dy);
}
;
_.name_1 = function name_7(){
  return 'MotionEvent';
}
;
_.dx = 0;
_.dy = 0;
var Lplayn_core_Mouse$MotionEvent_2_classLit = createForClass(356);
function Mouse$WheelEvent(time, x_0, y_0, velocity){
  Mouse$Event.call(this, time, x_0, y_0);
  this.velocity = velocity;
}

defineClass(357, 133, $intern_48, Mouse$WheelEvent);
_.addFields = function addFields_5(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_6($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3((builder.string += ', velocity=' , builder), this.velocity);
}
;
_.name_1 = function name_8(){
  return 'Wheel';
}
;
_.velocity = 0;
var Lplayn_core_Mouse$WheelEvent_2_classLit = createForClass(357);
function $dispatchEvent(this$static, signal, event_0){
  var cause;
  try {
    $notify(signal, ($clinit_AbstractSignal() , EMIT), event_0, null, null);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 12)) {
      cause = $e0;
      $notifyEmit(this$static.errors, new Platform$Error);
      $warn(this$static.log_0, 'Event dispatch failure', cause);
    }
     else 
      throw unwrap($e0);
  }
}

function $emitFrame(this$static){
  var e;
  try {
    $notifyEmit(this$static.frame_0, this$static);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 12)) {
      e = $e0;
      $notifyEmit(this$static.errors, new Platform$Error);
      $warn(this$static.log_0, 'Frame tick exception', e);
    }
     else 
      throw unwrap($e0);
  }
}

function $reportError(this$static, message, cause){
  $notifyEmit(this$static.errors, new Platform$Error);
  $warn(this$static.log_0, message, cause);
}

defineClass(217, 1, {});
var Lplayn_core_Platform_2_classLit = createForClass(217);
function Platform$Error(){
}

defineClass(117, 1, {}, Platform$Error);
var Lplayn_core_Platform$Error_2_classLit = createForClass(117);
function $clinit_Platform$Lifecycle(){
  $clinit_Platform$Lifecycle = emptyMethod;
  PAUSE_0 = new Platform$Lifecycle('PAUSE', 0);
  RESUME = new Platform$Lifecycle('RESUME', 1);
  EXIT = new Platform$Lifecycle('EXIT', 2);
}

function Platform$Lifecycle(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_Platform$Lifecycle();
  return initValues(getClassLiteralForArray(Lplayn_core_Platform$Lifecycle_2_classLit, 1), $intern_1, 86, 0, [PAUSE_0, RESUME, EXIT]);
}

defineClass(86, 7, {3:1, 9:1, 7:1, 86:1}, Platform$Lifecycle);
var EXIT, PAUSE_0, RESUME;
var Lplayn_core_Platform$Lifecycle_2_classLit = createForEnum(86, values_11);
defineClass(326, 465, $intern_46);
_.end = function end_0(){
  $end(this);
  this.curTexId = 0;
}
;
_.curTexId = 0;
var Lplayn_core_TexturedBatch_2_classLit = createForClass(326);
function $addQuad(this$static, tint, m00, m01, m10, m11, tx, ty, left, top_0, right, bottom, sl, st, sr, sb){
  this$static.addQuad(tint, m00, m01, m10, m11, tx, ty, left, top_0, sl, st, right, top_0, sr, st, left, bottom, sl, sb, right, bottom, sr, sb);
}

function $addQuad_0(this$static, tex, tint, xf, x_0, y_0, w, h){
  var sb, sr;
  this$static.curTexId != 0 && this$static.curTexId != tex.id_0 && this$static.flush();
  this$static.curTexId = tex.id_0;
  sr = tex.config.repeatX?w / tex.displayWidth:1;
  sb = tex.config.repeatY?h / tex.displayHeight:1;
  $addQuad(this$static, tint, xf.m00, xf.m01, xf.m10, xf.m11, xf.tx, xf.ty, x_0, y_0, x_0 + w, y_0 + h, 0, 0, sr, sb);
}

function $addQuad_1(this$static, tex, tint, xf, dx, dy, dw, dh, sx, sy, sw, sh){
  var texHeight, texWidth;
  this$static.curTexId != 0 && this$static.curTexId != tex.id_0 && this$static.flush();
  this$static.curTexId = tex.id_0;
  texWidth = tex.displayWidth;
  texHeight = tex.displayHeight;
  $addQuad(this$static, tint, xf.m00, xf.m01, xf.m10, xf.m11, xf.tx, xf.ty, dx, dy, dx + dw, dy + dh, sx / texWidth, sy / texHeight, (sx + sw) / texWidth, (sy + sh) / texHeight);
}

function QuadBatch(gl){
  this.gl = gl;
}

defineClass(158, 326, $intern_46);
var Lplayn_core_QuadBatch_2_classLit = createForClass(158);
function $clinit_Scale(){
  $clinit_Scale = emptyMethod;
  ONE = new Scale(1);
}

function $computePath(path, scale){
  var didx, scaleFactor;
  if (scale <= 1)
    return path;
  scaleFactor = round_int(scale * 10);
  scaleFactor % 10 == 0 && (scaleFactor = ~~(scaleFactor / 10));
  didx = path.lastIndexOf('.');
  return didx == -1?path:path.substr(0, didx) + '@' + scaleFactor + 'x' + __substr(path, didx, path.length - didx);
}

function $getScaledResources(this$static, path){
  var rscale, rsrcs;
  rsrcs = new ArrayList;
  $add_0(rsrcs, new Scale$ScaledResource(this$static, $computePath(path, this$static.factor)));
  for (rscale = ifloor(this$static.factor); rscale > 1; rscale -= 1) {
    rscale != this$static.factor && $add_0(rsrcs, new Scale$ScaledResource(new Scale(rscale), $computePath(path, rscale)));
  }
  $add_0(rsrcs, new Scale$ScaledResource(ONE, path));
  return rsrcs;
}

function $invScaled(this$static, length_0){
  return length_0 / this$static.factor;
}

function $scaled(this$static, length_0){
  return this$static.factor * length_0;
}

function Scale(factor){
  $clinit_Scale();
  this.factor = factor;
}

defineClass(100, 1, {}, Scale);
_.toString$ = function toString_30(){
  return 'x' + this.factor;
}
;
_.factor = 0;
var ONE;
var Lplayn_core_Scale_2_classLit = createForClass(100);
function Scale$ScaledResource(scale, path){
  this.scale_0 = scale;
  this.path = path;
}

defineClass(125, 1, {}, Scale$ScaledResource);
_.toString$ = function toString_31(){
  return this.scale_0 + ': ' + this.path;
}
;
var Lplayn_core_Scale$ScaledResource_2_classLit = createForClass(125);
function Sound(){
  this.state = new RFuture(($clinit_AbstractValue() , new Value(new Try$Success(this))));
}

function Sound_0(state){
  this.state = state;
}

defineClass(159, 1, {}, Sound);
_.play_0 = function play_3(){
  return false;
}
;
_.setVolume_1 = function setVolume_3(volume){
}
;
_.stop_0 = function stop_4(){
}
;
var Lplayn_core_Sound_2_classLit = createForClass(159);
function $fail(this$static, error){
  this$static.state.fail(error);
}

function $succeed(this$static, impl){
  this$static.impl = impl;
  $setVolumeImpl(this$static, this$static.volume_0);
  $setLoopingImpl(this$static, this$static.looping);
  this$static.playing && this$static.impl.play_0();
  this$static.state.succeed(this$static);
}

defineClass(396, 159, {});
_.play_0 = function play_4(){
  this.playing = true;
  return !!this.impl && this.impl.play_0();
}
;
_.setVolume_1 = function setVolume_4(volume){
  this.volume_0 = volume < 0?0:volume > 1?1:volume;
  !!this.impl && $setVolumeImpl(this, this.volume_0);
}
;
_.stop_0 = function stop_5(){
  this.playing = false;
  !!this.impl && this.impl.stop_0();
}
;
_.looping = false;
_.playing = false;
_.volume_0 = 0;
var Lplayn_core_SoundImpl_2_classLit = createForClass(396);
function $begin_0(this$static){
  $bind(this$static.target);
  $beginBatch(this$static, this$static.batch);
  return this$static;
}

function $beginBatch(this$static, batch){
  batch.begin(this$static.target.this$01.viewPixelWidth, this$static.target.this$01.viewPixelHeight, true);
  return batch;
}

function $clear_1(this$static){
  this$static.batch.gl.glc.clearColor(0, 0, 0, 1);
  this$static.batch.gl.glc.clear(16384);
  return this$static;
}

function $draw_3(this$static, tile, x_0, y_0){
  return $draw_4(this$static, tile, x_0, y_0, tile.width_1(), tile.height_1());
}

function $draw_4(this$static, tile, x_0, y_0, w, h){
  tile.addToBatch(this$static.batch, this$static.tint, this$static.lastTrans, x_0, y_0, w, h);
  return this$static;
}

function $draw_5(this$static, tile, dx, dy, dw, dh, sw, sh){
  tile.addToBatch_0(this$static.batch, this$static.tint, this$static.lastTrans, dx, dy, dw, dh, 0, 0, sw, sh);
  return this$static;
}

function $drawLine(this$static, x0, y0, x1, y1){
  var dx, dy, length_0, temp, wx, wy, xf;
  if (x1 < x0) {
    temp = x0;
    x0 = x1;
    x1 = temp;
    temp = y0;
    y0 = y1;
    y1 = temp;
  }
  dx = x1 - x0;
  dy = y1 - y0;
  length_0 = Math.sqrt(dx * dx + dy * dy);
  wx = dx * 0.5 / length_0;
  wy = dy * 0.5 / length_0;
  xf = new AffineTransform;
  $setRotation(xf, atan2_0(dy, dx));
  xf.tx = x0 + wy;
  xf.ty = y0 - wx;
  multiply_0(this$static.lastTrans, xf, xf);
  $addQuad_0(this$static.batch, this$static.colorTex, combine(this$static.fillColor, this$static.tint), xf, 0, 0, length_0, 1);
  return this$static;
}

function $end_0(this$static){
  this$static.batch.end();
  return this$static;
}

function $fillRect_2(this$static, x_0, y_0, width_0, height){
  $addQuad_0(this$static.batch, this$static.colorTex, combine(this$static.fillColor, this$static.tint), this$static.lastTrans, x_0, y_0, width_0, height);
  return this$static;
}

function $restoreTx(this$static){
  var tsSize;
  tsSize = this$static.transformStack.array.length;
  this$static.transformStack.remove_0(--tsSize);
  this$static.lastTrans = this$static.transformStack.array.length == 0?null:$get(this$static.transformStack, tsSize - 1);
  return this$static;
}

function $rotate(this$static, angle){
  var cr, sr, top_0;
  sr = sin_0(angle);
  cr = cos_0(angle);
  top_0 = this$static.lastTrans;
  multiply(top_0.m00, top_0.m01, top_0.m10, top_0.m11, top_0.tx, top_0.ty, cr, sr, -sr, cr, 0, 0, top_0);
  return this$static;
}

function $saveTx(this$static){
  $add_0(this$static.transformStack, this$static.lastTrans = $copy(this$static.lastTrans));
  return this$static;
}

function $scale_0(this$static, sx, sy){
  $scale_1(this$static.lastTrans, sx, sy);
  return this$static;
}

function $setAlpha_0(this$static, alpha_0){
  var ialpha;
  ialpha = round_int(255 * (alpha_0 < 0?0:alpha_0 > 1?1:alpha_0));
  this$static.tint = ialpha << 24 | this$static.tint & $intern_41;
  return this$static;
}

function $setFillColor(this$static, color_0){
  this$static.fillColor = color_0;
  return this$static;
}

function $translate(this$static, x_0, y_0){
  $translate_0(this$static.lastTrans, x_0, y_0);
  return this$static;
}

function Surface(gfx, target, defaultBatch){
  this.transformStack = new ArrayList;
  new ArrayList;
  this.target = target;
  this.batch = defaultBatch;
  $add_0(this.transformStack, this.lastTrans = new AffineTransform);
  this.colorTex = $colorTex(gfx);
  $scale_0(this, target.this$01.scale_0.factor, target.this$01.scale_0.factor);
}

defineClass(327, 1, $intern_46, Surface);
_.fillColor = 0;
_.tint = -1;
var Lplayn_core_Surface_2_classLit = createForClass(327);
defineClass(463, 462, {});
_.toString$ = function toString_32(){
  return 'Tile[' + this.width_1() + 'x' + this.height_1() + '/' + pointToString(this.sx(), this.sy()) + '/' + pointToString(this.tx_0(), this.ty_0()) + '] <- ' + this.texture_0();
}
;
var Lplayn_core_Tile_2_classLit = createForClass(463);
function $reference(this$static){
  this$static.config.managed && ++this$static.refs;
}

function $update(this$static, image){
  var pixHeight, pixWidth, potHeight, potWidth, scaled;
  if (this$static.config.repeatX || this$static.config.repeatY || this$static.config.mipmaps) {
    pixWidth = image.pixelWidth;
    pixHeight = image.pixelHeight;
    potWidth = $toTexWidth(this$static.config, pixWidth);
    potHeight = $toTexWidth(this$static.config, pixHeight);
    if (potWidth != pixWidth || potHeight != pixHeight) {
      scaled = $createCanvasImpl(this$static.gfx, ($clinit_Scale() , ONE), potWidth, potHeight);
      $draw_6(image, scaled.ctx, 0, 0, potWidth, potHeight);
      $upload(scaled.image, this$static.gfx, this$static);
    }
     else 
      $upload(image, this$static.gfx, this$static);
  }
   else 
    $upload(image, this$static.gfx, this$static);
  this$static.config.mipmaps && (this$static.gfx.gl.glc.generateMipmap(3553) , undefined);
}

function Texture(gfx, id_0, config, pixWidth, pixHeight, scale, dispWidth, dispHeight){
  this.gfx = gfx;
  this.id_0 = id_0;
  this.config = config;
  this.pixelWidth = pixWidth;
  this.pixelHeight = pixHeight;
  this.scale_0 = scale;
  this.displayWidth = dispWidth;
  this.displayHeight = dispHeight;
}

function nextPOT(value_0){
  var bit, count, highest, ii;
  bit = 32768;
  highest = -1;
  count = 0;
  for (ii = 15; ii >= 0; --ii , bit >>= 1) {
    if ((value_0 & bit) == 0)
      continue;
    ++count;
    highest == -1 && (highest = ii);
  }
  return count > 1?1 << highest + 1:value_0;
}

defineClass(342, 463, $intern_46, Texture);
_.addToBatch = function addToBatch(batch, tint, tx, x_0, y_0, width_0, height){
  $addQuad_0(batch, this, tint, tx, x_0, y_0, width_0, height);
}
;
_.addToBatch_0 = function addToBatch_0(batch, tint, tx, dx, dy, dw, dh, sx, sy, sw, sh){
  $addQuad_1(batch, this, tint, tx, dx, dy, dw, dh, sx, sy, sw, sh);
}
;
_.height_1 = function height_1(){
  return this.displayHeight;
}
;
_.sx = function sx_0(){
  return 0;
}
;
_.sy = function sy_0(){
  return 0;
}
;
_.texture_0 = function texture_0(){
  return this;
}
;
_.toString$ = function toString_33(){
  return 'Texture[id=' + this.id_0 + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', dsize=' + this.displayWidth + 'x' + this.displayHeight + ' @ ' + this.scale_0 + ', config=' + this.config + ']';
}
;
_.tx_0 = function tx_0(){
  return 1;
}
;
_.ty_0 = function ty_0(){
  return 1;
}
;
_.width_1 = function width_1(){
  return this.displayWidth;
}
;
_.displayHeight = 0;
_.displayWidth = 0;
_.disposed = false;
_.id_0 = 0;
_.pixelHeight = 0;
_.pixelWidth = 0;
_.refs = 0;
var Lplayn_core_Texture_2_classLit = createForClass(342);
function Texture$1(this$0, val$tileWidth, val$tileHeight, val$tileX, val$tileY){
  this.this$01 = this$0;
  this.val$tileWidth2 = val$tileWidth;
  this.val$tileHeight3 = val$tileHeight;
  this.val$tileX4 = val$tileX;
  this.val$tileY5 = val$tileY;
}

defineClass(343, 463, {}, Texture$1);
_.addToBatch = function addToBatch_1(batch, tint, tx, x_0, y_0, width_0, height){
  $addQuad_1(batch, this.this$01, tint, tx, x_0, y_0, width_0, height, this.val$tileX4, this.val$tileY5, this.val$tileWidth2, this.val$tileHeight3);
}
;
_.addToBatch_0 = function addToBatch_2(batch, tint, tx, dx, dy, dw, dh, sx, sy, sw, sh){
  $addQuad_1(batch, this.this$01, tint, tx, dx, dy, dw, dh, this.val$tileX4 + sx, this.val$tileY5 + sy, sw, sh);
}
;
_.height_1 = function height_2(){
  return this.val$tileHeight3;
}
;
_.sx = function sx_1(){
  return this.val$tileX4 / this.this$01.displayWidth;
}
;
_.sy = function sy_1(){
  return this.val$tileY5 / this.this$01.displayHeight;
}
;
_.texture_0 = function texture_1(){
  return this.this$01;
}
;
_.tx_0 = function tx_1(){
  return (this.val$tileX4 + this.val$tileWidth2) / this.this$01.displayHeight;
}
;
_.ty_0 = function ty_1(){
  return (this.val$tileY5 + this.val$tileWidth2) / this.this$01.displayHeight;
}
;
_.width_1 = function width_2(){
  return this.val$tileWidth2;
}
;
_.val$tileHeight3 = 0;
_.val$tileWidth2 = 0;
_.val$tileX4 = 0;
_.val$tileY5 = 0;
var Lplayn_core_Texture$1_2_classLit = createForClass(343);
function $clinit_Texture$Config(){
  $clinit_Texture$Config = emptyMethod;
  DEFAULT = new Texture$Config(true);
  UNMANAGED = new Texture$Config(false);
}

function $toTexHeight(this$static, sourceHeight){
  return this$static.repeatY || this$static.mipmaps?nextPOT(sourceHeight):sourceHeight;
}

function $toTexWidth(this$static, sourceWidth){
  return this$static.repeatX || this$static.mipmaps?nextPOT(sourceWidth):sourceWidth;
}

function Texture$Config(managed){
  this.managed = managed;
  this.repeatX = false;
  this.repeatY = false;
  this.minFilter = 9729;
  this.magFilter = 9729;
  this.mipmaps = false;
}

defineClass(163, 1, {}, Texture$Config);
_.toString$ = function toString_34(){
  var repstr;
  repstr = (this.repeatX?'x':'') + (this.repeatY?'y':'');
  return '[managed=' + this.managed + ', repeat=' + repstr + ', filter=' + this.minFilter + '/' + this.magFilter + ', mipmaps=' + this.mipmaps + ']';
}
;
_.magFilter = 0;
_.managed = false;
_.minFilter = 0;
_.mipmaps = false;
_.repeatX = false;
_.repeatY = false;
var DEFAULT, UNMANAGED;
var Lplayn_core_Texture$Config_2_classLit = createForClass(163);
function $fragment(){
  var str;
  str = new StringBuilder_1('#ifdef GL_ES\nprecision lowp float;\n#else\n#define lowp\n#define mediump\n#define highp\n#endif\n');
  str.string += 'uniform lowp sampler2D u_Texture;\n';
  str.string += 'varying mediump vec2 v_TexCoord;\nvarying lowp vec4 v_Color;\n';
  str.string += 'void main(void) {\n';
  str.string += '  vec4 textureColor = texture2D(u_Texture, v_TexCoord);\n';
  str.string += '  textureColor.rgb *= v_Color.rgb;\n';
  str.string += '  textureColor *= v_Color.a;\n';
  str.string += '  gl_FragColor = textureColor;\n}';
  return str.string;
}

function combine(curTint, tint){
  var newA, newB, newG, newR;
  newA = ((curTint >> 24 & 255) * ((tint >> 24 & 255) + 1) & $intern_43) << 16;
  if ((tint & $intern_41) == $intern_41) {
    return newA | curTint & $intern_41;
  }
  newR = ((curTint >> 16 & 255) * ((tint >> 16 & 255) + 1) & $intern_43) << 8;
  newG = (curTint >> 8 & 255) * ((tint >> 8 & 255) + 1) & $intern_43;
  newB = (curTint & 255) * ((tint & 255) + 1) >> 8 & 255;
  return newA | newR | newG | newB;
}

function Touch$Event(time, x_0, y_0, kind, id_0){
  Event$XY.call(this, time, x_0, y_0);
  this.kind = kind;
  this.id_0 = id_0;
  this.pressure = -1;
  this.size_0 = -1;
}

defineClass(97, 52, {38:1, 32:1, 52:1, 97:1, 58:1}, Touch$Event);
_.addFields = function addFields_6(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_6($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3($append_6($append_3($append_6($append_4($append_6($append_5((builder.string += ', kind=' , builder), this.kind), ', id='), this.id_0), ', pressure='), this.pressure), ', size='), this.size_0);
}
;
_.name_1 = function name_9(){
  return 'Touch';
}
;
_.id_0 = 0;
_.pressure = 0;
_.size_0 = 0;
var Lplayn_core_Touch$Event_2_classLit = createForClass(97);
function $clinit_Touch$Event$Kind(){
  $clinit_Touch$Event$Kind = emptyMethod;
  START = new Touch$Event$Kind('START', 0);
  MOVE = new Touch$Event$Kind('MOVE', 1);
  END_0 = new Touch$Event$Kind('END', 2);
  CANCEL = new Touch$Event$Kind('CANCEL', 3);
}

function Touch$Event$Kind(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_Touch$Event$Kind();
  return initValues(getClassLiteralForArray(Lplayn_core_Touch$Event$Kind_2_classLit, 1), $intern_1, 79, 0, [START, MOVE, END_0, CANCEL]);
}

defineClass(79, 7, {3:1, 9:1, 7:1, 79:1}, Touch$Event$Kind);
var CANCEL, END_0, MOVE, START;
var Lplayn_core_Touch$Event$Kind_2_classLit = createForEnum(79, values_12);
function $clinit_TriangleBatch(){
  $clinit_TriangleBatch = emptyMethod;
  QUAD_INDICES = initValues(getClassLiteralForArray(I_classLit, 1), $intern_32, 0, 7, [0, 1, 2, 1, 3, 2]);
}

function $addElems(this$static, vertIdx, indices, indicesLen){
  var data_0, ii, ll, offset;
  data_0 = this$static.elements;
  offset = this$static.elemPos;
  for (ii = 0 , ll = indicesLen; ii < ll; ii++) {
    data_0[offset++] = narrow_short(vertIdx + indices[ii]);
  }
  this$static.elemPos = offset;
}

function $beginPrimitive(this$static){
  var availElems, availVerts, elems, vertIdx, verts;
  vertIdx = ~~(this$static.vertPos / 12);
  verts = vertIdx + 4;
  elems = this$static.elemPos + 6;
  availVerts = ~~(this$static.vertices.length / 12);
  availElems = this$static.elements.length;
  if (verts <= availVerts && elems <= availElems)
    return vertIdx;
  $flush_0(this$static);
  verts > availVerts && $expandVerts(this$static, verts);
  elems > availElems && $expandElems(this$static, elems);
  return 0;
}

function $expandElems(this$static, elemCount){
  var newElems;
  newElems = this$static.elements.length;
  while (newElems < elemCount)
    newElems += 96;
  this$static.elements = initDim(S_classLit, $intern_23, 0, newElems, 7, 1);
}

function $expandVerts(this$static, vertCount){
  var newVerts;
  newVerts = ~~(this$static.vertices.length / 12);
  while (newVerts < vertCount)
    newVerts += 64;
  this$static.vertices = initDim(F_classLit, $intern_23, 0, newVerts * 12, 7, 1);
}

function $flush_0(this$static){
  $flush(this$static);
  if (this$static.vertPos > 0) {
    $glBindTexture(this$static.gl, this$static.curTexId);
    $checkError(this$static.gl);
    if (this$static.delayedBinding) {
      $glBindBuffer(this$static.gl, $intern_49, this$static.verticesId);
      $glBindVertAttrib(this$static, this$static.aMatrix, 4, 0);
      $glBindVertAttrib(this$static, this$static.aTranslation, 2, 16);
      $glBindVertAttrib(this$static, this$static.aColor, 2, 24);
      $glBindVertAttrib(this$static, this$static.aPosition, 2, 32);
      $glBindVertAttrib(this$static, this$static.aTexCoord, 2, 40);
      $glBindBuffer(this$static.gl, $intern_50, this$static.elementsId);
      $activeTexture(this$static.gl.glc, 33984);
      $glUniform1i(this$static.gl, this$static.uTexture);
      $checkError(this$static.gl);
    }
    $setFloatBuffer(this$static.gl.bufs, this$static.vertices, this$static.vertPos);
    $glBufferData(this$static.gl, $intern_49, this$static.vertPos * 4, this$static.gl.bufs.floatBuffer, 35040);
    $setShortBuffer(this$static.gl.bufs, this$static.elements, this$static.elemPos);
    $glBufferData(this$static.gl, $intern_50, this$static.elemPos * 2, this$static.gl.bufs.shortBuffer, 35040);
    $checkError(this$static.gl);
    $glDrawElements(this$static.gl, this$static.elemPos);
    $checkError(this$static.gl);
    this$static.vertPos = 0;
    this$static.elemPos = 0;
  }
}

function $glBindVertAttrib(this$static, loc, size_0, offset){
  $glEnableVertexAttribArray(this$static.gl, loc);
  $glVertexAttribPointer(this$static.gl, loc, size_0, 5126, 48, offset);
}

function TriangleBatch(gl){
  var ids;
  $clinit_TriangleBatch();
  QuadBatch.call(this, gl);
  this.delayedBinding = $equals('Intel', gl.glc.getParameter(7936));
  this.program = new GLProgram(gl, 'uniform vec2 u_HScreenSize;\nuniform float u_Flip;\nattribute vec4 a_Matrix;\nattribute vec2 a_Translation;\nattribute vec2 a_Color;\nattribute vec2 a_Position;\nattribute vec2 a_TexCoord;\nvarying vec2 v_TexCoord;\nvarying vec4 v_Color;\nvoid main(void) {\nmat3 transform = mat3(\n  a_Matrix[0],      a_Matrix[1],      0,\n  a_Matrix[2],      a_Matrix[3],      0,\n  a_Translation[0], a_Translation[1], 1);\ngl_Position = vec4(transform * vec3(a_Position, 1.0), 1);\ngl_Position.xy /= u_HScreenSize.xy;\ngl_Position.xy -= 1.0;\ngl_Position.y *= u_Flip;\nv_TexCoord = a_TexCoord;\nfloat red = mod(a_Color.x, 256.0);\nfloat alpha = (a_Color.x - red) / 256.0;\nfloat blue = mod(a_Color.y, 256.0);\nfloat green = (a_Color.y - blue) / 256.0;\nv_Color = vec4(red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0);\n}', $fragment());
  this.uTexture = $getUniformLocation_0(this.program, 'u_Texture');
  this.uHScreenSize = $getUniformLocation_0(this.program, 'u_HScreenSize');
  this.uFlip = $getUniformLocation_0(this.program, 'u_Flip');
  this.aMatrix = $getAttribLocation_0(this.program, 'a_Matrix');
  this.aTranslation = $getAttribLocation_0(this.program, 'a_Translation');
  this.aColor = $getAttribLocation_0(this.program, 'a_Color');
  this.aPosition = $getAttribLocation_0(this.program, 'a_Position');
  this.aTexCoord = $getAttribLocation_0(this.program, 'a_TexCoord');
  this.stableAttrs = initDim(F_classLit, $intern_23, 0, 8, 7, 1);
  this.vertices = initDim(F_classLit, $intern_23, 0, 768, 7, 1);
  this.elements = initDim(S_classLit, $intern_23, 0, 96, 7, 1);
  ids = initDim(I_classLit, $intern_32, 0, 2, 7, 1);
  $genObjects_0(gl, ids, ($clinit_HtmlGL20$WebGLObjectType() , BUFFER));
  this.verticesId = ids[0];
  this.elementsId = ids[1];
  $checkError(gl);
}

function add_9(into, offset, x_0, y_0, sx, sy){
  into[offset++] = x_0;
  into[offset++] = y_0;
  into[offset++] = sx;
  into[offset++] = sy;
  return offset;
}

defineClass(162, 158, $intern_46, TriangleBatch);
_.addQuad = function addQuad(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var offset, stables, vertIdx, verts, stables_0;
  stables_0 = this.stableAttrs;
  stables_0[0] = m00;
  stables_0[1] = m01;
  stables_0[2] = m10;
  stables_0[3] = m11;
  stables_0[4] = tx;
  stables_0[5] = ty;
  stables_0[6] = tint >> 16 & $intern_25;
  stables_0[7] = tint & $intern_25;
  vertIdx = $beginPrimitive(this);
  offset = this.vertPos;
  verts = this.vertices;
  stables = this.stableAttrs;
  offset = add_9(verts, (arraycopy(stables, 0, verts, offset, stables.length) , offset + stables.length), x1, y1, sx1, sy1);
  offset = add_9(verts, (arraycopy(stables, 0, verts, offset, stables.length) , offset + stables.length), x2, y2, sx2, sy2);
  offset = add_9(verts, (arraycopy(stables, 0, verts, offset, stables.length) , offset + stables.length), x3, y3, sx3, sy3);
  offset = add_9(verts, (arraycopy(stables, 0, verts, offset, stables.length) , offset + stables.length), x4, y4, sx4, sy4);
  this.vertPos = offset;
  $addElems(this, vertIdx, QUAD_INDICES, QUAD_INDICES.length);
}
;
_.begin = function begin_1(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  this.delayedBinding || ($glBindBuffer(this.gl, $intern_49, this.verticesId) , $glBindVertAttrib(this, this.aMatrix, 4, 0) , $glBindVertAttrib(this, this.aTranslation, 2, 16) , $glBindVertAttrib(this, this.aColor, 2, 24) , $glBindVertAttrib(this, this.aPosition, 2, 32) , $glBindVertAttrib(this, this.aTexCoord, 2, 40) , $glBindBuffer(this.gl, $intern_50, this.elementsId) , $activeTexture(this.gl.glc, 33984) , $glUniform1i(this.gl, this.uTexture));
  $checkError(this.gl);
}
;
_.end = function end_1(){
  $end(this);
  this.curTexId = 0;
  $glDisableVertexAttribArray(this.gl, this.aMatrix);
  $glDisableVertexAttribArray(this.gl, this.aTranslation);
  $glDisableVertexAttribArray(this.gl, this.aColor);
  $glDisableVertexAttribArray(this.gl, this.aPosition);
  $glDisableVertexAttribArray(this.gl, this.aTexCoord);
  $checkError(this.gl);
}
;
_.flush = function flush_0(){
  $flush_0(this);
}
;
_.toString$ = function toString_35(){
  return 'tris/' + ~~(this.elements.length / QUAD_INDICES.length);
}
;
_.aColor = 0;
_.aMatrix = 0;
_.aPosition = 0;
_.aTexCoord = 0;
_.aTranslation = 0;
_.delayedBinding = false;
_.elemPos = 0;
_.elementsId = 0;
_.uFlip = 0;
_.uHScreenSize = 0;
_.uTexture = 0;
_.vertPos = 0;
_.verticesId = 0;
var QUAD_INDICES;
var Lplayn_core_TriangleBatch_2_classLit = createForClass(162);
function $flush_1(this$static){
  $flush(this$static);
  if (this$static.quadCounter > 0) {
    $glBindTexture(this$static.gl, this$static.curTexId);
    $checkError(this$static.gl);
    $glUniform4fv(this$static.gl, this$static.uData, this$static.quadCounter * 3, this$static.data_0);
    $glDrawElements(this$static.gl, this$static.quadCounter * 6);
    $checkError(this$static.gl);
    this$static.quadCounter = 0;
  }
}

function UniformQuadBatch(gl){
  UniformQuadBatch_0.call(this, gl);
}

function UniformQuadBatch_0(gl){
  var base, base0, base1, base2, base3, ee, elems, ids, ii, maxVecs, verts, vv;
  QuadBatch.call(this, gl);
  maxVecs = usableMaxUniformVectors(gl);
  if (maxVecs < 3)
    throw new RuntimeException_0('GL_MAX_VERTEX_UNIFORM_VECTORS too low: have ' + maxVecs + ', need at least ' + 3);
  this.maxQuads = ~~(maxVecs / 3);
  this.program = new GLProgram(gl, $replace($replace('uniform vec2 u_HScreenSize;\nuniform float u_Flip;\nuniform vec4 u_Data[_VEC4S_PER_QUAD_*_MAX_QUADS_];\nattribute vec3 a_Vertex;\nvarying vec2 v_TexCoord;\nvarying vec4 v_Color;\nvoid main(void) {\nint index = _VEC4S_PER_QUAD_*int(a_Vertex.z);\nvec4 mat = u_Data[index+0];\nvec4 txc = u_Data[index+1];\nvec4 tcs = u_Data[index+2];\nmat3 transform = mat3(\n  mat.x, mat.y, 0,\n  mat.z, mat.w, 0,\n  txc.x, txc.y, 1);\ngl_Position = vec4(transform * vec3(a_Vertex.xy, 1.0), 1.0);\ngl_Position.xy /= u_HScreenSize.xy;\ngl_Position.xy -= 1.0;\ngl_Position.y *= u_Flip;\nv_TexCoord = a_Vertex.xy * tcs.xy + txc.zw;\nfloat red = mod(tcs.z, 256.0);\nfloat alpha = (tcs.z - red) / 256.0;\nfloat blue = mod(tcs.w, 256.0);\nfloat green = (tcs.w - blue) / 256.0;\nv_Color = vec4(red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0);\n}', '_MAX_QUADS_', '' + this.maxQuads), '_VEC4S_PER_QUAD_', '3'), $fragment());
  this.uTexture = $getUniformLocation_0(this.program, 'u_Texture');
  this.uHScreenSize = $getUniformLocation_0(this.program, 'u_HScreenSize');
  this.uFlip = $getUniformLocation_0(this.program, 'u_Flip');
  this.uData = $getUniformLocation_0(this.program, 'u_Data');
  this.aVertex = $getAttribLocation_0(this.program, 'a_Vertex');
  verts = initDim(S_classLit, $intern_23, 0, this.maxQuads * 4 * 3, 7, 1);
  elems = initDim(S_classLit, $intern_23, 0, this.maxQuads * 6, 7, 1);
  vv = 0;
  ee = 0;
  for (ii = 0; ii < this.maxQuads; ii++) {
    verts[vv++] = 0;
    verts[vv++] = 0;
    verts[vv++] = ii;
    verts[vv++] = 1;
    verts[vv++] = 0;
    verts[vv++] = ii;
    verts[vv++] = 0;
    verts[vv++] = 1;
    verts[vv++] = ii;
    verts[vv++] = 1;
    verts[vv++] = 1;
    verts[vv++] = ii;
    base = narrow_short(ii * 4);
    base0 = base;
    base1 = ++base;
    base2 = ++base;
    base3 = ++base;
    elems[ee++] = base0;
    elems[ee++] = base1;
    elems[ee++] = base2;
    elems[ee++] = base1;
    elems[ee++] = base3;
    elems[ee++] = base2;
  }
  this.data_0 = initDim(F_classLit, $intern_23, 0, this.maxQuads * 3 * 4, 7, 1);
  ids = initDim(I_classLit, $intern_32, 0, 2, 7, 1);
  $genObjects_0(gl, ids, ($clinit_HtmlGL20$WebGLObjectType() , BUFFER));
  this.verticesId = ids[0];
  this.elementsId = ids[1];
  $glBindBuffer(gl, $intern_49, this.verticesId);
  $setShortBuffer(gl.bufs, verts, verts.length);
  $glBufferData(gl, $intern_49, verts.length * 2, gl.bufs.shortBuffer, 35044);
  $glBindBuffer(gl, $intern_50, this.elementsId);
  $setShortBuffer(gl.bufs, elems, elems.length);
  $glBufferData(gl, $intern_50, elems.length * 2, gl.bufs.shortBuffer, 35044);
  $checkError(gl);
}

function usableMaxUniformVectors(gl){
  var glErr, maxVecs;
  maxVecs = gl.glc.getParameter(36347) - 3;
  glErr = gl.glc.getError();
  if (glErr != 0)
    throw new RuntimeException_0('Unable to query GL_MAX_VERTEX_UNIFORM_VECTORS,  error ' + glErr);
  return maxVecs;
}

defineClass(161, 158, $intern_46, UniformQuadBatch);
_.addQuad = function addQuad_0(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var dh, dw, pos;
  pos = this.quadCounter * 3 * 4;
  dw = x2 - x1;
  dh = y3 - y1;
  this.data_0[pos++] = m00 * dw;
  this.data_0[pos++] = m01 * dw;
  this.data_0[pos++] = m10 * dh;
  this.data_0[pos++] = m11 * dh;
  this.data_0[pos++] = tx + m00 * x1 + m10 * y1;
  this.data_0[pos++] = ty + m01 * x1 + m11 * y1;
  this.data_0[pos++] = sx1;
  this.data_0[pos++] = sy1;
  this.data_0[pos++] = sx2 - sx1;
  this.data_0[pos++] = sy3 - sy1;
  this.data_0[pos++] = tint >> 16 & $intern_25;
  this.data_0[pos++] = tint & $intern_25;
  ++this.quadCounter;
  this.quadCounter >= this.maxQuads && $flush_1(this);
}
;
_.begin = function begin_2(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  $glBindBuffer(this.gl, $intern_49, this.verticesId);
  $glEnableVertexAttribArray(this.gl, this.aVertex);
  $glVertexAttribPointer(this.gl, this.aVertex, 3, 5122, 0, 0);
  $glBindBuffer(this.gl, $intern_50, this.elementsId);
  $activeTexture(this.gl.glc, 33984);
  $glUniform1i(this.gl, this.uTexture);
  $checkError(this.gl);
}
;
_.end = function end_2(){
  $end(this);
  this.curTexId = 0;
  $glDisableVertexAttribArray(this.gl, this.aVertex);
  $checkError(this.gl);
}
;
_.flush = function flush_1(){
  $flush_1(this);
}
;
_.toString$ = function toString_36(){
  return 'uquad/' + this.maxQuads;
}
;
_.aVertex = 0;
_.elementsId = 0;
_.maxQuads = 0;
_.quadCounter = 0;
_.uData = 0;
_.uFlip = 0;
_.uHScreenSize = 0;
_.uTexture = 0;
_.verticesId = 0;
var Lplayn_core_UniformQuadBatch_2_classLit = createForClass(161);
function $getBundle(this$static, collection){
  var clientBundle, entry, entry$iterator, regExp;
  clientBundle = null;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.clientBundles)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , entry$iterator.current.next_0());
    regExp = entry.getKey();
    !!$exec(new RegExp(regExp), collection) && (clientBundle = entry.getValue());
  }
  return clientBundle;
}

function $getImage(this$static, path){
  var assetScale, rsrcs;
  assetScale = ($clinit_Scale() , ONE);
  rsrcs = $getScaledResources(assetScale, path);
  return $getImage_0(this$static, (checkElementIndex(0, rsrcs.array.length) , rsrcs.array[0]).path, (checkElementIndex(0, rsrcs.array.length) , rsrcs.array[0]).scale_0);
}

function $getImage_0(this$static, path, scale){
  var url_0, img;
  url_0 = this$static.pathPrefix + path;
  $getBundle(this$static, path);
  return img = $doc.createElement('img') , 'crossOrigin' in img && img.setAttribute('crossOrigin', 'anonymous') , img.src = url_0 , new HtmlImage_0(this$static.plat.graphics, scale, img, url_0);
}

function $getSound(this$static, path){
  var url_0;
  url_0 = this$static.pathPrefix + path;
  $getBundle(this$static, path);
  url_0 += '.mp3';
  return $createSound_0(this$static.plat.audio, url_0);
}

function HtmlAssets(plat){
  this.clientBundles = new HashMap;
  this.pathPrefix = $moduleBase;
  this.plat = plat;
}

defineClass(223, 450, {}, HtmlAssets);
var Lplayn_html_HtmlAssets_2_classLit = createForClass(223);
function $createSound_0(this$static, url_0){
  var sound;
  sound = $createSound(this$static.soundController, url_0);
  return new HtmlSound(this$static.plat.exec_0, sound);
}

function HtmlAudio(plat){
  var types;
  this.soundController = new SoundController;
  this.plat = plat;
  types = this.soundController.preferredSoundTypes;
  $debug(plat.log_0, 'Preferred sound type(s): ' + types);
  maybeCreateAudioContext();
}

function maybeCreateAudioContext(){
  try {
    return new AudioContext;
  }
   catch (ignore) {
  }
  try {
    return new webkitAudioContext;
  }
   catch (ignore) {
  }
  return null;
}

defineClass(259, 454, {}, HtmlAudio);
var Lplayn_html_HtmlAudio_2_classLit = createForClass(259);
function $fillRect_3(this$static, w, h){
  $fillRect(this$static.ctx, 0, 0, w, h);
  return this$static;
}

function HtmlCanvas(image){
  var scale;
  Canvas_0.call(this, image);
  this.ctx = $getContext2d(image.canvas);
  scale = image.scale_0.factor;
  $scale(this.ctx, scale, scale);
}

defineClass(171, 354, $intern_46, HtmlCanvas);
var Lplayn_html_HtmlCanvas_2_classLit = createForClass(171);
function $createObject(this$static, object, type_0){
  $push(this$static.webGLObjects, object);
  $push_0(this$static.webGLObjectTypes, type_0.ordinal);
  return this$static.webGLObjects.length - 1;
}

function $deleteObject(this$static, index_0, type_0){
  var object;
  object = this$static.webGLObjects[index_0];
  $set_0(this$static.webGLObjects, index_0, null);
  this$static.webGLObjectTypes[index_0] = 0;
  switch (type_0.ordinal) {
    case 1:
      $deleteBuffer(this$static.glc, object);
      break;
    case 2:
      $deleteFramebuffer(this$static.glc, object);
      break;
    case 3:
      $deleteProgram(this$static.glc, object);
      break;
    case 4:
      $deleteRenderbuffer(this$static.glc, object);
      break;
    case 5:
      $deleteShader(this$static.glc, object);
      break;
    case 6:
      $deleteTexture(this$static.glc, object);
  }
}

function $genObject(this$static, type_0){
  switch (type_0.ordinal) {
    case 1:
      return this$static.glc.createBuffer();
    case 2:
      return this$static.glc.createFramebuffer();
    case 3:
      return this$static.glc.createProgram();
    case 4:
      return this$static.glc.createRenderbuffer();
    case 6:
      return this$static.glc.createTexture();
    default:throw new RuntimeException_0('genObject(s) not supported for type ' + type_0);
  }
}

function $genObjects(this$static, names, type_0){
  var i, object;
  for (i = 0; i < 1; i++) {
    object = $genObject(this$static, type_0);
    $put_1(names, i + names.position_0, $createObject(this$static, object, type_0));
  }
}

function $genObjects_0(this$static, names, type_0){
  var i, object;
  for (i = 0; i < 2; i++) {
    object = $genObject(this$static, type_0);
    names[i] = $createObject(this$static, object, type_0);
  }
}

function $getTypedArray(buffer, type_0, byteSize){
  var arrayHolder, bufferElementSize, byteOffset, webGLArray;
  if (!instanceOf(buffer, 140)) {
    throw new RuntimeException_0('Native buffer required ' + buffer);
  }
  arrayHolder = buffer;
  bufferElementSize = arrayHolder.getElementSize();
  webGLArray = arrayHolder.getTypedArray();
  byteSize == -1 && (byteSize = (buffer.limit - buffer.position_0) * bufferElementSize);
  if (byteSize == buffer.capacity * bufferElementSize && type_0 == arrayHolder.getElementType()) {
    return webGLArray;
  }
  byteOffset = webGLArray.byteOffset + buffer.position_0 * bufferElementSize;
  switch (type_0) {
    case 5126:
      return create_0(webGLArray.buffer, byteOffset, ~~(byteSize / 4));
    case 5121:
      return create_5(webGLArray.buffer, byteOffset, byteSize);
    case 5123:
      return create_4(webGLArray.buffer, byteOffset, ~~(byteSize / 2));
    case 5124:
      return create_2(webGLArray.buffer, byteOffset, ~~(byteSize / 4));
    case 5122:
      return create_1(webGLArray.buffer, byteOffset, ~~(byteSize / 2));
    case 5120:
      return create_3(webGLArray.buffer, byteOffset, byteSize);
    default:throw new IllegalArgumentException_0('Type: ' + type_0);
  }
}

function $glBindBuffer(this$static, target, buffer){
  var webGlBuf;
  webGlBuf = this$static.webGLObjects[buffer];
  target == $intern_49?(this$static.requestedArrayBuffer = webGlBuf):target == $intern_50?(this$static.requestedElementArrayBuffer = webGlBuf):$bindBuffer(this$static.glc, target, webGlBuf);
}

function $glBindFramebuffer(this$static){
  $bindFramebuffer(this$static.glc, 36160, this$static.webGLObjects[0]);
}

function $glBindTexture(this$static, textureId){
  $bindTexture(this$static.glc, 3553, this$static.webGLObjects[textureId]);
}

function $glBufferData(this$static, target, byteSize, data_0, usage){
  if (target == $intern_49) {
    if (this$static.requestedArrayBuffer != this$static.boundArrayBuffer) {
      $bindBuffer(this$static.glc, $intern_49, this$static.requestedArrayBuffer);
      this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
    }
  }
   else if (target == $intern_50) {
    if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
      $bindBuffer(this$static.glc, $intern_50, this$static.requestedElementArrayBuffer);
      this$static.boundElementArrayBuffer = this$static.requestedElementArrayBuffer;
    }
  }
  $bufferData(this$static.glc, target, $getTypedArray(data_0, 5120, byteSize), usage);
}

function $glCompileShader(this$static, shader){
  $compileShader(this$static.glc, this$static.webGLObjects[shader]);
}

function $glCreateShader(this$static, type_0){
  return $createObject(this$static, $createShader(this$static.glc, type_0), ($clinit_HtmlGL20$WebGLObjectType() , SHADER));
}

function $glDisableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays &= ~(1 << index_0);
}

function $glDrawElements(this$static, count){
  $prepareDraw(this$static);
  if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
    $bindBuffer(this$static.glc, $intern_50, this$static.requestedElementArrayBuffer);
    this$static.boundElementArrayBuffer = this$static.requestedElementArrayBuffer;
  }
  $drawElements(this$static.glc, 4, count, 5123, 0);
}

function $glEnableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays |= 1 << index_0;
}

function $glGetAttribLocation(this$static, program, name_0){
  return $getAttribLocation(this$static.glc, this$static.webGLObjects[program], name_0);
}

function $glGetShaderInfoLog(this$static, shader){
  return $getShaderInfoLog(this$static.glc, this$static.webGLObjects[shader]);
}

function $glGetShaderiv(this$static, shader, params){
  params[0] = $getShaderParameterb(this$static.glc, this$static.webGLObjects[shader], 35713)?1:0;
}

function $glGetUniformLocation(this$static, program, name_0){
  return $createObject(this$static, $getUniformLocation(this$static.glc, this$static.webGLObjects[program], name_0), ($clinit_HtmlGL20$WebGLObjectType() , UNIFORM_LOCATION));
}

function $glShaderSource(this$static, shader, string){
  $shaderSource(this$static.glc, this$static.webGLObjects[shader], string);
}

function $glTexImage2D(this$static, image){
  $texImage2D(this$static.glc, 3553, 0, 6408, 6408, 5121, image);
  $checkError(this$static);
}

function $glTexParameteri(this$static, glTextureMinFilter, glFilterMin){
  $texParameteri(this$static.glc, 3553, glTextureMinFilter, glFilterMin);
}

function $glUniform1f(this$static, location_0, x_0){
  $uniform1f(this$static.glc, this$static.webGLObjects[location_0], x_0);
}

function $glUniform1i(this$static, location_0){
  $uniform1i(this$static.glc, this$static.webGLObjects[location_0], 0);
}

function $glUniform2f(this$static, location_0, x_0, y_0){
  $uniform2f(this$static.glc, this$static.webGLObjects[location_0], x_0, y_0);
}

function $glUniform4fv_0(this$static, location_0, count, v){
  $uniform4fv(this$static.glc, this$static.webGLObjects[location_0], $getTypedArray(v, 5126, 16 * count));
}

function $glUseProgram(this$static, program){
  $useProgram(this$static.glc, this$static.webGLObjects[program]);
}

function $glVertexAttribPointer(this$static, indx, size_0, type_0, stride, ptr){
  this$static.useNioBuffer &= ~(1 << indx);
  if (this$static.boundArrayBuffer != this$static.requestedArrayBuffer) {
    $bindBuffer(this$static.glc, $intern_49, this$static.requestedArrayBuffer);
    this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
  }
  $vertexAttribPointer(this$static.glc, indx, size_0, type_0, false, stride, ptr);
}

function $glViewport(this$static, w, h){
  $viewport(this$static.glc, 0, 0, w, h);
}

function $init(this$static, glc){
  var data_0, ii;
  glc.pixelStorei(37441, 1);
  this$static.glc = glc;
  $push(this$static.webGLObjects, null);
  $push_0(this$static.webGLObjectTypes, 0);
  glc.createBuffer();
  for (ii = 0; ii < 5; ii++) {
    data_0 = new HtmlGL20$VertexAttribArrayState;
    data_0.webGlBuffer = glc.createBuffer();
    this$static.vertexAttribArrayState[ii] = data_0;
  }
}

function $prepareDraw(this$static){
  var data_0, elementSize, enabled, i, mask, previousElementSize, previousNio;
  previousNio = null;
  previousElementSize = 0;
  if (this$static.useNioBuffer == 0 && this$static.enabledArrays == this$static.previouslyEnabledArrays) {
    return;
  }
  for (i = 0; i < 5; i++) {
    mask = 1 << i;
    enabled = this$static.enabledArrays & mask;
    enabled != (this$static.previouslyEnabledArrays & mask) && (enabled != 0?$enableVertexAttribArray(this$static.glc, i):$disableVertexAttribArray(this$static.glc, i));
    if (enabled != 0 && (this$static.useNioBuffer & mask) != 0) {
      data_0 = this$static.vertexAttribArrayState[i];
      if (!!previousNio && previousNio.nioBufferLimit >= data_0.nioBufferLimit) {
        if (this$static.boundArrayBuffer != previousNio.webGlBuffer) {
          $bindBuffer(this$static.glc, $intern_49, previousNio.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        $vertexAttribPointer(this$static.glc, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * previousElementSize);
      }
       else {
        if (this$static.boundArrayBuffer != data_0.webGlBuffer) {
          $bindBuffer(this$static.glc, $intern_49, data_0.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        elementSize = getElementSize_3();
        null.nullMethod();
        if (data_0.nioBufferPosition * elementSize < data_0.stride) {
          null.nullMethod();
          $bufferData(this$static.glc, $intern_49, $getTypedArray(data_0.nioBuffer, data_0.type_0, data_0.nioBufferLimit * elementSize), 35040);
          $vertexAttribPointer(this$static.glc, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * elementSize);
          previousNio = data_0;
          previousElementSize = elementSize;
        }
         else {
          null.nullMethod();
          $bufferData(this$static.glc, $intern_49, $getTypedArray(data_0.nioBuffer, data_0.type_0, (data_0.nioBufferLimit - data_0.nioBufferPosition) * elementSize), 35040);
          $vertexAttribPointer(this$static.glc, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, 0);
        }
        null.nullMethod();
      }
    }
  }
  this$static.previouslyEnabledArrays = this$static.enabledArrays;
}

function HtmlGL20(){
  GL20.call(this, new HtmlGL20$1, ($clinit_HtmlUrlParameters() , checkGLErrors));
  this.vertexAttribArrayState = initDim(Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit, $intern_2, 124, 5, 0, 1);
  this.webGLObjects = [];
  this.webGLObjectTypes = [];
}

function getElementSize_3(){
  throw new RuntimeException_0('Unrecognized buffer type: ' + null.nullMethod());
}

defineClass(283, 282, {}, HtmlGL20);
_.enabledArrays = 0;
_.previouslyEnabledArrays = 0;
_.useNioBuffer = 0;
var Lplayn_html_HtmlGL20_2_classLit = createForClass(283);
function $createByteBuffer(size_0){
  var buffer;
  buffer = allocateDirect(size_0);
  $order(buffer, ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER));
  return buffer;
}

function HtmlGL20$1(){
  this.intBuffer = $asIntBuffer($createByteBuffer(128));
  this.floatBuffer = new FloatBuffer($slice($createByteBuffer(128)));
  this.shortBuffer = $asShortBuffer($createByteBuffer(64));
  $createByteBuffer(256);
}

defineClass(285, 284, {}, HtmlGL20$1);
var Lplayn_html_HtmlGL20$1_2_classLit = createForClass(285);
function HtmlGL20$VertexAttribArrayState(){
}

defineClass(124, 1, {124:1}, HtmlGL20$VertexAttribArrayState);
_.nioBufferLimit = 0;
_.nioBufferPosition = 0;
_.normalize = false;
_.size_0 = 0;
_.stride = 0;
_.type_0 = 0;
var Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit = createForClass(124);
function $clinit_HtmlGL20$WebGLObjectType(){
  $clinit_HtmlGL20$WebGLObjectType = emptyMethod;
  NULL = new HtmlGL20$WebGLObjectType('NULL', 0);
  BUFFER = new HtmlGL20$WebGLObjectType('BUFFER', 1);
  FRAME_BUFFER = new HtmlGL20$WebGLObjectType('FRAME_BUFFER', 2);
  PROGRAM = new HtmlGL20$WebGLObjectType('PROGRAM', 3);
  RENDER_BUFFER = new HtmlGL20$WebGLObjectType('RENDER_BUFFER', 4);
  SHADER = new HtmlGL20$WebGLObjectType('SHADER', 5);
  TEXTURE = new HtmlGL20$WebGLObjectType('TEXTURE', 6);
  UNIFORM_LOCATION = new HtmlGL20$WebGLObjectType('UNIFORM_LOCATION', 7);
}

function HtmlGL20$WebGLObjectType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_13(){
  $clinit_HtmlGL20$WebGLObjectType();
  return initValues(getClassLiteralForArray(Lplayn_html_HtmlGL20$WebGLObjectType_2_classLit, 1), $intern_1, 41, 0, [NULL, BUFFER, FRAME_BUFFER, PROGRAM, RENDER_BUFFER, SHADER, TEXTURE, UNIFORM_LOCATION]);
}

defineClass(41, 7, {3:1, 9:1, 7:1, 41:1}, HtmlGL20$WebGLObjectType);
var BUFFER, FRAME_BUFFER, NULL, PROGRAM, RENDER_BUFFER, SHADER, TEXTURE, UNIFORM_LOCATION;
var Lplayn_html_HtmlGL20$WebGLObjectType_2_classLit = createForEnum(41, values_13);
function $createCanvasImpl(this$static, scale, pixelWidth, pixelHeight){
  var elem;
  elem = $doc.createElement('canvas');
  $setWidth(elem, pixelWidth);
  $setHeight(elem, pixelHeight);
  return new HtmlCanvas(new HtmlImage(this$static, scale, elem));
}

function $fullScreenHeight(){
  return $wnd.screen.height;
}

function $fullScreenWidth(){
  return $wnd.screen.width;
}

function $setSize(this$static, width_0, height){
  var fbScale;
  this$static.rootElement.style['width'] = width_0 + ($clinit_Style$Unit() , 'px');
  this$static.rootElement.style['height'] = height + 'px';
  fbScale = new Scale(this$static.frameBufferPixelRatio);
  $setWidth(this$static.canvas, iceil(fbScale.factor * width_0));
  $setHeight(this$static.canvas, iceil(fbScale.factor * height));
  this$static.canvas.style['width'] = width_0 + 'px';
  this$static.canvas.style['height'] = height + 'px';
  $viewportChanged(this$static, this$static.canvas.width, this$static.canvas.height);
}

function $transformMouse(this$static, x_0, y_0){
  return $set_2(this$static.mousePoint, x_0 / this$static.mouseScale, y_0 / this$static.mouseScale);
}

function $updateTexture(this$static, tex, img){
  $glBindTexture(this$static.gl, tex);
  $glTexImage2D(this$static.gl, img);
}

function HtmlGraphics(plat, config){
  var attrs, doc, glc, root;
  Graphics_0.call(this, plat, new HtmlGL20, new Scale(config.scaleFactor));
  new HashMap;
  this.mousePoint = new Point;
  new Dimension;
  this.frameBufferPixelRatio = config.frameBufferPixelRatio;
  this.mouseScale = config.scaleFactor / this.frameBufferPixelRatio;
  doc = $doc;
  this.dummyCanvas = doc.createElement('canvas');
  $getContext2d(this.dummyCanvas);
  root = $getElementById(doc, config.rootId);
  if (!root) {
    root = doc.createElement('div');
    $setAttribute(root, 'style', 'width: 640px; height: 480px');
    $appendChild(doc.body, root);
  }
   else {
    root.innerHTML = '';
  }
  this.rootElement = root;
  this.measureElement = doc.createElement('div');
  this.measureElement.style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
  this.measureElement.style['position'] = ($clinit_Style$Position() , 'absolute');
  this.measureElement.style['top'] = ($clinit_Style$Unit() , '-500.0px');
  this.measureElement.style['overflow'] = ($clinit_Style$Overflow() , 'visible');
  this.measureElement.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'nowrap');
  $appendChild(root, this.measureElement);
  this.canvas = $doc.createElement('canvas');
  $appendChild(root, this.canvas);
  $setSize(this, (root.offsetWidth || 0) | 0, (root.offsetHeight || 0) | 0);
  attrs = {premultipliedAlpha:false};
  attrs.alpha = false;
  $setAntialias(attrs, config.antiAliasing);
  glc = getContext(this.canvas, attrs);
  if (!glc)
    throw new RuntimeException_0('Unable to create GL context');
  $init(this.gl, glc);
  config.experimentalFullscreen && addResizeHandler(new HtmlGraphics$1(this));
}

defineClass(225, 224, {}, HtmlGraphics);
_.frameBufferPixelRatio = 0;
_.mouseScale = 0;
var experimentalScale = 1;
var Lplayn_html_HtmlGraphics_2_classLit = createForClass(225);
function $onResize(this$static, event_0){
  var height, width_0, xOfs, yOfs;
  if ($fullScreenWidth() == event_0.width_0 && $fullScreenHeight() == event_0.height_0) {
    width_0 = this$static.this$01.viewSize.width_0;
    height = this$static.this$01.viewSize.height_0;
    experimentalScale = min_2($fullScreenWidth() / width_0, $fullScreenHeight() / height);
    yOfs = round_int(($fullScreenHeight() - height * experimentalScale) / 3);
    xOfs = round_int(($fullScreenWidth() - width_0 * experimentalScale) / 2);
    $setAttribute(this$static.this$01.rootElement, 'style', 'width:' + experimentalScale * width_0 + 'px; ' + 'height:' + experimentalScale * height + 'px; ' + 'position:absolute; left:' + xOfs + 'px; top:' + yOfs);
    alert_0('Switching to fullscreen mode.');
    $addClassName($doc.body, 'fullscreen');
  }
   else {
    experimentalScale = 1;
    $removeAttribute(this$static.this$01.rootElement, 'style');
    $removeClassName($doc.body, 'fullscreen');
  }
}

function HtmlGraphics$1(this$0){
  this.this$01 = this$0;
}

defineClass(226, 1, {}, HtmlGraphics$1);
var Lplayn_html_HtmlGraphics$1_2_classLit = createForClass(226);
function $draw_6(this$static, ctx, x_0, y_0, width_0, height){
  $drawImage_0(ctx, this$static.img, x_0, y_0, width_0, height);
}

function $getRgb(this$static, width_0, height, rgbArray, scanSize){
  var a, b, ctx, dst, g, i, imageData, pixelData, r, x_0, y_0;
  if (!this$static.canvas) {
    this$static.canvas = this$static.img.ownerDocument.createElement('canvas');
    $setHeight(this$static.canvas, this$static.img.height);
    $setWidth(this$static.canvas, this$static.img.width);
    $drawImage($getContext2d(this$static.canvas), this$static.img, 0, 0);
  }
  ctx = $getContext2d(this$static.canvas);
  imageData = ctx.getImageData(0, 0, width_0, height);
  pixelData = imageData.data;
  i = 0;
  dst = 0;
  for (y_0 = 0; y_0 < height; y_0++) {
    for (x_0 = 0; x_0 < width_0; x_0++) {
      r = pixelData[i++] || 0;
      g = pixelData[i++] || 0;
      b = pixelData[i++] || 0;
      a = pixelData[i++] || 0;
      rgbArray[dst + x_0] = a << 24 | r << 16 | g << 8 | b;
    }
    dst += scanSize;
  }
}

function $setRgb(this$static, width_0, height, rgbArray, scanSize){
  var argb, ctx, dst, i, imageData, pixelData, x_0, y_0;
  ctx = $getContext2d(this$static.canvas);
  imageData = ctx.createImageData(width_0, height);
  pixelData = imageData.data;
  i = 0;
  dst = 0;
  for (y_0 = 0; y_0 < height; y_0++) {
    for (x_0 = 0; x_0 < width_0; x_0++) {
      argb = rgbArray[dst + x_0];
      pixelData[i++] = argb >> 16 & 255;
      pixelData[i++] = argb >> 8 & 255;
      pixelData[i++] = argb & 255;
      pixelData[i++] = argb >> 24 & 255;
    }
    dst += scanSize;
  }
  ctx.putImageData(imageData, 0, 0);
}

function $upload(this$static, gfx, tex){
  $updateTexture(gfx, tex.id_0, this$static.img);
}

function HtmlImage(gfx, scale, elem){
  ImageImpl.call(this, gfx, scale, elem.width, elem.height, elem);
  this.canvas = elem;
}

function HtmlImage_0(gfx, scale, elem, source){
  var pstate;
  ImageImpl_0.call(this, gfx, new RPromise, scale, elem.width, elem.height, source);
  this.img = elem;
  pstate = this.state;
  if (this.img.complete)
    pstate.succeed(this);
  else {
    new HtmlInput$EventCloseHandler(this.img, 'load', new HtmlImage$1(this, pstate), false);
    new HtmlInput$EventCloseHandler(this.img, 'error', new HtmlImage$2(this, pstate), false);
  }
}

defineClass(137, 172, {}, HtmlImage, HtmlImage_0);
_.toString$ = function toString_37(){
  return 'Image[src=' + this.source + ', scale=' + this.scale_0 + ', size=' + $invScaled(this.scale_0, this.pixelWidth) + 'x' + $invScaled(this.scale_0, this.pixelHeight) + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', img=' + this.img + ', canvas=' + this.canvas + ']';
}
;
var Lplayn_html_HtmlImage_2_classLit = createForClass(137);
function HtmlImage$1(this$0, val$pstate){
  this.this$01 = this$0;
  this.val$pstate2 = val$pstate;
}

defineClass(358, 1, {}, HtmlImage$1);
_.handleEvent = function handleEvent(evt){
  this.this$01.pixelWidth = this.this$01.img.width;
  this.this$01.pixelHeight = this.this$01.img.height;
  this.val$pstate2.succeed(this.this$01);
}
;
var Lplayn_html_HtmlImage$1_2_classLit = createForClass(358);
function HtmlImage$2(this$0, val$pstate){
  this.this$01 = this$0;
  this.val$pstate2 = val$pstate;
}

defineClass(359, 1, {}, HtmlImage$2);
_.handleEvent = function handleEvent_0(evt){
  this.val$pstate2.fail(new RuntimeException_0('Error loading image ' + this.this$01.img.src));
}
;
var Lplayn_html_HtmlImage$2_2_classLit = createForClass(359);
function $dispatch_0(this$static, event_0, nevent){
  try {
    $setFlag(event_0, modifierFlags($eventGetAltKey(nevent), $eventGetCtrlKey(nevent), $eventGetMetaKey(nevent), $eventGetShiftKey(nevent)));
    $dispatchEvent(this$static.plat, this$static.keyboardEvents, event_0);
  }
   finally {
    (event_0.flags & 1) != 0 && $eventPreventDefault(nevent);
  }
}

function $dispatch_1(this$static, event_0, nevent){
  try {
    $setFlag(event_0, modifierFlags($eventGetAltKey(nevent), $eventGetCtrlKey(nevent), $eventGetMetaKey(nevent), $eventGetShiftKey(nevent)));
    $dispatchEvent(this$static.plat, this$static.mouseEvents, event_0);
  }
   finally {
    (event_0.flags & 1) != 0 && $eventPreventDefault(nevent);
  }
}

function $dispatch_2(this$static, events, nevent){
  var event_0, event$index, event$max;
  try {
    $dispatchEvent(this$static.plat, this$static.touchEvents, events);
  }
   finally {
    for (event$index = 0 , event$max = events.length; event$index < event$max; ++event$index) {
      event_0 = events[event$index];
      (event_0.flags & 1) != 0 && $eventPreventDefault(nevent);
    }
  }
}

function $handleRequestsInUserEventContext(this$static){
  this$static.isRequestingMouseLock && !$isMouseLocked() && $requestMouseLockImpl(this$static.rootElement);
}

function $isMouseLocked(){
  return !!($doc.pointerLockElement || $doc.webkitPointerLockElement || $doc.mozPointerLockElement);
}

function $requestMouseLockImpl(element){
  element.requestPointerLock = element.requestPointerLock || element.webkitRequestPointerLock || element.mozRequestPointerLock;
  element.requestPointerLock && element.requestPointerLock();
}

function $toTouchEvents(this$static, kind, nevent){
  var id_0, nativeTouches, nativeTouchesLen, t, time, touch, touches, x_0, xy, y_0;
  nativeTouches = nevent.changedTouches;
  nativeTouchesLen = nativeTouches.length;
  touches = initDim(Lplayn_core_Touch$Event_2_classLit, $intern_2, 97, nativeTouchesLen, 0, 1);
  time = now_2();
  for (t = 0; t < nativeTouchesLen; t++) {
    touch = nativeTouches[t];
    x_0 = $getRelativeX(touch, this$static.rootElement);
    y_0 = $getRelativeY(touch, this$static.rootElement);
    xy = $transformMouse(this$static.plat.graphics, x_0, y_0);
    id_0 = nevent.changedTouches[t].identifier || 0;
    touches[t] = new Touch$Event(time, xy.x_0, xy.y_0, kind, id_0);
  }
  return touches;
}

function HtmlInput(hplat, root){
  this.mouseEvents = ($clinit_AbstractSignal() , new Signal);
  this.touchEvents = new Signal;
  this.keyboardEvents = new Signal;
  this.lastMousePt = new Point;
  this.plat = hplat;
  this.rootElement = root;
  capturePageEvent('keydown', new HtmlInput$1(this));
  capturePageEvent('keypress', new HtmlInput$2(this));
  capturePageEvent('keyup', new HtmlInput$3(this));
  new HtmlInput$EventCloseHandler($doc, 'contextmenu', new HtmlInput$4, false);
  new HtmlInput$EventCloseHandler(this.rootElement, 'mousedown', new HtmlInput$5(this, this), true);
  capturePageEvent('mouseup', new HtmlInput$6(this, this));
  capturePageEvent('mousemove', new HtmlInput$7(this));
  new HtmlInput$EventCloseHandler(this.rootElement, 'mousemove', new HtmlInput$8(this), true);
  new HtmlInput$EventCloseHandler(this.rootElement, getMouseWheelEvent(), new HtmlInput$9(this), true);
  new HtmlInput$EventCloseHandler(this.rootElement, 'touchstart', new HtmlInput$10(this), true);
  capturePageEvent('touchmove', new HtmlInput$11(this));
  capturePageEvent('touchend', new HtmlInput$12(this));
}

function capturePageEvent(name_0, handler){
  return new HtmlInput$EventCloseHandler($doc, name_0, handler, true);
}

function getMouseButton(evt){
  switch ($eventGetButton(evt)) {
    case 1:
      return $clinit_Mouse$ButtonEvent$Id() , LEFT_0;
    case 4:
      return $clinit_Mouse$ButtonEvent$Id() , MIDDLE;
    case 2:
      return $clinit_Mouse$ButtonEvent$Id() , RIGHT_0;
    default:return null;
  }
}

function getMouseWheelEvent(){
  if (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
    return 'DOMMouseScroll';
  }
   else {
    return 'mousewheel';
  }
}

function getMouseWheelVelocity(evt){
  var delta = 0;
  var agentInfo = ($clinit_HtmlPlatform() , agentInfo_0);
  if (agentInfo.isFirefox) {
    agentInfo.isMacOS?(delta = 1 * evt.detail):(delta = 1 * evt.detail / 3);
  }
   else if (agentInfo.isOpera) {
    agentInfo.isLinux?(delta = -1 * evt.wheelDelta / 80):(delta = -1 * evt.wheelDelta / 40);
  }
   else if (agentInfo.isChrome || agentInfo.isSafari) {
    delta = -1 * evt.wheelDelta / 120;
    Math.abs(delta) < 1 && (agentInfo.isWindows?(delta = -1 * evt.wheelDelta):agentInfo.isMacOS && (delta = -1 * evt.wheelDelta / 3));
  }
  return delta;
}

function getRelativeX(e, target){
  return (((e.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument)) / experimentalScale;
}

function getRelativeY(e, target){
  return (((e.clientY || 0) | 0) - $getAbsoluteTop(target) + ($getSubPixelScrollTop(target) | 0) + $getScrollTop(target.ownerDocument)) / experimentalScale;
}

function keyForCode(keyCode){
  switch (keyCode) {
    case 18:
      return $clinit_Key() , ALT;
    case 8:
      return $clinit_Key() , BACKSPACE;
    case 17:
      return $clinit_Key() , CONTROL;
    case 46:
      return $clinit_Key() , DELETE;
    case 40:
      return $clinit_Key() , DOWN;
    case 35:
      return $clinit_Key() , END;
    case 13:
      return $clinit_Key() , ENTER;
    case 27:
      return $clinit_Key() , ESCAPE;
    case 36:
      return $clinit_Key() , HOME;
    case 37:
      return $clinit_Key() , LEFT;
    case 34:
      return $clinit_Key() , PAGE_DOWN;
    case 33:
      return $clinit_Key() , PAGE_UP;
    case 39:
      return $clinit_Key() , RIGHT;
    case 16:
      return $clinit_Key() , SHIFT;
    case 9:
      return $clinit_Key() , TAB;
    case 38:
      return $clinit_Key() , UP;
    case 19:
      return $clinit_Key() , PAUSE;
    case 20:
      return $clinit_Key() , CAPS_LOCK;
    case 32:
      return $clinit_Key() , SPACE;
    case 45:
      return $clinit_Key() , INSERT;
    case 48:
      return $clinit_Key() , K0;
    case 49:
      return $clinit_Key() , K1;
    case 50:
      return $clinit_Key() , K2;
    case 51:
      return $clinit_Key() , K3;
    case 52:
      return $clinit_Key() , K4;
    case 53:
      return $clinit_Key() , K5;
    case 54:
      return $clinit_Key() , K6;
    case 55:
      return $clinit_Key() , K7;
    case 56:
      return $clinit_Key() , K8;
    case 57:
      return $clinit_Key() , K9;
    case 65:
      return $clinit_Key() , A;
    case 66:
      return $clinit_Key() , B;
    case 67:
      return $clinit_Key() , C;
    case 68:
      return $clinit_Key() , D;
    case 69:
      return $clinit_Key() , E_0;
    case 70:
      return $clinit_Key() , F_0;
    case 71:
      return $clinit_Key() , G;
    case 72:
      return $clinit_Key() , H;
    case 73:
      return $clinit_Key() , I;
    case 74:
      return $clinit_Key() , J;
    case 75:
      return $clinit_Key() , K;
    case 76:
      return $clinit_Key() , L;
    case 77:
      return $clinit_Key() , M;
    case 78:
      return $clinit_Key() , N;
    case 79:
      return $clinit_Key() , O;
    case 80:
      return $clinit_Key() , P;
    case 81:
      return $clinit_Key() , Q;
    case 82:
      return $clinit_Key() , R;
    case 83:
      return $clinit_Key() , S;
    case 84:
      return $clinit_Key() , T;
    case 85:
      return $clinit_Key() , U;
    case 86:
      return $clinit_Key() , V;
    case 87:
      return $clinit_Key() , W;
    case 88:
      return $clinit_Key() , X;
    case 89:
      return $clinit_Key() , Y;
    case 90:
      return $clinit_Key() , Z;
    case 92:
    case 91:
      return $clinit_Key() , WINDOWS;
    case 96:
      return $clinit_Key() , NP0;
    case 97:
      return $clinit_Key() , NP1;
    case 98:
      return $clinit_Key() , NP2;
    case 99:
      return $clinit_Key() , NP3;
    case 100:
      return $clinit_Key() , NP4;
    case 101:
      return $clinit_Key() , NP5;
    case 102:
      return $clinit_Key() , NP6;
    case 103:
      return $clinit_Key() , NP7;
    case 104:
      return $clinit_Key() , NP8;
    case 105:
      return $clinit_Key() , NP9;
    case 106:
      return $clinit_Key() , NP_MULTIPLY;
    case 107:
      return $clinit_Key() , NP_ADD;
    case 109:
      return $clinit_Key() , NP_SUBTRACT;
    case 110:
      return $clinit_Key() , NP_DECIMAL;
    case 111:
      return $clinit_Key() , NP_DIVIDE;
    case 112:
      return $clinit_Key() , F1;
    case 113:
      return $clinit_Key() , F2;
    case 114:
      return $clinit_Key() , F3;
    case 115:
      return $clinit_Key() , F4;
    case 116:
      return $clinit_Key() , F5;
    case 117:
      return $clinit_Key() , F6;
    case 118:
      return $clinit_Key() , F7;
    case 119:
      return $clinit_Key() , F8;
    case 120:
      return $clinit_Key() , F9;
    case 121:
      return $clinit_Key() , F10;
    case 122:
      return $clinit_Key() , F11;
    case 123:
      return $clinit_Key() , F12;
    case 144:
      return $clinit_Key() , NP_NUM_LOCK;
    case 145:
      return $clinit_Key() , SCROLL_LOCK;
    case 186:
      return $clinit_Key() , SEMICOLON;
    case 187:
      return $clinit_Key() , EQUALS;
    case 188:
      return $clinit_Key() , COMMA;
    case 189:
      return $clinit_Key() , MINUS;
    case 190:
      return $clinit_Key() , PERIOD;
    case 191:
      return $clinit_Key() , SLASH;
    case 192:
      return $clinit_Key() , BACKQUOTE;
    case 219:
      return $clinit_Key() , LEFT_BRACKET;
    case 220:
      return $clinit_Key() , BACKSLASH;
    case 221:
      return $clinit_Key() , RIGHT_BRACKET;
    case 222:
      return $clinit_Key() , QUOTE;
    default:return $clinit_Key() , UNKNOWN;
  }
}

defineClass(246, 245, {}, HtmlInput);
_.inDragSequence = false;
_.inTouchSequence = false;
_.isRequestingMouseLock = false;
var Lplayn_html_HtmlInput_2_classLit = createForClass(246);
function HtmlInput$1(this$0){
  this.this$01 = this$0;
}

defineClass(247, 1, {}, HtmlInput$1);
_.handleEvent = function handleEvent_1(nevent){
  var key;
  key = keyForCode($eventGetKeyCode(nevent));
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_2(), key, true), nevent);
}
;
var Lplayn_html_HtmlInput$1_2_classLit = createForClass(247);
function HtmlInput$10(this$0){
  this.this$01 = this$0;
}

defineClass(256, 1, {}, HtmlInput$10);
_.handleEvent = function handleEvent_2(nevent){
  this.this$01.inTouchSequence = true;
  $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , START), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$10_2_classLit = createForClass(256);
function HtmlInput$11(this$0){
  this.this$01 = this$0;
}

defineClass(257, 1, {}, HtmlInput$11);
_.handleEvent = function handleEvent_3(nevent){
  this.this$01.inTouchSequence && $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , MOVE), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$11_2_classLit = createForClass(257);
function HtmlInput$12(this$0){
  this.this$01 = this$0;
}

defineClass(258, 1, {}, HtmlInput$12);
_.handleEvent = function handleEvent_4(nevent){
  if (this.this$01.inTouchSequence) {
    $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , END_0), nevent), nevent);
    nevent.touches.length == 0 && (this.this$01.inTouchSequence = false);
  }
}
;
var Lplayn_html_HtmlInput$12_2_classLit = createForClass(258);
function HtmlInput$1XYEventHandler(this$0){
  this.this$01_0 = this$0;
}

defineClass(119, 1, {});
_.handleEvent = function handleEvent_5(ev){
  var xy;
  xy = $transformMouse(this.this$01_0.plat.graphics, getRelativeX(ev, this.this$01_0.rootElement), getRelativeY(ev, this.this$01_0.rootElement));
  this.handleEvent_0(ev, xy.x_0, xy.y_0);
}
;
var Lplayn_html_HtmlInput$1XYEventHandler_2_classLit = createForClass(119);
function HtmlInput$1MoveEventHandler(this$0){
  this.this$01 = this$0;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(151, 119, {});
_.handleEvent_0 = function handleEvent_6(ev, x_0, y_0){
  var dx, dy;
  if (this.lastX == -1) {
    this.lastX = x_0;
    this.lastY = y_0;
  }
  if (this.this$01.inDragSequence == this.wantDragSequence()) {
    if ($isMouseLocked()) {
      dx = ev.webkitMovementX;
      dy = ev.webkitMovementY;
    }
     else {
      dx = x_0 - this.lastX;
      dy = y_0 - this.lastY;
    }
    $dispatch_1(this.this$01, new Mouse$MotionEvent(now_2(), x_0, y_0, dx, dy), ev);
  }
  this.lastX = x_0;
  this.lastY = y_0;
  $set_2(this.this$01.lastMousePt, x_0, y_0);
}
;
_.lastX = -1;
_.lastY = -1;
var Lplayn_html_HtmlInput$1MoveEventHandler_2_classLit = createForClass(151);
function HtmlInput$2(this$0){
  this.this$01 = this$0;
}

defineClass(248, 1, {}, HtmlInput$2);
_.handleEvent = function handleEvent_7(nevent){
  $dispatch_0(this.this$01, new Keyboard$TypedEvent(now_2(), (nevent.charCode || 0) & $intern_25), nevent);
}
;
var Lplayn_html_HtmlInput$2_2_classLit = createForClass(248);
function HtmlInput$3(this$0){
  this.this$01 = this$0;
}

defineClass(249, 1, {}, HtmlInput$3);
_.handleEvent = function handleEvent_8(nevent){
  var key;
  key = keyForCode($eventGetKeyCode(nevent));
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_2(), key, false), nevent);
}
;
var Lplayn_html_HtmlInput$3_2_classLit = createForClass(249);
function HtmlInput$4(){
}

defineClass(250, 1, {}, HtmlInput$4);
_.handleEvent = function handleEvent_9(evt){
  $eventPreventDefault(evt);
  evt.stopPropagation();
}
;
var Lplayn_html_HtmlInput$4_2_classLit = createForClass(250);
function HtmlInput$5(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(251, 119, {}, HtmlInput$5);
_.handleEvent_0 = function handleEvent_10(ev, x_0, y_0){
  var btn;
  this.this$02.inDragSequence = true;
  btn = getMouseButton(ev);
  !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_2(), x_0, y_0, btn, true), ev);
}
;
var Lplayn_html_HtmlInput$5_2_classLit = createForClass(251);
function HtmlInput$6(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(252, 119, {}, HtmlInput$6);
_.handleEvent_0 = function handleEvent_11(ev, x_0, y_0){
  var btn;
  if (this.this$02.inDragSequence) {
    this.this$02.inDragSequence = false;
    btn = getMouseButton(ev);
    !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_2(), x_0, y_0, btn, false), ev);
  }
  $handleRequestsInUserEventContext(this.this$02);
}
;
var Lplayn_html_HtmlInput$6_2_classLit = createForClass(252);
function HtmlInput$7(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(253, 151, {}, HtmlInput$7);
_.wantDragSequence = function wantDragSequence(){
  return true;
}
;
var Lplayn_html_HtmlInput$7_2_classLit = createForClass(253);
function HtmlInput$8(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(254, 151, {}, HtmlInput$8);
_.wantDragSequence = function wantDragSequence_0(){
  return false;
}
;
var Lplayn_html_HtmlInput$8_2_classLit = createForClass(254);
function HtmlInput$9(this$0){
  this.this$01 = this$0;
}

defineClass(255, 1, {}, HtmlInput$9);
_.handleEvent = function handleEvent_12(ev){
  var vel;
  vel = getMouseWheelVelocity(ev);
  $dispatch_1(this.this$01, new Mouse$WheelEvent(now_2(), this.this$01.lastMousePt.x_0, this.this$01.lastMousePt.y_0, vel), ev);
}
;
var Lplayn_html_HtmlInput$9_2_classLit = createForClass(255);
function $addEventListener(closeHandler, target, name_0, handler, capture){
  var listener = function(e){
    handler.handleEvent(e);
  }
  ;
  target.addEventListener(name_0, listener, capture);
  closeHandler.setListener(listener);
}

function HtmlInput$EventCloseHandler(target, name_0, eventHandler, capture){
  $addEventListener(this, target, name_0, eventHandler, capture);
}

defineClass(53, 1, {}, HtmlInput$EventCloseHandler);
_.setListener = function setListener(listener){
}
;
var Lplayn_html_HtmlInput$EventCloseHandler_2_classLit = createForClass(53);
defineClass(244, 243, {});
var Lplayn_html_HtmlLog_2_classLit = createForClass(244);
function HtmlLogSimple(){
  this.minLevel = ($clinit_Log$Level() , DEBUG);
}

defineClass(274, 244, {}, HtmlLogSimple);
var Lplayn_html_HtmlLogSimple_2_classLit = createForClass(274);
function $clinit_HtmlPlatform(){
  var userAgent;
  $clinit_HtmlPlatform = emptyMethod;
  agentInfo_0 = (userAgent = navigator.userAgent.toLowerCase() , {isFirefox:userAgent.indexOf('firefox') != -1, isChrome:userAgent.indexOf('chrome') != -1, isSafari:userAgent.indexOf('safari') != -1, isOpera:userAgent.indexOf('opera') != -1, isIE:userAgent.indexOf('msie') != -1, isMacOS:userAgent.indexOf('mac') != -1, isLinux:userAgent.indexOf('linux') != -1, isWindows:userAgent.indexOf('win') != -1});
}

function $listenForVisibilityChange(plat){
  $doc.addEventListener('visibilitychange', function(){
    plat.visibilityChanged();
  }
  , false);
}

function $requestAnimationFrame(callback){
  var fn = function(){
    callback.run();
  }
  ;
  $wnd.requestAnimationFrame?$wnd.requestAnimationFrame(fn):$wnd.mozRequestAnimationFrame?$wnd.mozRequestAnimationFrame(fn):$wnd.webkitRequestAnimationFrame?$wnd.webkitRequestAnimationFrame(fn):$wnd.setTimeout(fn, 20);
}

function $scheduleBackgroundFrame(millis, callback){
  $wnd.setTimeout(function(){
    callback.run();
  }
  , millis);
}

function $tick_0(this$static){
  return round_int(now_2() - this$static.start_0);
}

function HtmlPlatform(config){
  $clinit_HtmlPlatform();
  var e;
  this.lifecycle = ($clinit_AbstractSignal() , new Signal);
  this.frame_0 = new Signal;
  this.errors = new Signal;
  this.start_0 = initNow();
  this.log_0 = new HtmlLogSimple;
  this.exec_0 = new Exec$Default(this);
  setUncaughtExceptionHandler(new HtmlPlatform$1(this));
  $info(this.log_0, 'DPR ' + devicePixelRatio_0() + ' BSPR ' + ($wnd.webkitBackingStorePixelRatio || 1));
  try {
    this.backgroundFrameMillis = 0;
    this.graphics = new HtmlGraphics(this, config);
    this.input_0 = new HtmlInput(this, this.graphics.rootElement);
    this.audio = new HtmlAudio(this);
    this.assets = new HtmlAssets(this);
    new HtmlStorage;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 12)) {
      e = $e0;
      $error(this.log_0, e);
      alert_0('failed to init(): ' + e.getMessage());
      throw new RuntimeException_2(e);
    }
     else 
      throw unwrap($e0);
  }
}

function devicePixelRatio_0(){
  $clinit_HtmlPlatform();
  return $wnd.devicePixelRatio || 1;
}

function initNow(){
  function now_0(){
    return +new Date;
  }

  !Date.now && (Date.now = now_0);
  return Date.now();
}

function now_2(){
  $clinit_HtmlPlatform();
  return Date.now();
}

defineClass(218, 217, {}, HtmlPlatform);
_.visibilityChanged = function visibilityChanged(){
  var isHidden;
  isHidden = $doc.hidden;
  $dispatchEvent(this, this.lifecycle, isHidden?($clinit_Platform$Lifecycle() , PAUSE_0):($clinit_Platform$Lifecycle() , RESUME));
  isHidden && this.backgroundFrameMillis > 0 && $scheduleBackgroundFrame(this.backgroundFrameMillis, new HtmlPlatform$3(this));
}
;
_.backgroundFrameMillis = 0;
_.start_0 = 0;
var agentInfo_0;
var Lplayn_html_HtmlPlatform_2_classLit = createForClass(218);
function HtmlPlatform$1(this$0){
  this.this$01 = this$0;
}

defineClass(220, 1, {}, HtmlPlatform$1);
var Lplayn_html_HtmlPlatform$1_2_classLit = createForClass(220);
function HtmlPlatform$2(this$0){
  this.this$01 = this$0;
}

defineClass(221, 1, {}, HtmlPlatform$2);
_.run = function run_3(){
  $requestAnimationFrame(this);
  $emitFrame(this.this$01);
}
;
var Lplayn_html_HtmlPlatform$2_2_classLit = createForClass(221);
function HtmlPlatform$3(this$0){
  this.this$01 = this$0;
}

defineClass(222, 1, {}, HtmlPlatform$3);
_.run = function run_4(){
  if ($doc.hidden) {
    $scheduleBackgroundFrame(this.this$01.backgroundFrameMillis, this);
    $emitFrame(this.this$01);
  }
}
;
var Lplayn_html_HtmlPlatform$3_2_classLit = createForClass(222);
function HtmlPlatform$Config(){
  requestedMode();
  this.scaleFactor = devicePixelRatio_0();
  this.frameBufferPixelRatio = devicePixelRatio_0();
}

defineClass(219, 1, {}, HtmlPlatform$Config);
_.antiAliasing = true;
_.experimentalFullscreen = false;
_.frameBufferPixelRatio = 0;
_.rootId = 'playn-root';
_.scaleFactor = 0;
var Lplayn_html_HtmlPlatform$Config_2_classLit = createForClass(219);
function $setLoopingImpl(this$static, looping){
  this$static.impl.setLooping_0(looping);
}

function $setVolumeImpl(this$static, volume){
  this$static.impl.setVolume_0(round_int(volume * 100));
}

function HtmlSound(exec_0, sound){
  Sound_0.call(this, new Exec$1(exec_0));
  this.volume_0 = 1;
  $addEventHandler(sound, new HtmlSound$1(this, sound));
}

defineClass(397, 396, {}, HtmlSound);
var Lplayn_html_HtmlSound_2_classLit = createForClass(397);
function $onSoundLoadStateChange(this$static, event_0){
  var loadState;
  loadState = event_0.loadState;
  switch (loadState.ordinal) {
    case 5:
    case 4:
      break;
    case 2:
    case 1:
    case 3:
      $succeed(this$static.this$01, this$static.val$sound2);
      break;
    case 0:
      $fail(this$static.this$01, new Exception(loadState.name_0 != null?loadState.name_0:'' + loadState.ordinal));
      break;
    default:throw new RuntimeException_0('Unrecognized sound load state ' + (loadState.name_0 != null?loadState.name_0:'' + loadState.ordinal));
  }
}

function HtmlSound$1(this$0, val$sound){
  this.this$01 = this$0;
  this.val$sound2 = val$sound;
}

defineClass(398, 1, {}, HtmlSound$1);
var Lplayn_html_HtmlSound$1_2_classLit = createForClass(398);
function HtmlStorage(){
  var storage;
  storage = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  storage?new StorageMap(storage):new HashMap;
}

defineClass(260, 1, {}, HtmlStorage);
var Lplayn_html_HtmlStorage_2_classLit = createForClass(260);
function $clinit_HtmlUrlParameters(){
  $clinit_HtmlUrlParameters = emptyMethod;
  checkGLErrors = $equals('check', getParameter('glerrors'));
  $equals('quad', getParameter('glshader'));
}

var checkGLErrors = false;
function requestedMode(){
  var renderer;
  renderer = getParameter('renderer');
  if ($equals('canvas', renderer)) {
    return 1;
  }
   else if ($equals('gl', renderer)) {
    return 0;
  }
  return 2;
}

function $isSet(this$static, flag){
  return (this$static.flags & flag.bitmask) != 0;
}

function $name_0(this$static){
  if (this$static.name_0 == null) {
    this$static.name_0 = $getName(this$static.___clazz$);
    this$static.name_0 = $substring(this$static.name_0, this$static.name_0.lastIndexOf('.') + 1);
  }
  return this$static.name_0;
}

function $setFlag_0(this$static, flag, active){
  active?(this$static.flags |= flag.bitmask):(this$static.flags &= ~flag.bitmask);
}

function $setState(this$static, state){
  this$static.state.updateAndNotify(state, false);
}

function $transform(this$static){
  var cosa, m00, m01, m10, m11, sina, tx, ty;
  if ($isSet(this$static, ($clinit_Layer$Flag() , XFDIRTY))) {
    sina = sin_0(this$static.rotation);
    cosa = cos_0(this$static.rotation);
    m00 = cosa * this$static.scaleX;
    m01 = sina * this$static.scaleY;
    m10 = -sina * this$static.scaleX;
    m11 = cosa * this$static.scaleY;
    tx = this$static.transform.tx;
    ty = this$static.transform.ty;
    $setTransform(this$static.transform, m00, m01, m10, m11, tx, ty);
    $setFlag_0(this$static, XFDIRTY, false);
  }
  return this$static.transform;
}

defineClass(75, 1, $intern_51);
_.toString$ = function toString_38(){
  var buf;
  buf = new StringBuilder_1($name_0(this));
  $append_6($append_4((buf.string += ' @ ' , buf), getHashCode(this)), ' [');
  this.toString_0(buf);
  return (buf.string += ']' , buf).string;
}
;
_.toString_0 = function toString_39(buf){
  $append_5((buf.string += 'tx=' , buf), $transform(this));
}
;
_.flags = 0;
_.rotation = 0;
_.scaleX = 1;
_.scaleY = 1;
var Lplayn_scene_Layer_2_classLit = createForClass(75);
defineClass(328, 75, $intern_51);
var Lplayn_scene_ClippedLayer_2_classLit = createForClass(328);
defineClass(329, 328, $intern_51);
_.iterator_0 = function iterator_14(){
  return new AbstractList$IteratorImpl(this.children);
}
;
_.toString_0 = function toString_40(buf){
  $append_5((buf.string += 'tx=' , buf), $transform(this));
  $append_4((buf.string += ', children=' , buf), this.children.array.length);
}
;
var Lplayn_scene_GroupLayer_2_classLit = createForClass(329);
function $clinit_Layer$Flag(){
  $clinit_Layer$Flag = emptyMethod;
  VISIBLE_1 = new Layer$Flag('VISIBLE', 0, 1);
  INTERACTIVE = new Layer$Flag('INTERACTIVE', 1, 2);
  XFDIRTY = new Layer$Flag('XFDIRTY', 2, 4);
  ODIRTY = new Layer$Flag('ODIRTY', 3, 8);
}

function Layer$Flag(enum$name, enum$ordinal, bitmask){
  Enum.call(this, enum$name, enum$ordinal);
  this.bitmask = bitmask;
}

function values_14(){
  $clinit_Layer$Flag();
  return initValues(getClassLiteralForArray(Lplayn_scene_Layer$Flag_2_classLit, 1), $intern_1, 76, 0, [VISIBLE_1, INTERACTIVE, XFDIRTY, ODIRTY]);
}

defineClass(76, 7, {3:1, 9:1, 7:1, 76:1}, Layer$Flag);
_.bitmask = 0;
var INTERACTIVE, ODIRTY, VISIBLE_1, XFDIRTY;
var Lplayn_scene_Layer$Flag_2_classLit = createForEnum(76, values_14);
function $clinit_Layer$Origin(){
  $clinit_Layer$Origin = emptyMethod;
  FIXED_0 = new Layer$Origin$1;
  CENTER = new Layer$Origin$2;
  UL = new Layer$Origin$3;
  UR = new Layer$Origin$4;
  LL = new Layer$Origin$5;
  LR = new Layer$Origin$6;
  TC = new Layer$Origin$7;
  BC = new Layer$Origin$8;
  LC = new Layer$Origin$9;
  RC = new Layer$Origin$10;
}

function Layer$Origin(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_15(){
  $clinit_Layer$Origin();
  return initValues(getClassLiteralForArray(Lplayn_scene_Layer$Origin_2_classLit, 1), $intern_1, 18, 0, [FIXED_0, CENTER, UL, UR, LL, LR, TC, BC, LC, RC]);
}

defineClass(18, 7, $intern_52);
var BC, CENTER, FIXED_0, LC, LL, LR, RC, TC, UL, UR;
var Lplayn_scene_Layer$Origin_2_classLit = createForEnum(18, values_15);
function Layer$Origin$1(){
  Layer$Origin.call(this, 'FIXED', 0);
}

defineClass(331, 18, $intern_52, Layer$Origin$1);
var Lplayn_scene_Layer$Origin$1_2_classLit = createForEnum(331, null);
function Layer$Origin$10(){
  Layer$Origin.call(this, 'RC', 9);
}

defineClass(340, 18, $intern_52, Layer$Origin$10);
var Lplayn_scene_Layer$Origin$10_2_classLit = createForEnum(340, null);
function Layer$Origin$2(){
  Layer$Origin.call(this, 'CENTER', 1);
}

defineClass(332, 18, $intern_52, Layer$Origin$2);
var Lplayn_scene_Layer$Origin$2_2_classLit = createForEnum(332, null);
function Layer$Origin$3(){
  Layer$Origin.call(this, 'UL', 2);
}

defineClass(333, 18, $intern_52, Layer$Origin$3);
var Lplayn_scene_Layer$Origin$3_2_classLit = createForEnum(333, null);
function Layer$Origin$4(){
  Layer$Origin.call(this, 'UR', 3);
}

defineClass(334, 18, $intern_52, Layer$Origin$4);
var Lplayn_scene_Layer$Origin$4_2_classLit = createForEnum(334, null);
function Layer$Origin$5(){
  Layer$Origin.call(this, 'LL', 4);
}

defineClass(335, 18, $intern_52, Layer$Origin$5);
var Lplayn_scene_Layer$Origin$5_2_classLit = createForEnum(335, null);
function Layer$Origin$6(){
  Layer$Origin.call(this, 'LR', 5);
}

defineClass(336, 18, $intern_52, Layer$Origin$6);
var Lplayn_scene_Layer$Origin$6_2_classLit = createForEnum(336, null);
function Layer$Origin$7(){
  Layer$Origin.call(this, 'TC', 6);
}

defineClass(337, 18, $intern_52, Layer$Origin$7);
var Lplayn_scene_Layer$Origin$7_2_classLit = createForEnum(337, null);
function Layer$Origin$8(){
  Layer$Origin.call(this, 'BC', 7);
}

defineClass(338, 18, $intern_52, Layer$Origin$8);
var Lplayn_scene_Layer$Origin$8_2_classLit = createForEnum(338, null);
function Layer$Origin$9(){
  Layer$Origin.call(this, 'LC', 8);
}

defineClass(339, 18, $intern_52, Layer$Origin$9);
var Lplayn_scene_Layer$Origin$9_2_classLit = createForEnum(339, null);
function $clinit_Layer$State(){
  $clinit_Layer$State = emptyMethod;
  REMOVED = new Layer$State('REMOVED', 0);
  ADDED = new Layer$State('ADDED', 1);
  DISPOSED = new Layer$State('DISPOSED', 2);
}

function Layer$State(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_16(){
  $clinit_Layer$State();
  return initValues(getClassLiteralForArray(Lplayn_scene_Layer$State_2_classLit, 1), $intern_1, 87, 0, [REMOVED, ADDED, DISPOSED]);
}

defineClass(87, 7, {3:1, 9:1, 7:1, 87:1}, Layer$State);
var ADDED, DISPOSED, REMOVED;
var Lplayn_scene_Layer$State_2_classLit = createForEnum(87, values_16);
function RootLayer(){
  this.state = ($clinit_AbstractValue() , new Value(($clinit_Layer$State() , REMOVED)));
  this.transform = new AffineTransform;
  $clinit_Layer$Origin();
  $setFlag_0(this, ($clinit_Layer$Flag() , VISIBLE_1), true);
  this.children = new ArrayList;
  new AffineTransform;
  $setState(this, ADDED);
}

defineClass(330, 329, $intern_51, RootLayer);
var Lplayn_scene_RootLayer_2_classLit = createForClass(330);
function $onEmit_1(this$static){
  $paintScene(this$static.this$01);
}

function SceneGame$1(this$0){
  this.this$01 = this$0;
}

defineClass(204, 441, {}, SceneGame$1);
_.onEmit = function onEmit_3(clock){
  $onEmit_1(this, clock);
}
;
var Lplayn_scene_SceneGame$1_2_classLit = createForClass(204);
defineClass(129, 1, {129:1});
_.equals$ = function equals_18(obj){
  var d;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 129)) {
    d = obj;
    return d.width_0 == this.width_0 && d.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_22(){
  return round_int(this.width_0) ^ round_int(this.height_0);
}
;
_.toString$ = function toString_41(){
  return $clinit_Dimensions() , this.width_0 + 'x' + this.height_0;
}
;
var Lpythagoras_f_AbstractDimension_2_classLit = createForClass(129);
defineClass(127, 1, {127:1, 58:1});
_.equals$ = function equals_19(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 127)) {
    p = obj;
    return this.x_1() == p.x_0 && this.y_1() == p.y_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_23(){
  return round_int(this.x_1()) ^ round_int(this.y_1());
}
;
_.toString$ = function toString_42(){
  return pointToString(this.x_1(), this.y_1());
}
;
var Lpythagoras_f_AbstractPoint_2_classLit = createForClass(127);
defineClass(467, 1, {});
var Lpythagoras_f_AbstractTransform_2_classLit = createForClass(467);
defineClass(135, 1, $intern_53);
_.equals$ = function equals_20(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 135)) {
    p = obj;
    return this.x_1() == p.x_0 && this.y_1() == p.y_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_24(){
  return round_int(this.x_1()) ^ round_int(this.y_1());
}
;
_.toString$ = function toString_43(){
  return vectorToString(this.x_1(), this.y_1());
}
;
var Lpythagoras_f_AbstractVector_2_classLit = createForClass(135);
function $copy(this$static){
  return new AffineTransform_0(this$static.m00, this$static.m01, this$static.m10, this$static.m11, this$static.tx, this$static.ty);
}

function $scale_1(this$static, scaleX, scaleY){
  this$static.m00 *= scaleX;
  this$static.m01 *= scaleX;
  this$static.m10 *= scaleY;
  this$static.m11 *= scaleY;
  return this$static;
}

function $setRotation(this$static, angle){
  var cosa, sina, sx, sy;
  sx = sqrt_0(this$static.m00 * this$static.m00 + this$static.m01 * this$static.m01);
  sy = sqrt_0(this$static.m10 * this$static.m10 + this$static.m11 * this$static.m11);
  sina = sin_0(angle);
  cosa = cos_0(angle);
  this$static.m00 = cosa * sx;
  this$static.m01 = sina * sx;
  this$static.m10 = -sina * sy;
  this$static.m11 = cosa * sy;
  return this$static;
}

function $setTransform(this$static, m00, m01, m10, m11, tx, ty){
  this$static.m00 = m00;
  this$static.m01 = m01;
  this$static.m10 = m10;
  this$static.m11 = m11;
  this$static.tx = tx;
  this$static.ty = ty;
  return this$static;
}

function $translate_0(this$static, tx, ty){
  this$static.tx += this$static.m00 * tx + this$static.m10 * ty;
  this$static.ty += this$static.m11 * ty + this$static.m01 * tx;
  return this$static;
}

function AffineTransform(){
  AffineTransform_0.call(this, 1, 0, 0, 1, 0, 0);
}

function AffineTransform_0(m00, m01, m10, m11, tx, ty){
  this.m00 = m00;
  this.m01 = m01;
  this.m10 = m10;
  this.m11 = m11;
  this.tx = tx;
  this.ty = ty;
}

defineClass(77, 467, {}, AffineTransform, AffineTransform_0);
_.toString$ = function toString_44(){
  return 'affine [' + toString_45(this.m00, TO_STRING_DECIMAL_PLACES) + ' ' + toString_45(this.m01, TO_STRING_DECIMAL_PLACES) + ' ' + toString_45(this.m10, TO_STRING_DECIMAL_PLACES) + ' ' + toString_45(this.m11, TO_STRING_DECIMAL_PLACES) + ' ' + new Vector_0(this.tx, this.ty) + ']';
}
;
_.m00 = 0;
_.m01 = 0;
_.m10 = 0;
_.m11 = 0;
_.tx = 0;
_.ty = 0;
var Lpythagoras_f_AffineTransform_2_classLit = createForClass(77);
function Dimension(){
  Dimension_0.call(this);
}

function Dimension_0(){
  this.width_0 = 0;
  this.height_0 = 0;
}

defineClass(101, 129, {3:1, 129:1}, Dimension, Dimension_0);
_.height_0 = 0;
_.width_0 = 0;
var Lpythagoras_f_Dimension_2_classLit = createForClass(101);
function $clinit_Dimensions(){
  $clinit_Dimensions = emptyMethod;
  new Dimension_0;
}

function iceil(v){
  var iv;
  iv = round_int(v);
  return v <= 0 || iv == v || iv == $intern_0?iv:iv + 1;
}

function ifloor(v){
  var iv;
  iv = round_int(v);
  return v >= 0 || iv == v || iv == $intern_24?iv:iv - 1;
}

function toString_45(value_0, decimalPlaces){
  var buf, ii, ii0, ivalue;
  if (isNaN(value_0))
    return 'NaN';
  buf = new StringBuilder;
  if (value_0 >= 0)
    buf.string += '+';
  else {
    buf.string += '-';
    value_0 = -value_0;
  }
  ivalue = round_int(value_0);
  buf.string += ivalue;
  if (decimalPlaces > 0) {
    buf.string += '.';
    for (ii0 = 0; ii0 < decimalPlaces; ii0++) {
      value_0 = (value_0 - ivalue) * 10;
      ivalue = round_int(value_0);
      buf.string += ivalue;
    }
    for (ii = 0; ii < decimalPlaces - 1; ii++) {
      $charAt(buf, buf.string.length - 1) == 48 && $setLength(buf, buf.string.length - 1);
    }
  }
  return buf.string;
}

var TO_STRING_DECIMAL_PLACES = 3;
function $set_2(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  return this$static;
}

function Point(){
}

function Point_0(){
  $set_2(this, 0, 0);
}

defineClass(128, 127, {3:1, 127:1, 58:1}, Point, Point_0);
_.x_1 = function x_2(){
  return this.x_0;
}
;
_.y_1 = function y_2(){
  return this.y_0;
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Point_2_classLit = createForClass(128);
function $clinit_Points(){
  $clinit_Points = emptyMethod;
  new Point_0;
}

function pointToString(x_0, y_0){
  $clinit_Points();
  return toString_45(x_0, TO_STRING_DECIMAL_PLACES) + toString_45(y_0, TO_STRING_DECIMAL_PLACES);
}

function multiply(am00, am01, am10, am11, atx, aty, bm00, bm01, bm10, bm11, btx, bty, into){
  $setTransform(into, am00 * bm00 + am10 * bm01, am01 * bm00 + am11 * bm01, am00 * bm10 + am10 * bm11, am01 * bm10 + am11 * bm11, am00 * btx + am10 * bty + atx, am01 * btx + am11 * bty + aty);
  return into;
}

function multiply_0(a, b, into){
  return multiply(a.m00, a.m01, a.m10, a.m11, a.tx, a.ty, b.m00, b.m01, b.m10, b.m11, b.tx, b.ty, into);
}

function Vector_0(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(80, 135, $intern_53, Vector_0);
_.x_1 = function x_3(){
  return this.x_0;
}
;
_.y_1 = function y_3(){
  return this.y_0;
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Vector_2_classLit = createForClass(80);
function $clinit_Vectors(){
  $clinit_Vectors = emptyMethod;
  new Vector_0(1, 0);
  new Vector_0(0, 1);
  new Vector_0(0, 0);
  new Vector_0($intern_54, $intern_54);
  new Vector_0($intern_55, $intern_55);
}

function vectorToString(x_0, y_0){
  $clinit_Vectors();
  return toString_45(x_0, TO_STRING_DECIMAL_PLACES) + toString_45(y_0, TO_STRING_DECIMAL_PLACES);
}

function $clinit_Reactor(){
  $clinit_Reactor = emptyMethod;
  DISPATCHING = new Cons(null, null);
}

function $addConnection(this$static, listener){
  return $addCons(this$static, new Cons(this$static, listener));
}

function $addCons(this$static, cons){
  this$static._listeners == DISPATCHING?(this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$1(this$static, cons))):(this$static._listeners = insert(this$static._listeners, cons));
  return cons;
}

function $disconnect(this$static, cons){
  this$static._listeners == DISPATCHING?(this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$2(this$static, cons))):(this$static._listeners = remove_34(this$static._listeners, cons));
}

function $notify(this$static, notifier, a1, a2, a3){
  var cons, ex, exn, lners, run, sentinel, run_0;
  if (this$static._listeners == DISPATCHING) {
    this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$4(this$static, notifier, a1, a2, a3));
    return;
  }
  lners = this$static._listeners;
  sentinel = DISPATCHING;
  this$static._listeners = sentinel;
  exn = null;
  try {
    for (cons = lners; cons; cons = cons.next) {
      try {
        notifier.notify(cons._ref._lner, a1, a2, a3);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 8)) {
          ex = $e0;
          exn = ex;
        }
         else 
          throw unwrap($e0);
      }
      cons._oneShot && $close(cons);
    }
  }
   finally {
    this$static._listeners = lners;
    while (run = (run_0 = this$static._pendingRuns , !!run_0 && (this$static._pendingRuns = run_0.next) , run_0)) {
      try {
        run.run();
      }
       catch ($e1) {
        $e1 = wrap($e1);
        if (instanceOf($e1, 8)) {
          ex = $e1;
          exn = ex;
        }
         else 
          throw unwrap($e1);
      }
    }
  }
  if (exn)
    throw unwrap(exn);
}

function append(head, action){
  if (!head)
    return action;
  head.next = append(head.next, action);
  return head;
}

defineClass(442, 1, {});
var DISPATCHING;
var Lreact_Reactor_2_classLit = createForClass(442);
function $clinit_AbstractSignal(){
  $clinit_AbstractSignal = emptyMethod;
  $clinit_Reactor();
  EMIT = new AbstractSignal$1;
}

function $notifyEmit(this$static, event_0){
  $notify(this$static, EMIT, event_0, null, null);
}

defineClass(460, 442, {});
var EMIT;
var Lreact_AbstractSignal_2_classLit = createForClass(460);
defineClass(444, 1, {});
var Lreact_Reactor$Notifier_2_classLit = createForClass(444);
function AbstractSignal$1(){
}

defineClass(317, 444, {}, AbstractSignal$1);
_.notify = function notify(slot, event_0, _1, _2){
  slot.onEmit(event_0);
}
;
var Lreact_AbstractSignal$1_2_classLit = createForClass(317);
function $clinit_AbstractValue(){
  $clinit_AbstractValue = emptyMethod;
  $clinit_Reactor();
  CHANGE = new AbstractValue$1;
}

function $updateAndNotify(this$static, value_0, force){
  var ovalue;
  ovalue = this$static.updateLocal(value_0);
  (force || ($clinit_Reactor() , !(maskUndefined(value_0) === maskUndefined(ovalue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ovalue)))) && $notify(this$static, CHANGE, value_0, ovalue, null);
  return ovalue;
}

defineClass(459, 442, {});
_.equals$ = function equals_21(other){
  var ovalue, value_0;
  if (other == null)
    return false;
  if (getClass__Ljava_lang_Class___devirtual$(other) != this.___clazz$)
    return false;
  value_0 = this.get_3();
  ovalue = other.get_3();
  return $clinit_Reactor() , maskUndefined(value_0) === maskUndefined(ovalue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ovalue);
}
;
_.hashCode$ = function hashCode_25(){
  var value_0;
  value_0 = this.get_3();
  return value_0 == null?0:hashCode__I__devirtual$(value_0);
}
;
_.toString$ = function toString_46(){
  var cname;
  cname = $getName(this.___clazz$);
  return $substring(cname, cname.lastIndexOf('.') + 1) + '(' + this.get_3() + ')';
}
;
_.updateAndNotify = function updateAndNotify(value_0, force){
  return $updateAndNotify(this, value_0, force);
}
;
_.updateLocal = function updateLocal(value_0){
  throw new UnsupportedOperationException;
}
;
var CHANGE;
var Lreact_AbstractValue_2_classLit = createForClass(459);
function AbstractValue$1(){
}

defineClass(281, 444, {}, AbstractValue$1);
_.notify = function notify_0(lner, value_0, oldValue, ignored){
  lner.onEmit(value_0);
}
;
var Lreact_AbstractValue$1_2_classLit = createForClass(281);
defineClass(461, 1, $intern_46);
var Lreact_Connection_2_classLit = createForClass(461);
function $atPrio(this$static, priority){
  if (!this$static._owner)
    throw new IllegalStateException_0('Cannot change priority of disconnected connection.');
  $disconnect(this$static._owner, this$static);
  this$static.next = null;
  this$static._priority = priority;
  $addCons(this$static._owner, this$static);
  return this$static;
}

function $close(this$static){
  if (this$static._owner) {
    $defang(this$static._ref, ($clinit_Slots() , NOOP));
    $disconnect(this$static._owner, this$static);
    this$static._owner = null;
  }
}

function Cons(owner, listener){
  this._owner = owner;
  this._ref = new Cons$StrongRef(listener);
}

function insert(head, cons){
  if (!head) {
    return cons;
  }
   else if (cons._priority > head._priority) {
    cons.next = head;
    return cons;
  }
   else {
    head.next = insert(head.next, cons);
    return head;
  }
}

function remove_34(head, cons){
  if (!head)
    return null;
  if (head == cons)
    return head.next;
  head.next = remove_34(head.next, cons);
  return head;
}

defineClass(160, 461, $intern_46, Cons);
_.toString$ = function toString_47(){
  return '[owner=' + this._owner + ', pri=' + this._priority + ', lner=' + this._ref._lner + ', hasNext=' + !!this.next + ', oneShot=' + this._oneShot + ']';
}
;
_._oneShot = false;
_._priority = 0;
var Lreact_Cons_2_classLit = createForClass(160);
defineClass(466, 1, {});
var Lreact_Cons$ListenerRef_2_classLit = createForClass(466);
function $defang(this$static, noop){
  this$static._lner = noop;
}

function Cons$StrongRef(lner){
  this._lner = lner;
}

defineClass(341, 466, {}, Cons$StrongRef);
var Lreact_Cons$StrongRef_2_classLit = createForClass(341);
function Value(value_0){
  $clinit_AbstractValue();
  this._value = value_0;
}

defineClass(99, 459, {}, Value);
_.get_3 = function get_12(){
  return this._value;
}
;
_.updateLocal = function updateLocal_0(value_0){
  var oldValue;
  oldValue = this._value;
  this._value = value_0;
  return oldValue;
}
;
var Lreact_Value_2_classLit = createForClass(99);
function $updateAndNotify_0(this$static, value_0, force){
  return $updateAndNotify_1(this$static, value_0, force);
}

function $updateAndNotify_1(this$static, value_0, force){
  if (this$static._value != null)
    throw new IllegalStateException_0('Already completed');
  try {
    return $updateAndNotify(this$static, value_0, force);
  }
   finally {
    this$static._listeners = null;
  }
}

function RPromise$3(){
  $clinit_AbstractValue();
  Value.call(this, null);
}

defineClass(280, 99, {}, RPromise$3);
_.updateAndNotify = function updateAndNotify_0(value_0, force){
  return $updateAndNotify_0(this, value_0, force);
}
;
var Lreact_RPromise$3_2_classLit = createForClass(280);
defineClass(443, 1, {});
var Lreact_Reactor$Runs_2_classLit = createForClass(443);
function Reactor$1(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(206, 443, {}, Reactor$1);
_.run = function run_5(){
  this.this$01._listeners = insert(this.this$01._listeners, this.val$cons2);
}
;
var Lreact_Reactor$1_2_classLit = createForClass(206);
function Reactor$2(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(207, 443, {}, Reactor$2);
_.run = function run_6(){
  this.this$01._listeners = remove_34(this.this$01._listeners, this.val$cons2);
}
;
var Lreact_Reactor$2_2_classLit = createForClass(207);
function Reactor$4(this$0, val$notifier, val$a1, val$a2, val$a3){
  this.this$01 = this$0;
  this.val$notifier2 = val$notifier;
  this.val$a13 = val$a1;
  this.val$a24 = val$a2;
  this.val$a35 = val$a3;
}

defineClass(208, 443, {}, Reactor$4);
_.run = function run_7(){
  $notify(this.this$01, this.val$notifier2, this.val$a13, this.val$a24, this.val$a35);
}
;
var Lreact_Reactor$4_2_classLit = createForClass(208);
function Signal(){
  $clinit_AbstractSignal();
}

defineClass(62, 460, {}, Signal);
var Lreact_Signal_2_classLit = createForClass(62);
function $clinit_Slots(){
  $clinit_Slots = emptyMethod;
  NOOP = new Slots$1;
}

var NOOP;
defineClass(451, 441, {});
_.onEmit = function onEmit_4(event_0){
  this.onEmit_0();
}
;
_.run = function run_8(){
  this.onEmit_0();
}
;
var Lreact_UnitSlot_2_classLit = createForClass(451);
function Slots$1(){
}

defineClass(360, 451, {}, Slots$1);
_.onEmit_0 = function onEmit_5(){
}
;
var Lreact_Slots$1_2_classLit = createForClass(360);
defineClass(469, 1, {});
var Lreact_Try_2_classLit = createForClass(469);
function Try$Failure(cause){
  this.cause = cause;
}

defineClass(166, 469, {}, Try$Failure);
_.toString$ = function toString_48(){
  return 'Failure(' + this.cause + ')';
}
;
var Lreact_Try$Failure_2_classLit = createForClass(166);
function Try$Success(value_0){
  this.value_0 = value_0;
}

defineClass(102, 469, {}, Try$Success);
_.toString$ = function toString_49(){
  return 'Success(' + this.value_0 + ')';
}
;
var Lreact_Try$Success_2_classLit = createForClass(102);
var Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass(432), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass(434), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass(null), I_classLit = createForPrimitive('I'), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass(437), Z_classLit = createForPrimitive('Z'), D_classLit = createForPrimitive('D'), F_classLit = createForPrimitive('F'), S_classLit = createForPrimitive('S'), C_classLit = createForPrimitive('C'), Ljava_util_Map$Entry_2_classLit = createForInterface();
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=spaceinvadersx-0.js

