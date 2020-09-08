unit indexAct;

{$mode objfpc}{$H+}

interface

uses
  BrookAction;

type

  { TIndexAction }

  TIndexAction = class(TBrookAction)
  public
    procedure Get; override;
  end;

implementation

{ TIndexAction }

procedure TIndexAction.Get;
begin
  Write('Your content here ...');
end;

initialization
  TIndexAction.Register('*');

end.
