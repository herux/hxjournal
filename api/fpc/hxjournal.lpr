program hxjournal;

{$mode objfpc}{$H+}

uses
{$IFDEF UNIX}{$IFDEF UseCThreads}
  cthreads,
{$ENDIF}{$ENDIF}
  BrookApplication, Brokers, indexAct;

begin
  BrookApp.Run;
end.