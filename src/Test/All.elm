module Test.All exposing (suite)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Task
import WebDriver exposing (describe, test)
import WebDriver.Assert as Assert
import WebDriver.Step.Element as Selector


suite : WebDriver.Test a
suite =
    describe "Web Page Navigate"
        [ test "star elm-webdriver" <|
            \{ url, element, attribute } ->
                url "https://github.com/justgook/elm-webdriver"
                    |> Task.andThen (\_ -> "h1" |> Selector.css |> element)
                    |> Task.andThen (.value >> attribute "innerText")
                    |> Task.andThen (.value >> Assert.equal "justgook/elm-webdriver")
        ]
