port module Main exposing
    ( Config
    , Model
    , Msg
    , addCmd
    , config
    , init
    , lifeCycle
    , log
    , main
    , msgFromTask
    , printDotOrF
    , update
    , validator
    )

import Expect
import Json.Decode as D
import Json.Encode as E
import Platform exposing (worker)
import Task exposing (Task)
import Test
import Test.All
import WebDriver
import WebDriver.Assert exposing (equal)
import WebDriver.Setup as WD
    exposing
        ( Next
        , Reference
        , Report
        , Return
        , Status(..)
        , SuiteState
        , Validator
        , next
        , setup
        )
import WebDriver.Step.Element as El


port log : String -> Cmd msg


type alias Config =
    { url : String
    , capabilities : E.Value
    , instances : Int
    }


config : Config
config =
    { url =
        "http://localhost:4444/wd/hub"
    , capabilities =
        D.decodeString D.value
            ("{ \"desiredCapabilities\": {"
                ++ "\"browserName\": \"chrome\""
                ++ "}}"
            )
            |> Result.withDefault E.null
    , instances = 10
    }


main : Program () Model Msg
main =
    worker
        { init = init
        , subscriptions = \_ -> Sub.none
        , update = update
        }


type alias Model =
    Result String (SuiteState Config)


type alias Msg =
    Reference Config


init : () -> ( Model, Cmd Msg )
init flags =
    lifeCycle (setup config Test.All.suite validator)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg =
    Result.map (next validator msg)
        >> lifeCycle
        >> printDotOrF msg


validator : Validator Config
validator a b =
    if b.instances > a then
        Just b

    else
        Nothing


printDotOrF : Reference info -> ( model, Cmd msg ) -> ( model, Cmd msg )
printDotOrF ref =
    (if WD.isFail ref then
        ansi.red ++ "F" ++ ansi.reset

     else
        ansi.green ++ "." ++ ansi.reset
    )
        |> log
        |> addCmd


addCmd : Cmd msg -> ( model, Cmd msg ) -> ( model, Cmd msg )
addCmd cmd ( model, oldCmd ) =
    ( model, Cmd.batch [ cmd, oldCmd ] )


lifeCycle : Result String ( SuiteState Config, Next Config ) -> ( Model, Cmd Msg )
lifeCycle income =
    case income of
        Ok ( model, WD.Tasks tasks ) ->
            ( Ok model, msgFromTask tasks )

        Ok ( model, WD.Report report ) ->
            ( Ok model, Cmd.none )

        Err e ->
            ( Err e, log e )


msgFromTask : List (Task Never msg) -> Cmd msg
msgFromTask =
    List.map (Task.perform identity) >> Cmd.batch


ansi =
    { black = "\u{001B}[30m"
    , red = "\u{001B}[31m"
    , green = "\u{001B}[32m"
    , yellow = "\u{001B}[33m"
    , blue = "\u{001B}[34m"
    , magenta = "\u{001B}[35m"
    , cyan = "\u{001B}[36m"
    , white = "\u{001B}[37m"
    , reset = "\u{001B}[0m"
    }
