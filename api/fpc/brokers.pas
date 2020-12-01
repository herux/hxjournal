unit Brokers;

{$mode objfpc}{$H+}

interface

uses
  BrookFCLFCGIBroker, BrookUtils, BrookHttpConsts, Classes, SysUtils;

const
  PUBLIC_HTML = '/';

implementation

initialization
  BrookSettings.Charset := BROOK_HTTP_CHARSET_UTF_8;
  BrookSettings.Page404File := PUBLIC_HTML + '404.html';
  BrookSettings.Page500File := PUBLIC_HTML + '500.html';

end.