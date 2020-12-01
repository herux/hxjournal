unit indexact;

{$mode objfpc}{$H+}

interface

uses
  BrookAction;

type

  { TIndex }

  TIndex = class(TBrookAction)
  public
    procedure Get; override;
  end;

implementation

{ TIndex }

procedure TIndex.Get;
begin
  Write('Your content here ...');
end;

initialization
  TIndex.Register('/', True);

end.