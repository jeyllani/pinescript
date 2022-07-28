
"_functions"
    title: "Built-in Functions"
    prefix: "fun_"

"indicator"
    kind: "Built-in annotation function"
    desc: "This declaration statement designates the script as an indicator and sets a number of indicator-related properties."
    args:
        name: "title"
        info: "The title of the script. It is displayed on the chart when no `shorttitle` argument is used and becomes the publication's default title when publishing the script."
        type: "const string"

        name: "shorttitle"
        info: "The script's display name on charts. If specified it will replace the `title` argument in most chart-related windows. Optional. The default is the argument used for `title`."
        type: "const string"

        name: "overlay"
        info: "If @op true the indicator will be displayed over the chart. If @op false it will be added in a separate pane. Optional. The default is @op false."
        type: "const bool"

        name: "format"
        info: "Specifies the formatting of the script's displayed values. Possible values: @var format.inherit @var format.price @var format.volume. Optional. The default is @var format.inherit."
        type: "const string"

        name: "precision"
        info: "Specifies the number of digits after the floating point of the script's displayed values. Must be a non-negative integer no greater than 16. If `format` is set to @var format.inherit and `precision` is specified the format will instead be set to @var format.price. Optional. The default is inherited from the precision of the chart's symbol."
        type: "const int"

        name: "scale"
        info: "The price scale used. Possible values: @var scale.right @var scale.left @var scale.none. The @var scale.none value can only be applied in combination with `overlay = true`. Optional. By default the script uses the same scale as the chart."
        type: "scale_type"

        name: "max_bars_back"
        info: "The length of the historical buffer the script keeps for every variable and function which determines how many past values can be referenced using the `` history-referencing operator. The required buffer size is automatically detected by the Pine Script™ runtime. Using this parameter is only necessary when a runtime error occurs because automatic detection fails. More information on the underlying mechanics of the historical buffer can be found in our Help Center. Optional. The default is 0."
        type: "const int"

        name: "timeframe"
        info: 'Adds multi-timeframe functionality to simple scripts. When used a "Timeframe" field will be added to the script\'s "Settings/Inputs" tab. The field\'s default value will be the argument supplied whose format must conform to timeframe string specifications. To specify the chart\'s timeframe use an empty string or the @var timeframe.period variable. The parameter cannot be used with scripts using Pine Script™ drawings. Optional. The default is @var timeframe.period.'
        type: "const string"

        name: "max_lines_count"
        info: "The number of last @op line drawings displayed. Possible values: 1-500. Optional. The default is 50."
        type: "const int"

        name: "max_labels_count"
        info: "The number of last @op label drawings displayed. Possible values: 1-500. Optional. The default is 50."
        type: "const int"

        name: "timeframe_gaps"
        info: 'Specifies how the indicator\'s values are displayed on chart bars when the `timeframe` is higher than the chart\'s. If @op true a value only appears on a chart bar when the higher `timeframe` value becomes available otherwise @var na is returned (thus a "gap" occurs). With @op false what would otherwise be gaps are filled with the latest known value returned avoiding @op na values. When used a "Gaps" checkbox will appear in the indicator\'s "Settings/Inputs" tab. Optional. The default is @op true.'
        type: "const bool"

        name: "max_boxes_count"
        info: "The number of last @op box drawings displayed. Possible values: 1-500. Optional. The default is 50."
        type: "const int"

        name: "explicit_plot_zorder"
        info: "Specifies the order in which the script's plots fills and hlines are rendered. If @op true plots are drawn in the order in which they appear in the script's code each newer plot being drawn above the previous ones. This only applies to `plot*()` functions @fun fill and @fun hline. Optional. The default is @op false."
        type: "const bool"
    remarks: "Every indicator script must have one @fun indicator call."
    syntax: "indicator(title shorttitle overlay format precision scale max_bars_back timeframe timeframe_gaps explicit_plot_zorder max_lines_count max_labels_count max_boxes_count) → void"

"plot"
    kind: "Built-in annotation function"
    desc: "Plots a series of data on the chart."
    args:
        name: "series"
        info: "Series of data to be plotted. Required argument."
        type: "series int/float"

        name: "title"
        info: "Title of the plot."
        type: "const string"

        name: "color"
        info: "Color of the plot. You can use constants like 'color=color.red' or 'color=#ff001a' as well as complex expressions like 'color = close >= open ? color.green : color.red'. Optional argument."
        type: "series color"

        name: "linewidth"
        info: "Width of the plotted line. Default value is 1. Not applicable to every style."
        type: "input int"

        name: "style"
        info: "Type of plot. Possible values are: @var plot.style_line @var plot.style_stepline @var plot.style_stepline_diamond @var plot.style_histogram @var plot.style_cross @var plot.style_area @var plot.style_columns @var plot.style_circles @var plot.style_linebr @var plot.style_areabr. Default value is @var plot.style_line."
        type: "plot_style"

        name: "trackprice"
        info: "If true then a horizontal price line will be shown at the level of the last indicator value. Default is false."
        type: "input bool"

        name: "histbase"
        info: "The price value used as the reference level when rendering plot with @var plot.style_histogram @var plot.style_columns or @var plot.style_area style. Default is 0.0."
        type: "input int/float"

        name: "offset"
        info: "Shifts the plot to the left or to the right on the given number of bars. Default is 0."
        type: "series int"

        name: "join"
        info: "If true then plot points will be joined with line applicable only to @var plot.style_cross and @var plot.style_circles styles. Default is false."
        type: "input bool"

        name: "editable"
        info: "If true then plot style will be editable in Format dialog. Default is true."
        type: "const bool"

        name: "show_last"
        info: "If set defines the number of bars (from the last bar back to the past) to plot on chart."
        type: "input int"

        name: "display"
        info: "Controls where the plot's information is displayed. Display options support addition and subtraction meaning that using `display.all - display.status_line` will display the plot's information everywhere except in the script's status line. `display.price_scale + display.status_line` will display the plot only in the price scale and status line. When `display` arguments such as `display.price_scale` have user-controlled chart settings equivalents the relevant plot information will only appear when all settings allow for it. Possible values: @var display.none @var display.pane @var display.data_window @var display.price_scale @var display.status_line @var display.all. Optional. The default is @var display.all."
        type: "plot_display"
    returns: "A plot object that can be used in @fun fill"
    syntax: "plot(series title color linewidth style trackprice histbase offset join editable show_last display) → plot"

"plotshape"
    kind: "Built-in annotation function"
    desc: "Plots visual shapes on the chart."
    args:
        name: "series"
        info: "Series of data to be plotted as shapes. Series is treated as a series of boolean values for all location values except @var location.absolute. Required argument."
        type: "series bool"

        name: "title"
        info: "Title of the plot."
        type: "const string"

        name: "style"
        info: "Type of plot. Possible values are: @var shape.xcross @var shape.cross @var shape.triangleup @var shape.triangledown @var shape.flag @var shape.circle @var shape.arrowup @var shape.arrowdown @var shape.labelup @var shape.labeldown @var shape.square @var shape.diamond. Default value is @var shape.xcross."
        type: "input string"

        name: "location"
        info: "Location of shapes on the chart. Possible values are: @var location.abovebar @var location.belowbar @var location.top @var location.bottom @var location.absolute. Default value is @var location.abovebar."
        type: "input string"

        name: "color"
        info: "Color of the shapes. You can use constants like 'color=color.red' or 'color=#ff001a' as well as complex expressions like 'color = close >= open ? color.green : color.red'. Optional argument."
        type: "series color"

        name: "offset"
        info: "Shifts shapes to the left or to the right on the given number of bars. Default is 0."
        type: "series int"

        name: "text"
        info: "Text to display with the shape. You can use multiline text to separate lines use '\\n' escape sequence. Example: 'line one\\nline two'."
        type: "const string"

        name: "textcolor"
        info: "Color of the text. You can use constants like 'textcolor=color.red' or 'textcolor=#ff001a' as well as complex expressions like 'textcolor = close >= open ? color.green : color.red'. Optional argument."
        type: "series color"

        name: "editable"
        info: "If true then plotshape style will be editable in Format dialog. Default is true."
        type: "const bool"

        name: "show_last"
        info: "If set defines the number of shapes (from the last bar back to the past) to plot on chart."
        type: "input int"

        name: "size"
        info: "Size of shapes on the chart. Possible values are: @var size.auto @var size.tiny @var size.small @var size.normal @var size.large @var size.huge. Default is @var size.auto."
        type: "const string"

        name: "display"
        info: "Controls where the plot's information is displayed. Display options support addition and subtraction meaning that using `display.all - display.status_line` will display the plot's information everywhere except in the script's status line. `display.price_scale + display.status_line` will display the plot only in the price scale and status line. When `display` arguments such as `display.price_scale` have user-controlled chart settings equivalents the relevant plot information will only appear when all settings allow for it. Possible values: @var display.none @var display.pane @var display.data_window @var display.price_scale @var display.status_line @var display.all. Optional. The default is @var display.all."
        type: "plot_display"
    remarks: "Use @fun plotshape function in conjunction with 'overlay=true' @fun indicator parameter!"
    syntax: "plotshape(series title style location color offset text textcolor editable size show_last display) → void"

"plotchar"
    kind: "Built-in annotation function"
    desc: "Plots visual shapes using any given one Unicode character on the chart."
    args:
        name: "series"
        info: "Series of data to be plotted as shapes. Series is treated as a series of boolean values for all location values except @var location.absolute. Required argument."
        type: "series bool"

        name: "title"
        info: "Title of the plot."
        type: "const string"

        name: "char"
        info: "Character to use as a visual shape."
        type: "input string"

        name: "location"
        info: "Location of shapes on the chart. Possible values are: @var location.abovebar @var location.belowbar @var location.top @var location.bottom @var location.absolute. Default value is @var location.abovebar."
        type: "input string"

        name: "color"
        info: "Color of the shapes. You can use constants like 'color=color.red' or 'color=#ff001a' as well as complex expressions like 'color = close >= open ? color.green : color.red'. Optional argument."
        type: "series color"

        name: "offset"
        info: "Shifts shapes to the left or to the right on the given number of bars. Default is 0."
        type: "series int"

        name: "text"
        info: "Text to display with the shape. You can use multiline text to separate lines use '\\n' escape sequence. Example: 'line one\\nline two'."
        type: "const string"

        name: "textcolor"
        info: "Color of the text. You can use constants like 'textcolor=color.red' or 'textcolor=#ff001a' as well as complex expressions like 'textcolor = close >= open ? color.green : color.red'. Optional argument."
        type: "series color"

        name: "editable"
        info: "If true then plotchar style will be editable in Format dialog. Default is true."
        type: "const bool"

        name: "show_last"
        info: "If set defines the number of chars (from the last bar back to the past) to plot on chart."
        type: "input int"

        name: "size"
        info: "Size of characters on the chart. Possible values are: @var size.auto @var size.tiny @var size.small @var size.normal @var size.large @var size.huge. Default is @var size.auto."
        type: "const string"

        name: "display"
        info: "Controls where the plot's information is displayed. Display options support addition and subtraction meaning that using `display.all - display.status_line` will display the plot's information everywhere except in the script's status line. `display.price_scale + display.status_line` will display the plot only in the price scale and status line. When `display` arguments such as `display.price_scale` have user-controlled chart settings equivalents the relevant plot information will only appear when all settings allow for it. Possible values: @var display.none @var display.pane @var display.data_window @var display.price_scale @var display.status_line @var display.all. Optional. The default is @var display.all."
        type: "plot_display"
    remarks: "Use @fun plotchar function in conjunction with 'overlay=true' @fun indicator parameter!"
    syntax: "plotchar(series title char location color offset text textcolor editable size show_last display) → void"

"plotarrow"
    kind: "Built-in annotation function"
    desc: "Plots up and down arrows on the chart. Up arrow is drawn at every indicator positive value down arrow is drawn at every negative value. If indicator returns @var na then no arrow is drawn. Arrows has different height the more absolute indicator value the longer arrow is drawn."
    args:
        name: "series"
        info: "Series of data to be plotted as arrows. Required argument."
        type: "series int/float"

        name: "title"
        info: "Title of the plot."
        type: "const string"

        name: "colorup"
        info: "Color of the up arrows. Optional argument."
        type: "series color"

        name: "colordown"
        info: "Color of the down arrows. Optional argument."
        type: "series color"

        name: "offset"
        info: "Shifts arrows to the left or to the right on the given number of bars. Default is 0."
        type: "series int"

        name: "minheight"
        info: "Minimal possible arrow height in pixels. Default is 5."
        type: "input int"

        name: "maxheight"
        info: "Maximum possible arrow height in pixels. Default is 100."
        type: "input int"

        name: "editable"
        info: "If true then plotarrow style will be editable in Format dialog. Default is true."
        type: "const bool"

        name: "show_last"
        info: "If set defines the number of arrows (from the last bar back to the past) to plot on chart."
        type: "input int"

        name: "display"
        info: "Controls where the plot's information is displayed. Display options support addition and subtraction meaning that using `display.all - display.status_line` will display the plot's information everywhere except in the script's status line. `display.price_scale + display.status_line` will display the plot only in the price scale and status line. When `display` arguments such as `display.price_scale` have user-controlled chart settings equivalents the relevant plot information will only appear when all settings allow for it. Possible values: @var display.none @var display.pane @var display.data_window @var display.price_scale @var display.status_line @var display.all. Optional. The default is @var display.all."
        type: "plot_display"
    remarks:"Use @fun plotarrow function in conjunction with 'overlay=true' @fun indicator parameter!"
    syntax: "plotarrow(series title colorup colordown offset minheight maxheight editable show_last display) → void"

"plotbar"
    kind: "Built-in annotation function"
    desc: "Plots ohlc bars on the chart."
    args:
        name: "open"
        info: "Open series of data to be used as open values of bars. Required argument."
        type: "series int/float"

        name: "high"
        info: "High series of data to be used as high values of bars. Required argument."
        type: "series int/float"

        name: "low"
        info: "Low series of data to be used as low values of bars. Required argument."
        type: "series int/float"

        name: "close"
        info: "Close series of data to be used as close values of bars. Required argument."
        type: "series int/float"

        name: "title"
        info: "Title of the plotbar. Optional argument."
        type: "const string"

        name: "color"
        info: "Color of the ohlc bars. You can use constants like 'color=color.red' or 'color=#ff001a' as well as complex expressions like 'color = close >= open ? color.green : color.red'. Optional argument."
        type: "series color"

        name: "editable"
        info: "If true then plotbar style will be editable in Format dialog. Default is true."
        type: "const bool"

        name: "show_last"
        info: "If set defines the number of bars (from the last bar back to the past) to plot on chart."
        type: "input int"

        name: "display"
        info: "Controls where the plot's information is displayed. Display options support addition and subtraction meaning that using `display.all - display.status_line` will display the plot's information everywhere except in the script's status line. `display.price_scale + display.status_line` will display the plot only in the price scale and status line. When `display` arguments such as `display.price_scale` have user-controlled chart settings equivalents the relevant plot information will only appear when all settings allow for it. Possible values: @var display.none @var display.pane @var display.data_window @var display.price_scale @var display.status_line @var display.all. Optional. The default is @var display.all."
        type: "plot_display"
    remarks: "Even if one value of open high low or close equal NaN then bar no draw."
            "The maximal value of open high low or close will be set as 'high' and the minimal value will be set as 'low'."
    syntax: "plotbar(open high low close title color editable show_last display) → void"

"plotcandle"
    kind: "Built-in annotation function"
    desc: "Plots candles on the chart."
    args:
        name: "open"
        info: "Open series of data to be used as open values of candles. Required argument."
        type: "series int/float"

        name: "high"
        info: "High series of data to be used as high values of candles. Required argument."
        type: "series int/float"

        name: "low"
        info: "Low series of data to be used as low values of candles. Required argument."
        type: "series int/float"

        name: "close"
        info: "Close series of data to be used as close values of candles. Required argument."
        type: "series int/float"

        name: "title"
        info: "Title of the plotcandles. Optional argument."
        type: "const string"

        name: "color"
        info: "Color of the candles. You can use constants like 'color=color.red' or 'color=#ff001a' as well as complex expressions like 'color = close >= open ? color.green : color.red'. Optional argument."
        type: "series color"

        name: "wickcolor"
        info: "The color of the wick of candles. An optional argument."
        type: "series color"

        name: "editable"
        info: "If true then plotcandle style will be editable in Format dialog. Default is true."
        type: "const bool"

        name: "show_last"
        info: "If set defines the number of candles (from the last bar back to the past) to plot on chart."
        type: "input int"

        name: "bordercolor"
        info: "The border color of candles. An optional argument."
        type: "series color"

        name: "display"
        info: "Controls where the plot's information is displayed. Display options support addition and subtraction meaning that using `display.all - display.status_line` will display the plot's information everywhere except in the script's status line. `display.price_scale + display.status_line` will display the plot only in the price scale and status line. When `display` arguments such as `display.price_scale` have user-controlled chart settings equivalents the relevant plot information will only appear when all settings allow for it. Possible values: @var display.none @var display.pane @var display.data_window @var display.price_scale @var display.status_line @var display.all. Optional. The default is @var display.all."
        type: "plot_display"
    remarks: "Even if one value of open high low or close equal NaN then bar no draw."
            "The maximal value of open high low or close will be set as 'high' and the minimal value will be set as 'low'."
    syntax: "plotcandle(open high low close title color wickcolor editable show_last bordercolor display) → void"

"barcolor"
    kind: "Built-in annotation function"
    desc: "Set color of bars."
    args:
        name: "color"
        info: "Color of bars. You can use constants like 'red' or '#ff001a' as well as complex expressions like 'close >= open ? color.green : color.red'. Required argument."
        type: "series color"

        name: "offset"
        info: "Shifts the color series to the left or to the right on the given number of bars. Default is 0."
        type: "series int"

        name: "editable"
        info: "If true then barcolor style will be editable in Format dialog. Default is true."
        type: "const bool"

        name: "show_last"
        info: "If set defines the number of bars (from the last bar back to the past) to fill on chart."
        type: "input int"

        name: "title"
        info: "Title of the barcolor. Optional argument."
        type: "const string"

        name: "display"
        info: "Controls where the barcolor is displayed. Possible values are: @var display.none @var display.all. Default is @var display.all."
        type: "plot_simple_display"
    syntax: "barcolor(color offset editable show_last title display) → void"

"bgcolor"
    kind: "Built-in annotation function"
    desc: "Fill background of bars with specified color."
    args:
        name: "color"
        info: "Color of the filled background. You can use constants like 'red' or '#ff001a' as well as complex expressions like 'close >= open ? color.green : color.red'. Required argument."
        type: "series color"

        name: "offset"
        info: "Shifts the color series to the left or to the right on the given number of bars. Default is 0."
        type: "series int"

        name: "editable"
        info: "If true then bgcolor style will be editable in Format dialog. Default is true."
        type: "const bool"

        name: "show_last"
        info: "If set defines the number of bars (from the last bar back to the past) to fill on chart."
        type: "input int"

        name: "title"
        info: "Title of the bgcolor. Optional argument."
        type: "const string"

        name: "display"
        info: "Controls where the bgcolor is displayed. Possible values are: @var display.none @var display.all. Default is @var display.all."
        type: "plot_simple_display"
    syntax: "bgcolor(color offset editable show_last title display) → void"

"color.new"
    kind: "Built-in function"
    desc: "Function color applies the specified transparency to the given color."

    returns: "Color with specified transparency."
    args:
        name: "color"
        type: "series color"

        name: "transp"
        info: "Possible values are from 0 (not transparent) to 100 (invisible)."
        type: "series int/float"
    remarks: "Using arguments that are not constants (e.g. 'simple' 'input' or 'series') will have an impact on the colors displayed in the script's \"Settings/Style\" tab. See the User Manual for more information."
    syntax: "color.new(color transp) → const color"
            "color.new(color transp) → series color"
            "color.new(color transp) → input color"

"color.rgb"
    kind: "Built-in function"
    desc: "Creates a new color with transparency using the RGB color model."
    returns: "Color with specified transparency."
    args:
        name: "red"
        info: "Red color component. Possible values are from 0 to 255."
        type: "series int/float"

        name: "green"
        info: "Green color component. Possible values are from 0 to 255."
        type: "series int/float"

        name: "blue"
        info: "Blue color component. Possible values are from 0 to 255."
        type: "series int/float"

        name: "transp"
        info: "Optional. Color transparency. Possible values are from 0 (opaque) to 100 (invisible). Default value is 0."
        type: "series int/float"
    remarks: "Using arguments that are not constants (e.g. 'simple' 'input' or 'series') will have an impact on the colors displayed in the script's \"Settings/Style\" tab. See the User Manual for more information."
    syntax: "color.rgb(red green blue transp) → series color"
            "color.rgb(red green blue transp) → const color"
            "color.rgb(red green blue transp) → input color"

"color.r"
    kind: "Built-in function"
    desc: "Retrieves the value of the color's red component."
    returns: "The value (0 to 255) of the color's red component."
    args:
        name: "color"
        info: "Color."
        type: "series color"
    syntax: "color.r(color) → series float"
            "color.r(color) → const float"
            "color.r(color) → input float"

"color.g"
    kind: "Built-in function"
    desc: "Retrieves the value of the color's green component."
    returns: "The value (0 to 255) of the color's green component."
    args:
        name: "color"
        info: "Color."
        type: "series color"
    syntax: "color.g(color) → series float"
            "color.g(color) → const float"
            "color.g(color) → input float"

"color.b"
    kind: "Built-in function"
    desc: "Retrieves the value of the color's blue component."
    returns: "The value (0 to 255) of the color's blue component."
    args:
        name: "color"
        info: "Color."
        type: "series color"
    syntax: "color.b(color) → series float"
            "color.b(color) → const float"
            "color.b(color) → input float"

"color.t"
    kind: "Built-in function"
    desc: "Retrieves the color's transparency."
    returns: "The value (0-100) of the color's transparency."
    args:
        name: "color"
        info: "Color."
        type: "series color"
    syntax: "color.t(color) → series float"
            "color.t(color) → const float"
            "color.t(color) → input float"

"color.from_gradient"
    kind: "Built-in function"
    desc: "Based on the relative position of value in the bottom_value to top_value range the function returns a color from the gradient defined by bottom_color to top_color."
    returns: "A color calculated from the linear gradient between bottom_color to top_color."
    args:
        name: "value"
        info: "Value to calculate the position-dependent color."
        type: "series int/float"

        name: "bottom_value"
        info: "Bottom position value corresponding to bottom_color."
        type: "series int/float"

        name: "top_value"
        info: "Top position value corresponding to top_color."
        type: "series int/float"

        name: "bottom_color"
        info: "Bottom position color."
        type: "series color"

        name: "top_color"
        info: "Top position color."
        type: "series color"
    remarks: 'Using this function will have an impact on the colors displayed in the script\'s "Settings/Style" tab. See the User Manual for more information.'
    syntax: "color.from_gradient(value bottom_value top_value bottom_color top_color) → series color"

"alertcondition"
    kind: "Built-in annotation function"
    desc: "Creates alert condition that is available in Create Alert dialog. Please note that @fun alertcondition does NOT create an alert it just gives you more options in Create Alert dialog. Also @fun alertcondition effect is invisible on chart."
    args:
        name: "condition"
        info: "Series of boolean values that is used for alert. True values mean alert fire false - no alert. Required argument."
        type: "series bool"

        name: "title"
        info: "Title of the alert condition. Optional argument."
        type: "const string"

        name: "message"
        info: "Message to display when alert fires. Optional argument."
        type: "const string"
    remarks: "Please note that an alertcondition call generates an additional plot. All such calls are taken into account when we calculate the number of the output series per script."
    syntax: "alertcondition(condition title message) → void"

"input"
    kind: "Built-in annotation function"
    desc: "Adds an input to the Inputs tab of your script's Settings which allows you to provide configuration options to script users. This function automatically detects the type of the argument used for 'defval' and uses the corresponding input widget."
    returns: "Value of input variable."
    args:
        name: "defval"
        type: "const int/float/bool/string/color or source-type built-ins"
        info: 'Determines the default value of the input variable proposed in the script\'s "Settings/Inputs" tab from where script users can change it. Source-type built-ins are built-in series float variables that specify the source of the calculation: `close` `hlc3` etc.'

        name: "title"
        info: "Title of the input. If not specified the variable name is used as the input's title. If the title is specified but it is empty the name will be an empty string."
        type: "const string"

        name: "tooltip"
        info: "The string that will be shown to the user when hovering over the tooltip icon."
        type: "const string"

        name: "inline"
        info: "Combines all the input calls using the same argument in one line. The string used as an argument is not displayed. It is only used to identify inputs belonging to the same line."
        type: "const string"

        name: "group"
        info: "Creates a header above all inputs using the same group argument string. The string is also used as the header's text."
        type: "const string"
    remarks: "Result of @fun input function always should be assigned to a variable see examples above."
    syntax: "input(defval title tooltip inline group) → input bool"
            "input(defval title tooltip inline group) → input color"
            "input(defval title tooltip inline group) → input int"
            "input(defval title tooltip inline group) → input float"
            "input(defval title tooltip inline group) → input string"
            "input(defval title inline group tooltip) → series float"

"input.bool"
    kind: "Built-in annotation function"
    desc: "Adds an input to the Inputs tab of your script's Settings which allows you to provide configuration options to script users. This function adds a checkmark to the script's inputs."

    returns: "Value of input variable."
    args:
        name: "defval"
        info: 'Determines the default value of the input variable proposed in the script\'s "Settings/Inputs" tab from where the user can change it.'
        type: "const bool"

        name: "title"
        info: "Title of the input. If not specified the variable name is used as the input's title. If the title is specified but it is empty the name will be an empty string."
        type: "const string"

        name: "tooltip"
        info: "The string that will be shown to the user when hovering over the tooltip icon."
        type: "const string"

        name: "inline"
        info: "Combines all the input calls using the same argument in one line. The string used as an argument is not displayed. It is only used to identify inputs belonging to the same line."
        type: "const string"

        name: "group"
        info: "Creates a header above all inputs using the same group argument string. The string is also used as the header's text."
        type: "const string"

        name: "confirm"
        info: "If true then user will be asked to confirm input value before indicator is added to chart. Default value is false."
        type: "const bool"
    remarks: "Result of @fun input.bool function always should be assigned to a variable see examples above."
    syntax: "input.bool(defval title tooltip inline group confirm) → input bool"

"input.int"
    kind: "Built-in annotation function"
    desc: "Adds an input to the Inputs tab of your script's Settings which allows you to provide configuration options to script users. This function adds a field for an integer input to the script's inputs."

    returns: "Value of input variable."
    args:
        name: "defval"
        info: 'Determines the default value of the input variable proposed in the script\'s "Settings/Inputs" tab from where script users can change it. When a list of values is used with the `options` parameter the value must be one of them.'
        type: "const int"

        name: "title"
        info: "Title of the input. If not specified the variable name is used as the input's title. If the title is specified but it is empty the name will be an empty string."
        type: "const string"

        name: "minval"
        info: "Minimal possible value of the input variable. Optional."
        type: "const int"

        name: "maxval"
        info: "Maximum possible value of the input variable. Optional."
        type: "const int"

        name: "step"
        info: "Step value used for incrementing/decrementing the input. Optional. The default is 1."
        type: "const int"

        name: "options"
        type: "tuple of const int values: val1 val2 ..."
        info: "A list of options to choose from a dropdown menu separated by commas and enclosed in square brackets: val1 val2 .... When using this parameter the `minval` `maxval` and `step` parameters cannot be used."

        name: "tooltip"
        info: "The string that will be shown to the user when hovering over the tooltip icon."
        type: "const string"

        name: "inline"
        info: "Combines all the input calls using the same argument in one line. The string used as an argument is not displayed. It is only used to identify inputs belonging to the same line."
        type: "const string"

        name: "group"
        info: "Creates a header above all inputs using the same group argument string. The string is also used as the header's text."
        type: "const string"

        name: "confirm"
        info: "If true then user will be asked to confirm input value before indicator is added to chart. Default value is false."
        type: "const bool"
    remarks: "Result of @fun input.int function always should be assigned to a variable see examples above."
    syntax: "input.int(defval title minval maxval step tooltip inline group confirm) → input int"
            "input.int(defval title options tooltip inline group confirm) → input int"

"input.float"
    kind: "Built-in annotation function"
    desc: "Adds an input to the Inputs tab of your script's Settings which allows you to provide configuration options to script users. This function adds a field for a float input to the script's inputs."

    returns: "Value of input variable."
    args:
        name: "defval"
        info: 'Determines the default value of the input variable proposed in the script\'s "Settings/Inputs" tab from where script users can change it. When a list of values is used with the `options` parameter the value must be one of them.'
        type: "const int/float"

        name: "title"
        info: "Title of the input. If not specified the variable name is used as the input's title. If the title is specified but it is empty the name will be an empty string."
        type: "const string"

        name: "minval"
        info: "Minimal possible value of the input variable. Optional."
        type: "const int/float"

        name: "maxval"
        info: "Maximum possible value of the input variable. Optional."
        type: "const int/float"

        name: "step"
        info: "Step value used for incrementing/decrementing the input. Optional. The default is 1."
        type: "const int/float"

        name: "options"
        type: "tuple of const int/float values: val1 val2 ..."
        info: "A list of options to choose from a dropdown menu separated by commas and enclosed in square brackets: val1 val2 .... When using this parameter the `minval` `maxval` and `step` parameters cannot be used."

        name: "tooltip"
        info: "The string that will be shown to the user when hovering over the tooltip icon."
        type: "const string"

        name: "inline"
        info: "Combines all the input calls using the same argument in one line. The string used as an argument is not displayed. It is only used to identify inputs belonging to the same line."
        type: "const string"

        name: "group"
        info: "Creates a header above all inputs using the same group argument string. The string is also used as the header's text."
        type: "const string"

        name: "confirm"
        info: "If true then user will be asked to confirm input value before indicator is added to chart. Default value is false."
        type: "const bool"
    remarks: "Result of @fun input.float function always should be assigned to a variable see examples above."
    syntax: "input.float(defval title minval maxval step tooltip inline group confirm) → input float"
            "input.float(defval title options tooltip inline group confirm) → input float"

"input.string"
    kind: "Built-in annotation function"
    desc: "Adds an input to the Inputs tab of your script's Settings which allows you to provide configuration options to script users. This function adds a field for a string input to the script's inputs."

    returns: "Value of input variable."
    args:
        name: "defval"
        info: 'Determines the default value of the input variable proposed in the script\'s "Settings/Inputs" tab from where the user can change it. When a list of values is used with the `options` parameter the value must be one of them.'
        type: "const string"

        name: "title"
        info: "Title of the input. If not specified the variable name is used as the input's title. If the title is specified but it is empty the name will be an empty string."
        type: "const string"

        name: "options"
        type: "tuple of const string values: val1 val2 ..."
        info: "A list of options to choose from."

        name: "tooltip"
        info: "The string that will be shown to the user when hovering over the tooltip icon."
        type: "const string"

        name: "inline"
        info: "Combines all the input calls using the same argument in one line. The string used as an argument is not displayed. It is only used to identify inputs belonging to the same line."
        type: "const string"

        name: "group"
        info: "Creates a header above all inputs using the same group argument string. The string is also used as the header's text."
        type: "const string"

        name: "confirm"
        info: "If true then user will be asked to confirm input value before indicator is added to chart. Default value is false."
        type: "const bool"
    remarks: "Result of @fun input.string function always should be assigned to a variable see examples above."
    syntax: "input.string(defval title options tooltip inline group confirm) → input string"

"input.text_area"
    kind: "Built-in annotation function"
    desc: "Adds an input to the Inputs tab of your script's Settings which allows you to provide configuration options to script users. This function adds a field for a multiline text input."

    returns: "Value of input variable."
    args:
        name: "defval"
        info: 'Determines the default value of the input variable proposed in the script\'s "Settings/Inputs" tab from where the user can change it.'
        type: "const string"

        name: "title"
        info: "Title of the input. If not specified the variable name is used as the input's title. If the title is specified but it is empty the name will be an empty string."
        type: "const string"

        name: "tooltip"
        info: "The string that will be shown to the user when hovering over the tooltip icon."
        type: "const string"

        name: "group"
        info: "Creates a header above all inputs using the same group argument string. The string is also used as the header's text."
        type: "const string"

        name: "confirm"
        info: "If true then user will be asked to confirm input value before indicator is added to chart. Default value is false."
        type: "const bool"
    remarks: "Result of @fun input.text_area function always should be assigned to a variable see examples above."
    syntax: "input.text_aredefval title tooltip group confirm) → input string"

"input.symbol"
    kind: "Built-in annotation function"
    desc: "Adds an input to the Inputs tab of your script's Settings which allows you to provide configuration options to script users. This function adds a field that allows the user to select a specific symbol using the symbol search and returns that symbol paired with its exchange prefix as a string."

    returns: "Value of input variable."
    args:
        name: "defval"
        info: 'Determines the default value of the input variable proposed in the script\'s "Settings/Inputs" tab from where the user can change it.'
        type: "const string"

        name: "title"
        info: "Title of the input. If not specified the variable name is used as the input's title. If the title is specified but it is empty the name will be an empty string."
        type: "const string"

        name: "tooltip"
        info: "The string that will be shown to the user when hovering over the tooltip icon."
        type: "const string"

        name: "inline"
        info: "Combines all the input calls using the same argument in one line. The string used as an argument is not displayed. It is only used to identify inputs belonging to the same line."
        type: "const string"

        name: "group"
        info: "Creates a header above all inputs using the same group argument string. The string is also used as the header's text."
        type: "const string"

        name: "confirm"
        info: "If true then user will be asked to confirm input value before indicator is added to chart. Default value is false."
        type: "const bool"
    remarks: "Result of @fun input.symbol function always should be assigned to a variable see examples above."
    syntax: "input.symbol(defval title tooltip inline group confirm) → input string"

"input.timeframe"
    kind: "Built-in annotation function"
    desc: "Adds an input to the Inputs tab of your script's Settings which allows you to provide configuration options to script users. This function adds a dropdown that allows the user to select a specific timeframe via the timeframe selector and returns it as a string. The selector includes the custom timeframes a user may have added using the chart's Timeframe dropdown."

    returns: "Value of input variable."
    args:
        name: "defval"
        info: 'Determines the default value of the input variable proposed in the script\'s "Settings/Inputs" tab from where the user can change it. When a list of values is used with the `options` parameter the value must be one of them.'
        type: "const string"

        name: "title"
        info: "Title of the input. If not specified the variable name is used as the input's title. If the title is specified but it is empty the name will be an empty string."
        type: "const string"

        name: "options"
        type: "tuple of const string values: val1 val2 ..."
        info: "A list of options to choose from."

        name: "tooltip"
        info: "The string that will be shown to the user when hovering over the tooltip icon."
        type: "const string"

        name: "inline"
        info: "Combines all the input calls using the same argument in one line. The string used as an argument is not displayed. It is only used to identify inputs belonging to the same line."
        type: "const string"

        name: "group"
        info: "Creates a header above all inputs using the same group argument string. The string is also used as the header's text."
        type: "const string"

        name: "confirm"
        info: "If true then user will be asked to confirm input value before indicator is added to chart. Default value is false."
        type: "const bool"
    remarks: "Result of @fun input.timeframe function always should be assigned to a variable see examples above."
    syntax: "input.timeframe(defval title options tooltip inline group confirm) → input string"

"input.session"
    kind: "Built-in annotation function"
    desc: "Adds an input to the Inputs tab of your script's Settings which allows you to provide configuration options to script users. This function adds two dropdowns that allow the user to specify the beginning and the end of a session using the session selector and returns the result as a string."
    returns: "Value of input variable."
    args:
        name: "defval"
        info: 'Determines the default value of the input variable proposed in the script\'s "Settings/Inputs" tab from where the user can change it. When a list of values is used with the `options` parameter the value must be one of them.'
        type: "const string"

        name: "title"
        info: "Title of the input. If not specified the variable name is used as the input's title. If the title is specified but it is empty the name will be an empty string."
        type: "const string"

        name: "options"
        type: "tuple of const string values: val1 val2 ..."
        info: "A list of options to choose from."

        name: "tooltip"
        info: "The string that will be shown to the user when hovering over the tooltip icon."
        type: "const string"

        name: "inline"
        info: "Combines all the input calls using the same argument in one line. The string used as an argument is not displayed. It is only used to identify inputs belonging to the same line."
        type: "const string"

        name: "group"
        info: "Creates a header above all inputs using the same group argument string. The string is also used as the header's text."
        type: "const string"

        name: "confirm"
        info: "If true then user will be asked to confirm input value before indicator is added to chart. Default value is false."
        type: "const bool"
    remarks: "Result of @fun input.session function always should be assigned to a variable see examples above."
    syntax: "input.session(defval title options tooltip inline group confirm) → input string"

"input.source"
    kind: "Built-in annotation function"
    desc: "Adds an input to the Inputs tab of your script's Settings which allows you to provide configuration options to script users. This function adds a dropdown that allows the user to select a source for the calculation e.g. @var close @var hl2 etc. If the script includes only one input.source() call the user can also select an output from another indicator on their chart as the source."

    returns: "Value of input variable."
    args:
        name: "defval"
        info: 'Determines the default value of the input variable proposed in the script\'s "Settings/Inputs" tab from where the user can change it.'
        type: "series int/float"

        name: "title"
        info: "Title of the input. If not specified the variable name is used as the input's title. If the title is specified but it is empty the name will be an empty string."
        type: "const string"

        name: "tooltip"
        info: "The string that will be shown to the user when hovering over the tooltip icon."
        type: "const string"

        name: "inline"
        info: "Combines all the input calls using the same argument in one line. The string used as an argument is not displayed. It is only used to identify inputs belonging to the same line."
        type: "const string"

        name: "group"
        info: "Creates a header above all inputs using the same group argument string. The string is also used as the header's text."
        type: "const string"
    remarks: "Result of @fun input.source function always should be assigned to a variable see examples above."
    syntax: "input.source(defval title tooltip inline group) → series float"

"input.color"
    kind: "Built-in annotation function"
    desc: "Adds an input to the Inputs tab of your script's Settings which allows you to provide configuration options to script users. This function adds a color picker that allows the user to select a color and transparency either from a palette or a hex value."
    returns: "Value of input variable."
    args:
        name: "defval"
        info: 'Determines the default value of the input variable proposed in the script\'s "Settings/Inputs" tab from where the user can change it.'
        type: "const color"

        name: "title"
        info: "Title of the input. If not specified the variable name is used as the input's title. If the title is specified but it is empty the name will be an empty string."
        type: "const string"

        name: "tooltip"
        info: "The string that will be shown to the user when hovering over the tooltip icon."
        type: "const string"

        name: "inline"
        info: "Combines all the input calls using the same argument in one line. The string used as an argument is not displayed. It is only used to identify inputs belonging to the same line."
        type: "const string"

        name: "group"
        info: "Creates a header above all inputs using the same group argument string. The string is also used as the header's text."
        type: "const string"

        name: "confirm"
        info: "If true then user will be asked to confirm input value before indicator is added to chart. Default value is false."
        type: "const bool"
    remarks: "Result of @fun input.color function always should be assigned to a variable see examples above."
    syntax: "input.color(defval title tooltip inline group confirm) → input color"

"input.time"
    kind: "Built-in annotation function"
    desc: 'Adds a time input to the script\'s "Settings/Inputs" tab. This function adds two input widgets on the same line: one for the date and one for the time. The function returns a date/time value in UNIX format. Using `confirm = true` activates the interactive input mode where a point in time is selected by clicking on the chart.'
    returns: "Value of input variable."
    args:
        name: "defval"
        info: 'Determines the default value of the input variable proposed in the script\'s "Settings/Inputs" tab from where the user can change it. The value can be a @fun timestamp function but only if it uses a date argument in const string format.'
        type: "const int"

        name: "title"
        info: "Title of the input. If not specified the variable name is used as the input's title. If the title is specified but it is empty the name will be an empty string."
        type: "const string"

        name: "tooltip"
        info: "The string that will be shown to the user when hovering over the tooltip icon."
        type: "const string"

        name: "inline"
        info: "Combines all the input calls using the same argument in one line. The string used as an argument is not displayed. It is only used to identify inputs belonging to the same line."
        type: "const string"

        name: "group"
        info: "Creates a header above all inputs using the same group argument string. The string is also used as the header's text."
        type: "const string"

        name: "confirm"
        info: "If true the interactive input mode is enabled and the selection is done by clicking on the chart when the indicator is added to the chart or by selecting the indicator and moving the selection after that. Optional. The default is false."
        type: "const bool"
    remarks: "When using interactive mode a price input can be combined with a time input if both function calls use the same argument for their `inline` parameter."
    syntax: "input.time(defval title tooltip inline group confirm) → input int"

"input.price"
    kind: "Built-in annotation function"
    desc: 'Adds a price input to the script\'s "Settings/Inputs" tab. Using `confirm = true` activates the interactive input mode where a price is selected by clicking on the chart.'
    returns: "Value of input variable."
    args:
        name: "defval"
        info: 'Determines the default value of the input variable proposed in the script\'s "Settings/Inputs" tab from where the user can change it.'
        type: "const int/float"

        name: "title"
        info: "Title of the input. If not specified the variable name is used as the input's title. If the title is specified but it is empty the name will be an empty string."
        type: "const string"

        name: "tooltip"
        info: "The string that will be shown to the user when hovering over the tooltip icon."
        type: "const string"

        name: "inline"
        info: "Combines all the input calls using the same argument in one line. The string used as an argument is not displayed. It is only used to identify inputs belonging to the same line."
        type: "const string"

        name: "group"
        info: "Creates a header above all inputs using the same group argument string. The string is also used as the header's text."
        type: "const string"

        name: "confirm"
        info: "If true the interactive input mode is enabled and the selection is done by clicking on the chart when the indicator is added to the chart or by selecting the indicator and moving the selection after that. Optional. The default is false."
        type: "const bool"
    remarks: "When using interactive mode a time input can be combined with a price input if both function calls use the same argument for their `inline` parameter."
    syntax: "input.price(defval title tooltip inline group confirm) → input float"

"hline"
    kind: "Built-in annotation function"
    desc: "Renders a horizontal line at a given fixed price level."
    args:
        name: "price"
        info: "Price value at which the object will be rendered. Required argument."
        type: "input int/float"

        name: "title"
        info: "Title of the object."
        type: "const string"

        name: "color"
        info: "Color of the rendered line. Must be a constant value (not an expression). Optional argument."
        type: "input color"

        name: "linestyle"
        info: "Style of the rendered line. Possible values are: @var hline.style_solid @var hline.style_dotted @var hline.style_dashed. Optional argument."
        type: "hline_style"

        name: "linewidth"
        info: "Width of the rendered line. Default value is 1."
        type: "input int"

        name: "editable"
        info: "If true then hline style will be editable in Format dialog. Default is true."
        type: "const bool"

        name: "display"
        info: "Controls where the hline is displayed. Possible values are: @var display.none @var display.all. Default is @var display.all."
        type: "plot_simple_display"
    returns: "An hline object that can be used in @fun fill"
    syntax: "hline(price title color linestyle linewidth editable display) → hline"

"fill"
    kind: "Built-in annotation function"
    desc: "Fills background between two plots or hlines with a given color."
    args:
        name: "hline1"
        info: "The first hline object. Required argument."
        type: "hline"

        name: "hline2"
        info: "The second hline object. Required argument."
        type: "hline"

        name: "plot1"
        info: "The first plot object. Required argument."
        type: "plot"

        name: "plot2"
        info: "The second plot object. Required argument."
        type: "plot"

        name: "color"
        info: "Color of the plot. You can use constants like 'color=color.red' or 'color=#ff001a' as well as complex expressions like 'color = close >= open ? color.green : color.red'. Optional argument."
        type: "series color"

        name: "title"
        info: "Title of the created fill object. Optional argument."
        type: "const string"

        name: "editable"
        info: "If true then fill style will be editable in Format dialog. Default is true."
        type: "const bool"

        name: "show_last"
        info: "If set defines the number of bars (from the last bar back to the past) to fill on chart."
        type: "input int"

        name: "fillgaps"
        info: "Controls continuing fills on gaps i.e. when one of the plot() calls returns an na value. When true the last fill will continue on gaps. The default is false."
        type: "const bool"

        name: "display"
        info: "Controls where the fill is displayed. Possible values are: @var display.none @var display.all. Default is @var display.all."
        type: "plot_simple_display"
    syntax: "fill(hline1 hline2 color title editable fillgaps display) → void"
            "fill(plot1 plot2 color title editable show_last fillgaps display) → void"

"nz"
    kind: "Built-in function"
    desc: "Replaces NaN values with zeros (or given value) in a series."
    returns: "The value of `source` if it is not `na`. If the value of `source` is `na` returns zero or the `replacement` argument when one is used."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float/bool/color"

        name: "replacement"
        info: "Value that will replace all ‘na’ values in the `source` series."
        type: "series int/float/bool/color"
    syntax: "nz(source replacement) → simple int"
            "nz(source replacement) → simple float"
            "nz(source replacement) → simple color"
            "nz(source replacement) → simple bool"
            "nz(source replacement) → series int"
            "nz(source replacement) → series float"
            "nz(source replacement) → series color"
            "nz(source replacement) → series bool"
            "nz(source) → simple int"
            "nz(source) → simple float"
            "nz(source) → simple color"
            "nz(source) → simple bool"
            "nz(source) → series int"
            "nz(source) → series float"
            "nz(source) → series color"
            "nz(source) → series bool"

"na"
    kind: "Built-in function"
    desc: "Tests if `x` is @var na."
    args:
        name: "x"
        info: "Value to be tested."
        type: "series int/float/bool/color/string/label/line/box/linefill"
    returns: "Returns @op true if `x` is @var na @op false otherwise."
    syntax: "(na) → simple bool"
            "(na) → series bool"
            "(na) → series linefill"

"ta.tr"
    kind: "Built-in function"
    returns: "True range. It is math.max(high - low math.abs(high - close1) math.abs(low - close1))."
    args:
        name: "handle_na"
        info: "How NaN values are handled. if true and previous day's close is NaN then tr would be calculated as current day high-low. Otherwise (if false) tr would return NaN in such cases. Also note that @fun ta.atr uses ta.tr(true)."
        type: "simple bool"
    remarks: "ta.tr(false) is exactly the same as @var ta.tr."
    syntax: "ta.tr(handle_na) → series float"

"math.pow"
    kind: "Built-in function"
    desc: "Mathematical power function."
    returns: "`base` raised to the power of `exponent`. If `base` is a series it is calculated elementwise."
    args:
        name: "base"
        info: "Specify the base to use."
        type: "series int/float"

        name: "exponent"
        info: "Specifies the exponent."
        type: "series int/float"
    syntax: "math.pow(base exponent) → simple float"
            "math.pow(base exponent) → input float"
            "math.pow(base exponent) → const float"
            "math.pow(base exponent) → series float"

"math.min"
    desc: "Returns the smallest of multiple values."
    kind: "Built-in function"
    returns: "The smallest of multiple given values."
    syntax: "math.min(number0 number1 ...) → simple int"
            "math.min(number0 number1 ...) → simple float"
            "math.min(number0 number1 ...) → input int"
            "math.min(number0 number1 ...) → input float"
            "math.min(number0 number1 ...) → series int"
            "math.min(number0 number1 ...) → series float"

"math.max"
    kind: "Built-in function"
    desc: "Returns the greatest of multiple values."
    returns: "The greatest of multiple given values."
    syntax: "math.max(number0 number1 ...) → simple int"
            "math.max(number0 number1 ...) → simple float"
            "math.max(number0 number1 ...) → input int"
            "math.max(number0 number1 ...) → input float"
            "math.max(number0 number1 ...) → series int"
            "math.max(number0 number1 ...) → series float"

"str.format"
    kind: "Built-in function"
    desc: "Converts the formatting string and value(s) into a formatted string. The formatting string can contain literal text and one placeholder in curly braces  for each value to be formatted. Each placeholder consists of the index of the required argument (beginning at 0) that will replace it and an optional format specifier. The index represents the position of that argument in the str.format argument list."
    args:
        name: "formatString"
        info: "Format string."
        type: "series string"

        name: "arg0 arg1 ..."
        info: "Values to format."
        type: "series int/float/bool/string/na/int/float/bool/string"
    remarks: 'Any curly braces within an unquoted pattern must be balanced. For example "ab 0 de" and "ab \'\' de" are valid patterns but "ab 0\'\' de" "ab  de" and "\'\'\'\'" are not.'
    returns: "The formatted string."
    syntax: "str.format(formatString arg0 arg1 ...) → simple string"
            "str.format(formatString arg0 arg1 ...) → series string"

"math.abs"
    desc: "Absolute value of `number` is `number` if `number` >= 0 or -`number` otherwise."
    kind: "Built-in function"
    returns: "The absolute value of `number`."
    syntax: "math.abs(number) → simple int"
            "math.abs(number) → input int"
            "math.abs(number) → const int"
            "math.abs(number) → series int"
            "math.abs(number) → simple float"
            "math.abs(number) → input float"
            "math.abs(number) → const float"
            "math.abs(number) → series float"

"math.log"
    desc: "Natural logarithm of any `number` > 0 is the unique y such that e^y = `number`."
    kind: "Built-in function"
    returns: "The natural logarithm of `number`."
    syntax: "math.log(number) → simple float"
            "math.log(number) → input float"
            "math.log(number) → const float"
            "math.log(number) → series float"

"math.log10"
    desc: "The common (or base 10) logarithm of `number` is the power to which 10 must be raised to obtain the `number`. 10^y = `number`."
    kind: "Built-in function"
    returns: "The base 10 logarithm of `number`."
    syntax: "math.log10(number) → simple float"
            "math.log10(number) → input float"
            "math.log10(number) → const float"
            "math.log10(number) → series float"

"math.sqrt"
    desc: "Square root of any `number` >= 0 is the unique y >= 0 such that y^2 = `number`."
    kind: "Built-in function"
    returns: "The square root of `number`."
    syntax: "math.sqrt(number) → simple float"
            "math.sqrt(number) → input float"
            "math.sqrt(number) → const float"
            "math.sqrt(number) → series float"

"math.sign"
    desc: "Sign (signum) of `number` is zero if `number` is zero 1.0 if `number` is greater than zero -1.0 if `number` is less than zero."
    kind: "Built-in function"
    returns: "The sign of the argument."
    syntax: "math.sign(number) → simple float"
            "math.sign(number) → input float"
            "math.sign(number) → const float"
            "math.sign(number) → series float"

"math.exp"
    desc: "The exp function of `number` is e raised to the power of `number` where e is Euler's number."
    kind: "Built-in function"
    returns: "A value representing e raised to the power of `number`."
    syntax: "math.exp(number) → simple float"
            "math.exp(number) → input float"
            "math.exp(number) → const float"
            "math.exp(number) → series float"

"math.sin"
    desc: "The sin function returns the trigonometric sine of an angle."
    kind: "Built-in function"
    returns: "The trigonometric sine of an angle."
    args:
        name: "angle"
        info: "Angle in radians."
        type: "series int/float"
    syntax: "math.sin(angle) → simple float"
            "math.sin(angle) → input float"
            "math.sin(angle) → const float"
            "math.sin(angle) → series float"

"math.cos"
    desc: "The cos function returns the trigonometric cosine of an angle."
    kind: "Built-in function"
    returns: "The trigonometric cosine of an angle."
    args:
        name: "angle"
        info: "Angle in radians."
        type: "series int/float"
    syntax: "math.cos(angle) → simple float"
            "math.cos(angle) → input float"
            "math.cos(angle) → const float"
            "math.cos(angle) → series float"

"math.tan"
    desc: "The tan function returns the trigonometric tangent of an angle."
    kind: "Built-in function"
    returns: "The trigonometric tangent of an angle."
    args:
        name: "angle"
        info: "Angle in radians."
        type: "series int/float"
    syntax: "math.tan(angle) → simple float"
            "math.tan(angle) → input float"
            "math.tan(angle) → const float"
            "math.tan(angle) → series float"

"math.asin"
    desc: "The asin function returns the arcsine (in radians) of number such that sin(asin(y)) = y for y in range -1 1."
    kind: "Built-in function"
    returns: "The arcsine of a value; the returned angle is in the range -Pi/2 Pi/2 or @var na if y is outside of range -1 1."
    syntax: "math.asin(angle) → simple float"
            "math.asin(angle) → input float"
            "math.asin(angle) → const float"
            "math.asin(angle) → series float"

"math.acos"
    desc: "The acos function returns the arccosine (in radians) of number such that cos(acos(y)) = y for y in range -1 1."
    kind: "Built-in function"
    returns: "The arc cosine of a value; the returned angle is in the range 0 Pi or @var na if y is outside of range -1 1."
    syntax: "math.acos(angle) → simple float"
            "math.acos(angle) → input float"
            "math.acos(angle) → const float"
            "math.acos(angle) → series float"

"math.atan"
    desc: "The atan function returns the arctangent (in radians) of number such that tan(atan(y)) = y for any y."
    kind: "Built-in function"
    returns: "The arc tangent of a value; the returned angle is in the range -Pi/2 Pi/2."
    syntax: "math.atan(angle) → simple float"
            "math.atan(angle) → input float"
            "math.atan(angle) → const float"
            "math.atan(angle) → series float"

"math.ceil"
    desc: "The ceil function returns the smallest (closest to negative infinity) integer that is greater than or equal to the argument."
    kind: "Built-in function"
    returns: "The smallest integer greater than or equal to the given number."
    syntax: "math.ceil(number) → simple int"
            "math.ceil(number) → input int"
            "math.ceil(number) → const int"
            "math.ceil(number) → series int"

"math.floor"
    kind: "Built-in function"
    returns: "The largest integer less than or equal to the given number."
    syntax: "math.floor(number) → simple int"
            "math.floor(number) → input int"
            "math.floor(number) → const int"
            "math.floor(number) → series int"

"math.round"
    desc: "Returns the value of `number` rounded to the nearest integer with ties rounding up. If the `precision` parameter is used returns a float value rounded to that amount of decimal places."
    kind: "Built-in function"
    returns: "The value of `number` rounded to the nearest integer or according to precision."
    args:
        name: "number"
        info: "The value to be rounded."
        type: "series int/float"

        name: "precision"
        info: "Optional argument. Decimal places to which `number` will be rounded. When no argument is supplied rounding is to the nearest integer."
        type: "series int"
    remarks: "Note that for 'na' values function returns 'na'."
    syntax: "math.round(number) → simple int"
            "math.round(number) → input int"
            "math.round(number) → const int"
            "math.round(number) → series int"
            "math.round(number precision) → simple float"
            "math.round(number precision) → input float"
            "math.round(number precision) → const float"
            "math.round(number precision) → series float"

"math.round_to_mintick"
    kind: "Built-in function"
    desc: "Returns the value rounded to the symbol's mintick i.e. the nearest value that can be divided by @var syminfo.mintick without the remainder with ties rounding up."
    returns: "The `number` rounded to tick precision."
    args:
        name: "number"
        info: "The value to be rounded."
        type: "series int/float"
    syntax: "math.round_to_mintick(number) → simple float"
            "math.round_to_mintick(number) → series float"

"ta.median"
    desc: "Returns the median of the series."
    kind: "Built-in function"
    returns: "The median of the series."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.median(source length) → series float"
            "ta.median(source length) → series int"

"ta.mode"
    desc: "Returns the mode of the series. If there are several values with the same frequency it returns the smallest value."
    kind: "Built-in function"
    returns: "The mode of the series."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.mode(source length) → series float"
            "ta.mode(source length) → series int"

"ta.range"
    desc: "Returns the difference between the min and max values in a series."
    kind: "Built-in function"
    returns: "The difference between the min and max values in the series."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.range(source length) → series float"
            "ta.range(source length) → series int"

"math.todegrees"
    desc: "Returns an approximately equivalent angle in degrees from an angle measured in radians."
    kind: "Built-in function"
    returns: "The angle value in degrees."
    args:
        name: "radians"
        info: "Angle in radians."
        type: "series int/float"
    syntax: "math.todegrees(radians) → series float"

"math.toradians"
    desc: "Returns an approximately equivalent angle in radians from an angle measured in degrees."
    kind: "Built-in function"
    returns: "The angle value in radians."
    args:
        name: "degrees"
        info: "Angle in degrees."
        type: "series int/float"
    syntax: "math.toradians(degrees) → series float"

"math.random"
    desc: "Returns a pseudo-random value. The function will generate a different sequence of values for each script execution. Using the same value for the optional seed argument will produce a repeatable sequence."
    kind: "Built-in function"
    returns: "A random value."
    args:
        name: "min"
        info: "The lower bound of the range of random values. The value is not included in the range. The default is 0."
        type: "series int/float"

        name: "max"
        info: "The upper bound of the range of random values. The value is not included in the range. The default is 1."
        type: "series int/float"

        name: "seed"
        info: "Optional argument. When the same seed is used allows successive calls to the function to produce a repeatable set of values."
        type: "input int"
    syntax: "math.random(min max seed) → series float"

"math.sum"
    desc: "The sum function returns the sliding sum of last y values of x."
    kind: "Built-in function"
    returns: "Sum of `source` for `length` bars back."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "math.sum(source length) → series float"

"ta.sma"
    desc: "The sma function returns the moving average that is the sum of last y values of x divided by y."
    kind: "Built-in function"
    returns: "Simple moving average of `source` for `length` bars back."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.sma(source length) → series float"

"ta.hma"
    desc: "The hma function returns the Hull Moving Average."
    kind: "Built-in function"
    returns: "Hull moving average of 'source' for 'length' bars back."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars."
        type: "simple int"
    syntax: "ta.hma(source length) → series float"

"ta.ema"
    desc: "The ema function returns the exponentially weighted moving average. In ema weighting factors decrease exponentially. It ccalculates by using a formula: EMA = alpha * source + (1 - alpha) * EMA1 where alpha = 2 / (length + 1)."
    kind: "Built-in function"
    returns: "Exponential moving average of `source` with alpha = 2 / (length + 1)."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "simple int"
    remarks: "Please note that using this variable/function can cause indicator repainting."
    syntax: "ta.ema(source length) → series float"

"ta.wma"
    desc: "The wma function returns weighted moving average of `source` for `length` bars back. In wma weighting factors decrease in arithmetical progression."
    kind: "Built-in function"
    returns: "Weighted moving average of `source` for `length` bars back."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.wma(source length) → series float"

"ta.vwma"
    kind: "Built-in function"
    desc: "The vwma function returns volume-weighted moving average of `source` for `length` bars back. It is the same as: smsource * volume length) / smvolume length)."
    returns: "Volume-weighted moving average of `source` for `length` bars back."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.vwma(source length) → series float"

"ta.supertrend"
    kind: "Built-in function"
    desc: "The Supertrend Indicator. The Supertrend is a trend following indicator."
    returns: "Tuple of two supertrend series: supertrend line and direction of trend. Possible values are 1 (down direction) and -1 (up direction)."
    args:
        name: "factor"
        info: "The multiplier by which the ATR will get multiplied."
        type: "series int/float"

        name: "atrPeriod"
        info: "Length of ATR."
        type: "simple int"
    syntax: "ta.supertrend(factor atrPeriod) → series float series float"

"ta.macd"
    kind: "Built-in function"
    desc: "MACD (moving average convergence/divergence). It is supposed to reveal changes in the strength direction momentum and duration of a trend in a stock's price."
    returns: "Tuple of three MACD series: MACD line signal line and histogram line."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "fastlen"
        info: "Fast Length parameter."
        type: "simple int"

        name: "slowlen"
        info: "Slow Length parameter."
        type: "simple int"

        name: "siglen"
        info: "Signal Length parameter."
        type: "simple int"
    syntax: "ta.macd(source, fastlen, slowlen, siglen) → series float series float series float"

"ta.lowest"
    kind: "Built-in function"
    desc: "Lowest value for a given number of bars back."
    returns: "Lowest value in the series."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    remarks: "Two args version: `source` is a series and `length` is the number of bars back."
            "One arg version: `length` is the number of bars back. Algorithm uses low as a `source` series."
    syntax: "ta.lowest(source length) → series float"
            "ta.lowest(length) → series float"

"ta.highest"
    kind: "Built-in function"
    desc: "Highest value for a given number of bars back."
    returns: "Highest value in the series."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    remarks: "Two args version: `source` is a series and `length` is the number of bars back."
            "One arg version: `length` is the number of bars back. Algorithm uses high as a `source` series."
    syntax: "ta.highest(source length) → series float"
            "ta.highest(length) → series float"

"ta.lowestbars"
    kind: "Built-in function"
    desc: "Lowest value offset for a given number of bars back."
    returns: "Offset to the lowest bar."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars back."
        type: "series int"
    remarks: "Two args version: `source` is a series and `length` is the number of bars back."
            "One arg version: `length` is the number of bars back. Algorithm uses low as a `source` series."
    syntax: "ta.lowestbars(source length) → series int"
            "ta.lowestbars(length) → series int"

"ta.highestbars"
    kind: "Built-in function"
    desc: "Highest value offset for a given number of bars back."
    returns: "Offset to the highest bar."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    remarks: "Two args version: `source` is a series and `length` is the number of bars back."
            "One arg version: `length` is the number of bars back. Algorithm uses high as a `source` series."
    syntax: "ta.highestbars(source length) → series int"
            "ta.highestbars(length) → series int"

"ta.barssince"
    kind: "Built-in function"
    desc: "Counts the number of bars since the last time the condition was true."
    returns: "Number of bars since condition was true."
    remarks: "If the condition has never been met prior to the current bar the function returns na."
            "Please note that using this variable/function can cause indicator repainting."
    syntax: "ta.barssince(condition) → series int"

"ta.valuewhen"
    kind: "Built-in function"
    desc: "Returns the value of the `source` series on the bar where the `condition` was true on the nth most recent occurrence."
    args:
        name: "condition"
        info: "The condition to search for."
        type: "series bool"

        name: "source"
        info: "The value to be returned from the bar where the condition is met."
        type: "series int/float/bool/color"

        name: "occurrence"
        info: "The occurrence of the condition. The numbering starts from 0 and goes back in time so '0' is the most recent occurrence of `condition` '1' is the second most recent and so forth. Must be an integer >= 0."
        type: "simple int"
    remarks: "This function requires execution on every bar. It is not recommended to use it inside a @op for or @op while loop structure where its behavior can be unexpected. Please note that using this function can cause indicator repainting."
    syntax: "ta.valuewhen(condition source occurrence) → series float"
            "ta.valuewhen(condition source occurrence) → series int"
            "ta.valuewhen(condition source occurrence) → series bool"
            "ta.valuewhen(condition source occurrence) → series color"

"ta.falling"
    kind: "Built-in function"
    desc: "Test if the `source` series is now falling for `length` bars long."
    returns: "true if current `source` value is less than any previous `source` value for `length` bars back false otherwise."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.falling(source length) → series bool"

"ta.rising"
    kind: "Built-in function"
    desc: "Test if the `source` series is now rising for `length` bars long."
    returns: "true if current `source` is greater than any previous `source` for `length` bars back false otherwise."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.rising(source length) → series bool"

"ta.roc"
    kind: "Built-in function"
    desc: "Ccalculates the percentage of change (rate of change) between the current value of `source` and its value `length` bars ago."
            "It is calculated by the formula: 100 * change(src length) / srclength."
    returns: "The rate of change of `source` for `length` bars back."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.roc(source length) → series float"

"ta.cci"
    kind: "Built-in function"
    desc: "The CCI (commodity channel index) is calculated as the difference between the typical price of a commodity and its simple moving average divided by the mean absolute deviation of the typical price. The index is scaled by an inverse factor of 0.015 to provide more readable numbers."
    returns: "Commodity channel index of source for length bars back."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.cci(source length) → series float"

"ta.variance"
    kind: "Built-in function"
    desc: "Variance is the expectation of the squared deviation of a series from its mean (@fun ta.sma) and it informally measures how far a set of numbers are spread out from their mean."
    returns: "Variance of `source` for `length` bars back."
    remarks: "If `biased` is true function will calculate using a biased estimate of the entire population if false - unbiased estimate of a sample."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"

        name: "biased"
        info: "Determines which estimate should be used. Optional. The default is true."
        type: "series bool"
    syntax: "ta.variance(source length biased) → series float"

"ta.dev"
    kind: "Built-in function"
    desc: "Measure of difference between the series and it's @fun ta.sma"
    returns: "Deviation of `source` for `length` bars back."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.dev(source length)→ series float "

"ta.stdev"
    kind: "Built-in function"
    returns: "Standard deviation."
    remarks: "If `biased` is true function will calculate using a biased estimate of the entire population if false - unbiased estimate of a sample."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"

        name: "biased"
        info: "Determines which estimate should be used. Optional. The default is true."
        type: "series bool"
    syntax: "ta.stdev(source length biased)→ series float "

"ta.percentrank"
    kind: "Built-in function"
    desc: "Percent rank is the percents of how many previous values was less than or equal to the current value of given series."
    returns: "Percent rank of `source` for `length` bars back."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.percentrank(source length) → series float"

"ta.rma"
    desc: "Moving average used in RSI. It is the exponentially weighted moving average with alpha = 1 / length."
    kind: "Built-in function"
    returns: "Exponential moving average of `source` with alpha = 1 / `length`."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "simple int"
    syntax: "ta.rmsource length) → series float"

"ta.rsi"
    kind: "Built-in function"
    desc: "Relative strength index. It is calculated using the `ta.rm)` of upward and downward changes of `source` over the last `length` bars."
    returns: "Relative strength index."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "simple int"
    syntax: "ta.rsi(source length)→ series float "

"timeframe.in_seconds"
    kind: "Built-in function"
    desc: "Converts the timeframe passed to the `timeframe` argument into seconds."
    args:
        name: "timeframe"
        info: "Timeframe. Optional. The default is @var timeframe.period."
        type: "simple string"
    returns: "An int representation of the number of seconds in one bar of a `timeframe`."
    remarks: "For the `timeframe` >= '1M' function ccalculates number of seconds based on 30.4167 (365/12) days in month."
    syntax: "timeframe.in_seconds(timeframe) -> simple int"

"ta.dmi"
    desc: "The dmi function returns the directional movement index."
    kind: "Built-in function"
    returns: "Tuple of three DMI series: Positive Directional Movement (+DI) Negative Directional Movement (-DI) and Average Directional Movement Index (ADX)."
    args:
        name: "diLength"
        info: "DI Period."
        type: "simple int"

        name: "adxSmoothing"
        info: "ADX Smoothing Period."
        type: "simple int"
    syntax: "ta.dmi(diLength adxSmoothing) → series float series float series float"

"ta.correlation"
    kind: "Built-in function"
    desc: "Correlation coefficient. Describes the degree to which two series tend to deviate from their @fun ta.sma values."
    returns: "Correlation coefficient."
    args:
        name: "source1"
        info: "Source series."
        type: "series int/float"

        name: "source2"
        info: "Target series."
        type: "series int/float"

        name: "length"
        info: "Length (number of bars back)."
        type: "series int"
    syntax: "ta.correlation(source1 source2 length) → series float"

"ta.tsi"
    kind: "Built-in function"
    desc: "True strength index. It uses moving averages of the underlying momentum of a financial instrument."
    returns: "True strength index. A value in range -1 1."
    args:
        name: "source"
        info: "Source series."
        type: "series int/float"

        name: "short_length"
        info: "Short length."
        type: "simple int"

        name: "long_length"
        info: "Long length."
        type: "simple int"
    syntax: "ta.tsi(source short_length long_length) → series float"

"ta.linreg"
    kind: "Built-in function"
    desc: "Linear regression curve. A line that best fits the prices specified over a user-defined time period. It is calculated using the least squares method. The result of this function is calculated using the formula: linreg = intercept + slope * (length - 1 - offset) where intercept and slope are the values calculated with the least squares method on `source` series."
    returns: "Linear regression curve."
    args:
        name: "source"
        info: "Source series."
        type: "series int/float"

        name: "length"
        type: "series int"

        name: "offset"
        info: "Offset."
        type: "simple int"
    syntax: "ta.linreg(source length offset) → series float"

"ta.stoch"
    kind: "Built-in function"
    desc: "Stochastic. It is calculated by a formula: 100 * (close - lowest(low length)) / (highest(high length) - lowest(low length))."
    returns: "Stochastic."
    args:
        name: "source"
        info: "Source series."
        type: "series int/float"

        name: "high"
        info: "Series of high."
        type: "series int/float"

        name: "low"
        info: "Series of low."
        type: "series int/float"

        name: "length"
        info: "Length (number of bars back)."
        type: "series int"
    syntax: "ta.stoch(source high low length) → series float"

"ta.atr"
    kind: "Built-in function"
    desc: "Function atr (average true range) returns the RMA of true range. True range is max(high - low abs(high - close1) abs(low - close1))."
    returns: "Average true range."
    args:
        name: "length"
        info: "Length (number of bars back)."
        type: "simple int"
    syntax: "ta.atr(length)→ series float "

"fixnan"
    kind: "Built-in function"
    desc: "For a given series replaces NaN values with previous nearest non-NaN value."
    args:
        name: "source"
        type: "series int/float/bool/color"
    returns: "Series without na gaps."
    syntax: "fixnan(source) → series float"
            "fixnan(source) → series int"
            "fixnan(source) → series bool"
            "fixnan(source) → series color"

"ta.cum"
    kind: "Built-in function"
    desc: "Cumulative (total) sum of `source`. In other words it's a sum of all elements of `source`."
    args:
        name: "source"
        type: "series int/float"
    returns: "Total sum series."
    syntax: "ta.cum(source) → series float"

"ta.change"
    kind: "Built-in function"
    desc: "Compares the current `source` value to its value `length` bars ago and returns the difference."
    returns: "The difference between the values when they are numerical. When a 'bool' source is used returns `true` when the current source is different from the previous source."
    args:
        name: "source"
        info: "Source series."
        type: "series int/float/bool"

        name: "length"
        info: "How far the past `source` value is offset from the current one in bars. Optional. The default is 1."
        type: "series int"
    syntax: "ta.change(source) → series float"
            "ta.change(source) → series bool"
            "ta.change(source) → series int"
            "ta.change(source length) → series float"
            "ta.change(source length) → series bool"
            "ta.change(source length) → series int"

"ta.mom"
    kind: "Built-in function"
    desc: "Momentum of `source` price and `source` price `length` bars ago. This is simply a difference: source - sourcelength."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Offset from the current bar to the previous bar."
        type: "series int"
    returns: "Momentum of `source` price and `source` price `length` bars ago."
    syntax: "ta.mom(source length) → series float"

"ta.pivot_point_levels"
    kind: "Built-in function"
    desc: "Ccalculates the pivot point levels using the specified `type` and `anchor`."
    args:
        name: "type"
        info: 'The type of pivot point levels. Possible values: "Traditional" "Fibonacci" "Woodie" "Classic" "DeMark" "Camarilla".'
        type: "series string"

        name: "anchor"
        info: "The condition that triggers the reset of the pivot point calculations. When @op true calculations reset; when @op false results calculated at the last reset persist."
        type: "series bool"
    returns: 'A float array with numerical values representing 11 pivot point levels: P R1 S1 R2 S2 R3 S3 R4 S4 R5 S5. Levels absent from the specified `type` return @var na values (e.g. "DeMark" only ccalculates P R1 and S1).'
    syntax: "ta.pivot_point_levels(type anchor) → float"

"ta.vwap"
    kind: "Built-in function"
    desc: "Volume weighted average price."
    returns: "A VWAP series or a tuple vwap upper_band lower_band if `stdev_mult` is specified."
    args:
        name: "source"
        info: "Source used for the VWAP calculation."
        type: "series int/float"

        name: "anchor"
        info: 'The condition that triggers the reset of VWAP calculations. When @op true calculations reset; when @op false calculations proceed using the values accumulated since the previous reset. Optional. The default is equivalent to passing @fun timeframe.change with "1D" as its argument.'
        type: "series bool"

        name: "stdev_mult"
        info: "If specified the function will calculate the standard deviation bands based on the main VWAP series and return a vwap upper_band lower_band tuple. The `upper_band`/`lower_band` values are calculated using the VWAP to which the standard deviation multiplied by this argument is added/subtracted. Optional. The default is @var na in which case the function returns a single value not a tuple."
        type: "series int/float"
    remarks: "Calculations only begin the first time the anchor condition becomes @op true. Until then the function returns @var na."
    syntax: "ta.vwap(source) → series float"
            "ta.vwap(source anchor) → series float"
            "ta.vwap(source anchor stdev_mult) → series float series float series float"

"ta.swma"
    desc: "Symmetrically weighted moving average with fixed length: 4. Weights: 1/6 2/6 2/6 1/6."
    kind: "Built-in function"
    returns: "Symmetrically weighted moving average."
    args:
        name: "source"
        info: "Source series."
        type: "series int/float"
    syntax: "ta.swmsource) → series float"

"ta.sar"
    kind: "Built-in function"
    desc: "Parabolic SAR (parabolic stop and reverse) is a method devised by J. Welles Wilder Jr. to find potential reversals in the market price direction of traded goods."
    returns: "Parabolic SAR."
    args:
        name: "start"
        info: "Start."
        type: "simple int/float"

        name: "inc"
        info: "Increment."
        type: "simple int/float"

        name: "max"
        info: "Maximum."
        type: "simple int/float"
    syntax: "ta.sar(start inc max) → series float"

"timeframe.change"
    kind: "Built-in function"
    desc: "Detects changes in the specified `timeframe`."
    args:
        name: "timeframe"
        info: "String formatted according to the User manual's timeframe string specifications."
        type: "simple string"
    returns: "Returns @op true on the first bar of a new `timeframe` @op false otherwise."
    syntax: "timeframe.change(timeframe) → series bool"

"math.avg"
    kind: "Built-in function"
    desc: "Ccalculates average of all given series (elementwise)."
    returns: "Average."
    syntax: "math.avg(number0 number1 ...) → simple float"
            "math.avg(number0 number1 ...) → series float"

"request.security"
    kind: "Built-in function"
    desc: "Request another symbol/resolution"
    args:
        name: "symbol"
        info: "Symbol."
        type: "simple string"

        name: "timeframe"
        info: "Resolution. An empty string is interpreted as the current resolution of the chart."
        type: "simple string"

        name: "expression"
        info: "An expression can be calculated and returned from the @fun request.security call. It can be a series or a tuple containing elements that can be cast to series."
        type: "series int/float/bool/color"

        name: "gaps"
        info: "Merge strategy for the requested data (requested data automatically merges with the main series OHLC data). Possible values: @var barmerge.gaps_on @var barmerge.gaps_off. @var barmerge.gaps_on - requested data is merged with possible gaps (@var na values). @var barmerge.gaps_off - requested data is merged continuously without gaps all the gaps are filled with the previous nearest existing values. Default value is @var barmerge.gaps_off."
        type: "barmerge_gaps"

        name: "lookahead"
        info: "Merge strategy for the requested data position. Possible values: @var barmerge.lookahead_on @var barmerge.lookahead_off. Default value is @var barmerge.lookahead_off starting from version 3. Note that behavour is the same on real-time and differs only on history."
        type: "barmerge_lookahead"

        name: "ignore_invalid_symbol"
        info: "An optional parameter. Determines the behavior of the function if the specified symbol is not found: if false the script will halt and return a runtime error; if true the function will return na and execution will continue. The default value is false."
        type: "input bool"

        name: "currency"
        info: "Currency into which the symbol's currency-related values (e.g. OHLC) are to be converted. The `expression` is then calculated based on the converted values. The conversion rates used are based on the FX_IDC pairs' daily rates of the previous day (relative to the bar where the calculation is done). Optional. The default is @var syminfo.currency. Possible values: a three-letter string with the currency code in the ISO 4217 format (e.g. \"USD\") or one of the constants in the currency.* namespace e.g. @var currency.USD."
        type: "simple string"
    returns: "Requested series."
    remarks: "PineScript code that uses this function could calculate differently on history and real-time data."
            "If you want to specify additional parameters for the requested symbol e.g. session or adjustment type you can use the ticker.new() function."
            "It is not possible to pass a spread to this function using the 'ticker' variable. You can use the 'ticker.new' variable or a string representation of the ticker e.g. “AAPL+MSFT*TSLA”."
            "At the moment up to 40 request.security calls can be present in a script."
            "Please note that using this variable/function can cause indicator repainting."
            "The resolution argument allowable values are:ulli1S 5S 10S 15S 30S - for seconds intervals (chart resolution should be less than or equal to the requested resolution)li_endlifrom 1 to 1440 for minutesli_endlifrom 1D to 365D for daysli_endlifrom 1W to 52W for weeksli_endlifrom 1M to 12M for monthsli_endul_end"
    syntax: "request.security(symbol timeframe expression gaps lookahead ignore_invalid_symbol currency) → series float"
            "request.security(symbol timeframe expression gaps lookahead ignore_invalid_symbol currency) → series int"
            "request.security(symbol timeframe expression gaps lookahead ignore_invalid_symbol currency) → series bool"
            "request.security(symbol timeframe expression gaps lookahead ignore_invalid_symbol currency) → series color"

"request.security_lower_tf"
    kind: "Built-in function"
    desc: "Requests data from a lower timeframe than the chart's."
    args:
        name: "symbol"
        info: "Symbol."
        type: "simple string"

        name: "timeframe"
        info: "Resolution. An empty string is interpreted as the chart's timeframe."
        type: "simple string"

        name: "expression"
        info: "An expression or a variable that can be calculated and returned from the lower timeframe's context."
        type: "series int/float/bool/color"

        name: "ignore_invalid_symbol"
        info: "Determines the behavior of the function if the specified `symbol` is not found: when @op false the script will halt and return a runtime error; when @op true the function will return @var na and execution will continue. Optional. The default is @op false."
        type: "const bool"

        name: "currency"
        info: "Currency into which the symbol's currency-related values (e.g. OHLC) are to be converted. The `expression` is then calculated based on the converted values. The conversion rates used are based on the FX_IDC pairs' daily rates of the previous day (relative to the bar where the calculation is done). Possible values: a three-letter string with the currency code in the ISO 4217 format (e.g. \"USD\") or one of the constants in the currency.* namespace e.g. @var currency.USD. Optional. The default is @var syminfo.currency."
        type: "simple string"
    returns: "Requested series."
    remarks: "Pine Script™ code using this function may calculate differently on historical and real-time bars leading to repainting."
            "If you want to specify additional parameters for the requested symbol e.g. session or adjustment type you can use @fun ticker.new."
            "Please note that spreads (e.g. “AAPL+MSFT*TSLA”) will not always return reliable data with this function."
            "A maximum of 40 function calls can be used in one script and a maximum of 100000 intrabars can be accessed by a call. The number of chart bars for which lower timeframe data is available will thus vary with the requested lower timeframe."
    syntax: "request.security_lower_tf(symbol timeframe expression ignore_invalid_symbol currency) → float"
            "request.security_lower_tf(symbol timeframe expression ignore_invalid_symbol currency) → int"
            "request.security_lower_tf(symbol timeframe expression ignore_invalid_symbol currency) → bool"
            "request.security_lower_tf(symbol timeframe expression ignore_invalid_symbol currency) → color"

"request.financial"
    kind: "Built-in function"
    desc: "Requests financial series for symbol."
    args:
        name: "symbol"
        info: 'Symbol. Note that the symbol should be passed with a prefix. For example: "NASDAQ:AAPL" instead of "AAPL".'
        type: "simple string"

        name: "financial_id"
        info: "Financial identifier. You can find the list of available ids via our Help Center."
        type: "simple string"

        name: "period"
        info: 'Reporting period. Possible values are "TTM" "FY" "FQ".'
        type: "simple string"

        name: "gaps"
        info: "Merge strategy for the requested data (requested data automatically merges with the main series: OHLC data). Possible values include: @var barmerge.gaps_on @var barmerge.gaps_off. @var barmerge.gaps_on - requested data is merged with possible gaps (@var na values). @var barmerge.gaps_off - requested data is merged continuously without gaps all the gaps are filled with the previous nearest existing values. Default value is @var barmerge.gaps_off."
        type: "barmerge_gaps"

        name: "ignore_invalid_symbol"
        info: "An optional parameter. Determines the behavior of the function if the specified symbol is not found: if false the script will halt and return a runtime error; if true the function will return na and execution will continue. The default value is false."
        type: "input bool"

        name: "currency"
        info: "Currency into which the symbol's financial metrics (e.g. Net Income) are to be converted. The conversion rates used are based on the FX_IDC pairs' daily rates of the previous day (relative to the bar where the calculation is done). Optional. The default is @var syminfo.currency. Possible values: a three-letter string with the currency code in the ISO 4217 format (e.g. \"USD\") or one of the constants in the currency.* namespace e.g. @var currency.USD."
        type: "simple string"
    returns: "Requested series."
    syntax: "request.financial(symbol financial_id period gaps ignore_invalid_symbol currency) → series float"

"request.quandl"
    kind: "Built-in function"
    desc: "Requests Nasdaq Data Link (formerly Quandl) data for a symbol."
    args:
        name: "ticker"
        info: 'Symbol. Note that the name of a time series and Quandl data feed should be divided by a forward slash. For example: "CFTC/SB_FO_ALL".'
        type: "simple string"

        name: "gaps"
        info: "Merge strategy for the requested data (requested data automatically merges with the main series: OHLC data). Possible values include: @var barmerge.gaps_on @var barmerge.gaps_off. @var barmerge.gaps_on - requested data is merged with possible gaps (@var na values). @var barmerge.gaps_off - requested data is merged continuously without gaps all the gaps are filled with the previous nearest existing values. Default value is @var barmerge.gaps_off."
        type: "barmerge_gaps"

        name: "index"
        info: "A Quandl time-series column index."
        type: "simple int"

        name: "ignore_invalid_symbol"
        info: "An optional parameter. Determines the behavior of the function if the specified symbol is not found: if false the script will halt and return a runtime error; if true the function will return na and execution will continue. The default value is false."
        type: "input bool"
    returns: "Requested series."
    remarks: "You can learn more about how to find ticker and index values in our Help Center."
    syntax: "request.quandl(ticker gaps index ignore_invalid_symbol) → series float"

"ticker.new"
    kind: "Built-in function"
    desc: "Creates a ticker identifier for requesting additional data for the script."
    args:
        name: "prefix"
        info: "Exchange prefix. For example: 'BATS' 'NYSE' 'NASDAQ'. Exchange prefix of main series is @var syminfo.prefix."
        type: "simple string"

        name: "ticker"
        info: "Ticker name. For example 'AAPL' 'MSFT' 'EURUSD'. Ticker name of the main series is @var syminfo.ticker."
        type: "simple string"

        name: "session"
        info: "Session type. Optional argument. Possible values: @var session.regular @var session.extended. Session type of the current chart is @var syminfo.session. If session is not given then @var syminfo.session value is used."
        type: "simple string"

        name: "adjustment"
        info: "Adjustment type. Optional argument. Possible values: @var adjustment.none @var adjustment.splits @var adjustment.dividends. If adjustment is not given then default adjustment value is used (can be different depending on particular instrument)."
        type: "simple string"
    returns: "String value of ticker id that can be supplied to @fun request.security function."
    remarks: "You may use return value of @fun ticker.new function as input argument for @fun ticker.heikinashi @fun ticker.renko @fun ticker.linebreak @fun ticker.kagi @fun ticker.pointfigure functions."
    syntax: "ticker.new(prefix ticker session adjustment) → simple string"

"syminfo.prefix"
    kind: "Built-in function"
    desc: 'Returns exchange prefix of the `symbol` e.g. "NASDAQ".'
    args:
        name: "symbol"
        info: 'Symbol. Note that the symbol should be passed with a prefix. For example: "NASDAQ:AAPL" instead of "AAPL".'
        type: "series string"
    returns: 'Returns exchange prefix of the `symbol` e.g. "NASDAQ".'
    remarks: "The result of the function is used in the @fun ticker.new/@fun ticker.modify and @fun request.security."
    syntax: "syminfo.prefix(symbol) → simple string"
            "syminfo.prefix(symbol) → series string"

"syminfo.ticker"
    kind: "Built-in function"
    desc: 'Returns `symbol` name without exchange prefix e.g. "AAPL".'
    args:
        name: "symbol"
        info: 'Symbol. Note that the symbol should be passed with a prefix. For example: "NASDAQ:AAPL" instead of "AAPL".'
        type: "series string"
    returns: 'Returns `symbol` name without exchange prefix e.g. "AAPL".'
    remarks: "The result of the function is used in the @fun ticker.new/@fun ticker.modify and @fun request.security."
    syntax: "syminfo.ticker(symbol) → simple string"
            "syminfo.ticker(symbol) → series string"

"ticker.modify"
    kind: "Built-in function"
    desc: "Creates a ticker identifier for requesting additional data for the script."
    args:
        name: "tickerid"
        info: "Symbol name with exchange prefix e.g. 'BATS:MSFT' 'NASDAQ:MSFT' or tickerid with session and adjustment from the @fun ticker.new function."
        type: "simple string"

        name: "session"
        info: "Session type. Optional argument. Possible values: @var session.regular @var session.extended. Session type of the current chart is @var syminfo.session. If session is not given then @var syminfo.session value is used."
        type: "simple string"

        name: "adjustment"
        info: "Adjustment type. Optional argument. Possible values: @var adjustment.none @var adjustment.splits @var adjustment.dividends. If adjustment is not given then default adjustment value is used (can be different depending on particular instrument)."
        type: "simple string"
    returns: "String value of ticker id that can be supplied to @fun request.security function."
    syntax: "ticker.modify(tickerid session adjustment) → simple string"

"ticker.heikinashi"
    kind: "Built-in function"
    desc: "Creates a ticker identifier for requesting Heikin Ashi bar values."
    args:
        name: "symbol"
        info: "Symbol ticker identifier."
        type: "simple string"
    returns: "String value of ticker id that can be supplied to @fun request.security function."
    syntax: "ticker.heikinashi(symbol) → simple string"

"ticker.renko"
    kind: "Built-in function"
    desc: "Creates a ticker identifier for requesting Renko values."
    args:
        name: "symbol"
        info: "Symbol ticker identifier."
        type: "simple string"

        name: "style"
        info: "Box Size Assignment Method: 'ATR' 'Traditional'."
        type: "simple string"

        name: "param"
        info: "ATR Length if `style` is equal to 'ATR' or Box Size if `style` is equal to 'Traditional'."
        type: "simple int/float"
    returns: "String value of ticker id that can be supplied to @fun request.security function."
    syntax: "ticker.renko(symbol style param) → simple string"

"ticker.linebreak"
    kind: "Built-in function"
    desc: "Creates a ticker identifier for requesting Line Break values."
    args:
        name: "symbol"
        info: "Symbol ticker identifier."
        type: "simple string"

        name: "number_of_lines"
        info: "Number of line."
        type: "simple int"
    returns: "String value of ticker id that can be supplied to @fun request.security function."
    syntax: "ticker.linebreak(symbol number_of_lines) → simple string"

"ticker.kagi"
    kind: "Built-in function"
    desc: "Creates a ticker identifier for requesting Kagi values."
    args:
        name: "symbol"
        info: "Symbol ticker identifier."
        type: "simple string"

        name: "reversal"
        info: "Reversal amount (absolute price value)."
        type: "simple int/float"
    returns: "String value of ticker id that can be supplied to @fun request.security function."
    syntax: "ticker.kagi(symbol reversal) → simple string"

"ticker.pointfigure"
    kind: "Built-in function"
    desc: "Creates a ticker identifier for requesting Point & Figure values."
    args:
        name: "symbol"
        info: "Symbol ticker identifier."
        type: "simple string"

        name: "source"
        info: "The source for calculating Point & Figure. Possible values are: 'hl' 'close'."
        type: "simple string"

        name: "style"
        info: "Box Size Assignment Method: 'ATR' 'Traditional'."
        type: "simple string"

        name: "param"
        info: "ATR Length if `style` is equal to 'ATR' or Box Size if `style` is equal to 'Traditional'."
        type: "simple int/float"

        name: "reversal"
        info: "Reversal amount."
        type: "simple int"
    returns: "String value of ticker id that can be supplied to @fun request.security function."
    syntax: "ticker.pointfigure(symbol source style param reversal) → simple string"

"time"
    kind: "Built-in function"
    desc: "The time function returns the UNIX time of the current bar for the specified timeframe and session or NaN if the time point is out of session."
    returns: "UNIX time."
    args:
        name: "timeframe"
        info: "Timeframe. An empty string is interpreted as the current timeframe of the chart."
        type: "simple string"

        name: "session"
        info: "Session specification. Optional argument session of the symbol is used by default. An empty string is interpreted as the session of the symbol."
        type: "simple string"

        name: "timezone"
        info: 'Timezone of the `session` argument. Can only be used when a `session` is specified. Optional. The default is @var syminfo.timezone. Can be specified in GMT notation (e.g. "GMT-5") or as an IANA time zone database name (e.g. "America/New_York").'
        type: "simple string"
    remarks: "UNIX time is the number of milliseconds that have elapsed since 00:00:00 UTC 1 January 1970."
    syntax: "time(timeframe, session, timezone) → series int"
        "time(timeframe, session) → series int"
        "time(timeframe) → series int"

"time_close"
    kind: "Built-in function"
    desc: "The time_close function returns the UNIX time of the close of the current bar for the specified resolution and session or NaN if the time point is out of session."
    returns: "UNIX time."
    args:
        name: "timeframe"
        info: "Resolution. An empty string is interpreted as the current resolution of the chart."
        type: "simple string"

        name: "session"
        info: "Session specification. Optional argument session of the symbol is used by default. An empty string is interpreted as the session of the symbol."
        type: "simple string"

        name: "timezone"
        info: 'Timezone of the `session` argument. Can only be used when a `session` is specified. Optional. The default is @var syminfo.timezone. Can be specified in GMT notation (e.g. "GMT-5") or as an IANA time zone database name (e.g. "America/New_York").'
        type: "simple string"
    remarks: "UNIX time is the number of milliseconds that have elapsed since 00:00:00 UTC 1 January 1970."
    syntax: "time_close(timeframe session timezone) → series int"
            "time_close(timeframe session) → series int"
            "time_close(timeframe) → series int"

"timestamp"
    kind: "Built-in function"
    desc: "Function timestamp returns UNIX time of specified date and time."
    returns: "UNIX time."
    args:
        name: "timezone"
        info: 'Allows adjusting the returned value to a time zone specified in either UTC/GMT notation (e.g. "UTC-5" "GMT+0530") or as an IANA time zone database name (e.g. "America/New_York"). Optional. The default is @var syminfo.timezone.'
        type: "series string"

        name: "year"
        info: "Year."
        type: "series int"

        name: "month"
        info: "Month."
        type: "series int"

        name: "day"
        info: "Day."
        type: "series int"

        name: "hour"
        info: "(Optional argument) Hour. Default is 0."
        type: "series int"

        name: "minute"
        info: "(Optional argument) Minute. Default is 0."
        type: "series int"

        name: "second"
        info: "(Optional argument) Second. Default is 0."
        type: "series int"

        name: "dateString"
        info: 'A string containing the date and optionally the time and time zone. Its format must comply with either the IETF RFC 2822 or ISO 8601 standards ("DD MMM YYYY hh:mm:ss ±hhmm" or "YYYY-MM-DDThh:mm:ss±hh:mm" so "20 Feb 2020" or "2020-02-20"). If no time is supplied "00:00" is used. If no time zone is supplied GMT+0 will be used. Note that this diverges from the usual behavior of the function where it returns time in the exchange\'s timezone.'
        type: "const string"
    remarks: "UNIX time is the number of milliseconds that have elapsed since 00:00:00 UTC 1 January 1970."
    syntax: "timestamp(dateString) → const int"
            "timestamp(year month day hour minute second) → simple int"
            "timestamp(timezone year month day hour minute second) → simple int"
            "timestamp(year month day hour minute second) → series int"
            "timestamp(timezone year month day hour minute second) → series int"

"year"
    kind: "Built-in function"
    returns: "Year (in exchange timezone) for provided UNIX time."
    args:
        name: "time"
        info: "UNIX time in milliseconds."
        type: "series int"

        name: "timezone"
        info: 'Allows adjusting the returned value to a time zone specified in either UTC/GMT notation (e.g. "UTC-5" "GMT+0530") or as an IANA time zone database name (e.g. "America/New_York"). Optional. The default is @var syminfo.timezone.'
        type: "series string"
    remarks: "UNIX time is the number of milliseconds that have elapsed since 00:00:00 UTC 1 January 1970."
            "Note that this function returns the year based on the time of the bar's open. For overnight sessions (e.g. EURUSD where Monday session starts on Sunday 17:00 UTC-4) this value can be lower by 1 than the year of the trading day."
    syntax: "year(time) → series int"
            "year(time timezone) → series int"

"month"
    kind: "Built-in function"
    returns: "Month (in exchange timezone) for provided UNIX time."
    args:
        name: "time"
        info: "UNIX time in milliseconds."
        type: "series int"

        name: "timezone"
        info: 'Allows adjusting the returned value to a time zone specified in either UTC/GMT notation (e.g. "UTC-5" "GMT+0530") or as an IANA time zone database name (e.g. "America/New_York"). Optional. The default is @var syminfo.timezone.'
        type: "series string"
    remarks: "UNIX time is the number of milliseconds that have elapsed since 00:00:00 UTC 1 January 1970."
            "Note that this function returns the month based on the time of the bar's open. For overnight sessions (e.g. EURUSD where Monday session starts on Sunday 17:00 UTC-4) this value can be lower by 1 than the month of the trading day."
    syntax: "month(time) → series int"
            "month(time timezone) → series int"

"weekofyear"
    kind: "Built-in function"
    returns: "Week of year (in exchange timezone) for provided UNIX time."
    args:
        name: "time"
        info: "UNIX time in milliseconds."
        type: "series int"

        name: "timezone"
        info: 'Allows adjusting the returned value to a time zone specified in either UTC/GMT notation (e.g. "UTC-5" "GMT+0530") or as an IANA time zone database name (e.g. "America/New_York"). Optional. The default is @var syminfo.timezone.'
        type: "series string"
    remarks: "UNIX time is the number of milliseconds that have elapsed since 00:00:00 UTC 1 January 1970."
            "Note that this function returns the week based on the time of the bar's open. For overnight sessions (e.g. EURUSD where Monday session starts on Sunday 17:00) this value can be lower by 1 than the week of the trading day."
    syntax: "weekofyear(time) → series int"
            "weekofyear(time timezone) → series int"

"dayofmonth"
    kind: "Built-in function"
    returns: "Day of month (in exchange timezone) for provided UNIX time."
    args:
        name: "time"
        info: "UNIX time in milliseconds."
        type: "series int"

        name: "timezone"
        info: 'Allows adjusting the returned value to a time zone specified in either UTC/GMT notation (e.g. "UTC-5" "GMT+0530") or as an IANA time zone database name (e.g. "America/New_York"). Optional. The default is @var syminfo.timezone.'
        type: "series string"
    remarks: "UNIX time is the number of milliseconds that have elapsed since 00:00:00 UTC 1 January 1970."
            "Note that this function returns the day based on the time of the bar's open. For overnight sessions (e.g. EURUSD where Monday session starts on Sunday 17:00 UTC-4) this value can be lower by 1 than the day of the trading day."
    syntax: "dayofmonth(time) → series int"
            "dayofmonth(time timezone) → series int"

"dayofweek"
    kind: "Built-in function"
    returns: "Day of week (in exchange timezone) for provided UNIX time."
    args:
        name: "time"
        info: "UNIX time in milliseconds."
        type: "series int"

        name: "timezone"
        info: 'Allows adjusting the returned value to a time zone specified in either UTC/GMT notation (e.g. "UTC-5" "GMT+0530") or as an IANA time zone database name (e.g. "America/New_York"). Optional. The default is @var syminfo.timezone.'
        type: "series string"
    remarks: "Note that this function returns the day based on the time of the bar's open. For overnight sessions (e.g. EURUSD where Monday session starts on Sunday 17:00) this value can be lower by 1 than the day of the trading day."
            "UNIX time is the number of milliseconds that have elapsed since 00:00:00 UTC 1 January 1970."
    syntax: "dayofweek(time) → series int"
            "dayofweek(time timezone) → series int"

"hour"
    kind: "Built-in function"
    returns: "Hour (in exchange timezone) for provided UNIX time."
    args:
        name: "time"
        info: "UNIX time in milliseconds."
        type: "series int"

        name: "timezone"
        info: 'Allows adjusting the returned value to a time zone specified in either UTC/GMT notation (e.g. "UTC-5" "GMT+0530") or as an IANA time zone database name (e.g. "America/New_York"). Optional. The default is @var syminfo.timezone.'
        type: "series string"
    remarks: "UNIX time is the number of milliseconds that have elapsed since 00:00:00 UTC 1 January 1970."
    syntax: "hour(time) → series int"
            "hour(time timezone) → series int"

"minute"
    kind: "Built-in function"
    returns: "Minute (in exchange timezone) for provided UNIX time."
    args:
        name: "time"
        info: "UNIX time in milliseconds."
        type: "series int"

        name: "timezone"
        info: 'Allows adjusting the returned value to a time zone specified in either UTC/GMT notation (e.g. "UTC-5" "GMT+0530") or as an IANA time zone database name (e.g. "America/New_York"). Optional. The default is @var syminfo.timezone.'
        type: "series string"
    remarks: "UNIX time is the number of milliseconds that have elapsed since 00:00:00 UTC 1 January 1970."
    syntax: "minute(time) → series int"
            "minute(time timezone) → series int"

"second"
    kind: "Built-in function"
    returns: "Second (in exchange timezone) for provided UNIX time."
    args:
        name: "time"
        info: "UNIX time in milliseconds."
        type: "series int"

        name: "timezone"
        info: 'Allows adjusting the returned value to a time zone specified in either UTC/GMT notation (e.g. "UTC-5" "GMT+0530") or as an IANA time zone database name (e.g. "America/New_York"). Optional. The default is @var syminfo.timezone.'
        type: "series string"
    remarks: "UNIX time is the number of milliseconds that have elapsed since 00:00:00 UTC 1 January 1970."
    syntax: "second(time) → series int"
            "second(time timezone) → series int"

"ta.cross"
    kind: "Built-in function"
    returns: "true if two series have crossed each other otherwise false."
    args:
        name: "source1"
        info: "First data series."
        type: "series int/float"

        name: "source2"
        info: "Second data series."
        type: "series int/float"
    syntax: "ta.cross(source1 source2) → series bool"

"ta.cog"
    kind: "Built-in function"
    desc: "The cog (center of gravity) is an indicator based on statistics and the Fibonacci golden ratio."
    returns: "Center of Gravity."
    args:
        name: "source"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.cog(source length)→ series float "

"ta.alma"
    desc: "Arnaud Legoux Moving Average. It uses Gaussian distribution as weights for moving average."
    kind: "Built-in function"
    returns: "Arnaud Legoux Moving Average."
    args:
        name: "series"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"

        name: "offset"
        info: "Controls tradeoff between smoothness (closer to 1) and responsiveness (closer to 0)."
        type: "simple int/float"

        name: "sigma"
        info: "Changes the smoothness of ALMA. The larger sigma the smoother ALMA."
        type: "simple int/float"

        name: "floor"
        info: "An optional parameter. Specifies whether the offset calculation is floored before ALMA is calculated. Default value is false."
        type: "simple bool"
    syntax: "ta.almseries length offset sigma) → series float"
            "ta.almseries length offset sigma floor) → series float"

"ta.cmo"
    desc: "Chande Momentum Oscillator. Ccalculates the difference between the sum of recent gains and the sum of recent losses and then divides the result by the sum of all price movement over the same period."
    kind: "Built-in function"
    returns: "Chande Momentum Oscillator."
    args:
        name: "series"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.cmi(series length)→ series float "

"ta.mfi"
    desc: "Money Flow Index. The Money Flow Index (MFI) is a technical oscillator that uses price and volume for identifying overbought or oversold conditions in an asset."
    kind: "Built-in function"
    returns: "Money Flow Index."
    args:
        name: "series"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"
    syntax: "ta.mfi(series length)→ series float "

"ta.wpr"
    desc: "Williams %R. The oscillator shows the current closing price in relation to the high and low of the past 'length' bars."
    kind: "Built-in function"
    returns: "Williams %R."
    args:
        name: "length"
        info: "Number of bars."
        type: "series int"
    syntax: "ta.wpr(length)→ series float "

"ta.bb"
    desc: "Bollinger Bands. A Bollinger Band is a technical analysis tool defined by a set of lines plotted two standard deviations (positively and negatively) away from a simple moving average (SMA) of the security's price but can be adjusted to user preferences."
    kind: "Built-in function"
    returns: "Bollinger Bands."
    args:
        name: "series"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"

        name: "mult"
        info: "Standard deviation factor."
        type: "simple int/float"
    syntax: "ta.bb(series length mult) → series float series float series float"

"ta.bbw"
    desc: "Bollinger Bands Width. The Bollinger Band Width is the difference between the upper and the lower Bollinger Bands divided by the middle band."
    kind: "Built-in function"
    returns: "Bollinger Bands Width."
    args:
        name: "series"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "series int"

        name: "mult"
        info: "Standard deviation factor."
        type: "simple int/float"
    syntax: "ta.bbw(series length mult)→ series float "

"ta.kc"
    desc: "Keltner Channels. Keltner channel is a technical analysis indicator showing a central moving average line plus channel lines at a distance above and below."
    kind: "Built-in function"
    returns: "Keltner Channels."
    args:
        name: "series"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "simple int"

        name: "mult"
        info: "Standard deviation factor."
        type: "simple int/float"

        name: "useTrueRange"
        info: "An optional parameter. Specifies if True Range is used; default is true. If the value is false the range will be calculated with the expression (high - low)."
        type: "simple bool"

    syntax: "ta.kc(series length mult) → series float series float series float"
            "ta.kc(series length mult useTrueRange) → series float series float series float"

"ta.kcw"
    desc: "Keltner Channels Width. The Keltner Channels Width is the difference between the upper and the lower Keltner Channels divided by the middle channel."
    kind: "Built-in function"
    returns: "Keltner Channels Width."
    args:
        name: "series"
        info: "Series of values to process."
        type: "series int/float"

        name: "length"
        info: "Number of bars (length)."
        type: "simple int"

        name: "mult"
        info: "Standard deviation factor."
        type: "simple int/float"

        name: "useTrueRange"
        info: "An optional parameter. Specifies if True Range is used; default is true. If the value is false the range will be calculated with the expression (high - low)."
        type: "simple bool"
    syntax: "ta.kcw(series length mult) → series float"
            "ta.kcw(series length mult useTrueRange) → series float"

"float"
    desc: "Casts na to float"
    kind: "Built-in function"
    returns: "The value of the argument after casting to float."
    syntax: "float(x) → const float"
            "float(x) → input float"
            "float(x) → simple float"
            "float(x) → series float"

"int"
    kind: "Built-in function"
    desc: "Casts na or truncates float value to int"
    returns: "The value of the argument after casting to int."
    syntax: "int(x) → simple int"
            "int(x) → input int"
            "int(x) → const int"
            "int(x) → series int"

"bool"
    desc: "Casts na to bool"
    kind: "Built-in function"
    returns: "The value of the argument after casting to bool."
    syntax: "bool(x) → const bool"
            "bool(x) → input bool"
            "bool(x) → simple bool"
            "bool(x) → series bool"

"color"
    desc: "Casts na to color"
    kind: "Built-in function"
    returns: "The value of the argument after casting to color."
    syntax: "color(x) → const color"
            "color(x) → input color"
            "color(x) → simple color"
            "color(x) → series color"

"string"
    desc: "Casts na to string"
    kind: "Built-in function"
    returns: "The value of the argument after casting to string."
    syntax: "string(x) → const string"
            "string(x) → input string"
            "string(x) → simple string"
            "string(x) → series string"
            "line"
    desc: "Casts na to line"
    kind: "Built-in function"
    returns: "The value of the argument after casting to line."
    syntax: "line(x) → series line"

"label"
    desc: "Casts na to label"
    kind: "Built-in function"
    returns: "The value of the argument after casting to label."
    syntax: "label(x) → series label"

"table"
    desc: "Casts na to table"
    kind: "Built-in function"
    returns: "The value of the argument after casting to table."
    syntax: "table(x) → series table"

"box"
    desc: "Casts na to box."
    kind: "Built-in function"
    returns: "The value of the argument after casting to box."
    syntax: "box(x) → series box"

"linefill"
    kind: "Built-in function"
    desc: "Casts na to linefill."
    returns: "The value of the argument after casting to linefill."
    syntax: "linefill(x) → series linefill"

"str.tostring"
    kind: "Built-in function"
    returns: "The string representation of the `value` argument."
            "If the `value` argument is a string it is returned as is."
            'When the `value` is na the function returns the string "NaN".'
    args:
        name: "value"
        info: "Value or array ID whose elements are converted to a string."
        type: "series int/float/bool/string/matrix<float>/matrix<int>/matrix<string>/matrix<bool>/int/float/bool/string"

        name: "format"
        info: "Format string. Accepts these format.* constants: @var format.mintick @var format.percent @var format.volume. Optional. The default value is '#.##########'."
        type: "series string"
    remarks: "The formatting of float values will also round those values when necessary e.g. str.tostring(3.99 '#') will return \"4\"."
            "To display trailing zeros use '0' instead of '#'. For example '#.000'."
            "When using @var format.mintick the value will be rounded to the nearest number that can be divided by @var syminfo.mintick without the remainder. The string is returned with trailing zeroes."
            "If the x argument is a string the same string value will be returned."
            'Bool type arguments return "true" or "false".'
            'When x is na the function returns "NaN".'
    syntax: "str.tostring(value) → series string"
            "str.tostring(value format) → series string"
            "str.tostring(value) → simple string"
            "str.tostring(value format) → simple string"

"str.tonumber"
    kind: "Built-in function"
    returns: "A float version of the string if it contains a valid number na otherwise."
    args:
        name: "string"
        info: "String representation of an int or float."
        type: "series string"
    syntax: "str.tonumber(string) → series float"

"str.replace_all"
    kind: "Built-in function"
    desc: "Replaces each occurrence of the target string in the source string with the replacement string."
    returns: "Processed string."
    args:
        name: "source"
        info: "Source string."
        type: "series string"

        name: "target"
        info: "String to be replaced."
        type: "series string"

        name: "replacement"
        info: "String to be substituted for each occurrence of target string."
        type: "series string"
    syntax: "str.replace_all(source target replacement) → simple string"
            "str.replace_all(source target replacement) → series string"

"str.contains"
    kind: "Built-in function"
    desc: "Returns true if the `source` string contains the `str` substring false otherwise."
    returns: "True if the `str` was found in the `source` string false otherwise."
    args:
        name: "source"
        info: "Source string."
        type: "series string"

        name: "str"
        info: "The substring to search for."
        type: "series string"
    syntax: "str.contains(source str) → const bool"
            "str.contains(source str) → simple bool"
            "str.contains(source str) → series bool"

"str.substring"
    kind: "Built-in function"
    desc: "Returns a new string that is a substring of the `source` string. The substring begins with the character at the index specified by `begin_pos` and extends to 'end_pos - 1' of the `source` string."
    returns: "The substring extracted from the source string."
    args:
        name: "source"
        info: "Source string from which to extract the substring."
        type: "series string"

        name: "begin_pos"
        info: "The beginning position of the extracted substring. It is inclusive (the extracted substring includes the character at that position)."
        type: "series int"

        name: "end_pos"
        info: "The ending position. It is exclusive (the extracted string does NOT include that position's character). Optional. The default is the length of the `source` string."
        type: "series int"
    remarks: "Strings indexing starts from 0. If `begin_pos` is equal to `end_pos` the function returns an empty string."
    syntax: "str.substring(source begin_pos) → const string"
            "str.substring(source begin_pos) → simple string"
            "str.substring(source begin_pos) → series string"
            "str.substring(source begin_pos end_pos) → const string"
            "str.substring(source begin_pos end_pos) → simple string"
            "str.substring(source begin_pos end_pos) → series string"

"str.replace"
    kind: "Built-in function"
    desc: "Returns a new string with the Nth occurrence of the `target` string replaced by the `replacement` string where N is specified in `occurrence`."
    returns: "Processed string."
    args:
        name: "source"
        info: "Source string."
        type: "series string"

        name: "target"
        info: "String to be replaced."
        type: "series string"

        name: "replacement"
        info: "String to be inserted instead of the target string."
        type: "series string"

        name: "occurrence"
        info: "N-th occurrence of the target string to replace. Indexing starts at 0 for the first match. Optional. Default value is 0."
        type: "series int"
    syntax: "str.replace(source target replacement occurrence) → const string"
            "str.replace(source target replacement occurrence) → simple string"
            "str.replace(source target replacement occurrence) → series string"

"str.lower"
    kind: "Built-in function"
    desc: "Returns a new string with all letters converted to lowercase."
    returns: "A new string with all letters converted to lowercase."
    args:
        name: "source"
        info: "String to be converted."
        type: "series string"
    syntax: "str.lower(source) → const string"
            "str.lower(source) → simple string"
            "str.lower(source) → series string"

"str.upper"
    kind: "Built-in function"
    desc: "Returns a new string with all letters converted to uppercase."
    returns: "A new string with all letters converted to uppercase."
    args:
        name: "source"
        info: "String to be converted."
        type: "series string"
    syntax: "str.upper(source) → const string"
            "str.upper(source) → simple string"
            "str.upper(source) → series string"

"str.startswith"
    kind: "Built-in function"
    desc: "Returns true if the `source` string starts with the substring specified in `str` false otherwise."
    returns: "True if the `source` string starts with the substring specified in `str` false otherwise."
    args:
        name: "source"
        info: "Source string."
        type: "series string"

        name: "str"
        info: "The substring to search for."
        type: "series string"
    syntax: "str.startswith(source str) → const bool"
            "str.startswith(source str) → simple bool"
            "str.startswith(source str) → series bool"

"str.endswith"
    kind: "Built-in function"
    desc: "Returns true if the `source` string ends with the substring specified in `str` false otherwise."
    returns: "True if the `source` string ends with the substring specified in `str` false otherwise."
    args:
        name: "source"
        info: "Source string."
        type: "series string"

        name: "str"
        info: "The substring to search for."
        type: "series string"
    syntax: "str.endswith(source str) → const bool"
            "str.endswith(source str) → simple bool"
            "str.endswith(source str) → series bool"

"str.match"
    kind: "Built-in function"
    desc: "Returns the new substring of the `source` string if it matches a `regex` regular expression 'na' otherwise."
    returns: "The new substring of the `source` string if it matches a `regex` regular expression 'na' otherwise."
    args:
        name: "source"
        info: "Source string."
        type: "series string"

        name: "regex"
        info: "The regular expression to which this string is to be matched."
        type: "series string"
    remarks: "Function returns first occurrence of the regular expression in the `source` string."
    'The backslash "\\" symbol in the`regex` string needs to be escaped with additional backslash e.g. "\\\\d" stands for regular expression "\\d".'
    syntax: "str.match(source regex) → simple string"
            "str.match(source regex) → series string"

"str.pos"
    kind: "Built-in function"
    desc: "Returns the position of the first occurrence of the `str` string in the `source` string 'na' otherwise."
    returns: "Position of the `str` string in the `source` string."
    args:
        name: "source"
        info: "Source string."
        type: "series string"

        name: "str"
        info: "The substring to search for."
        type: "series string"
    remarks: "Strings indexing starts at 0."
    syntax: "str.pos(source str) → const int"
            "str.pos(source str) → simple int"
            "str.pos(source str) → series int"

"str.split"
    kind: "Built-in function"
    desc: "Divides a string into an array of substrings and returns its array id."
    returns: "The id of an array of strings."
    args:
        name: "string"
        info: "Source string."
        type: "series string"

        name: "separator"
        info: "The string separating each substring."
        type: "series string"
    syntax: "str.split(string separator) → string"

"str.length"
    kind: "Built-in function"
    desc: "Returns an integer corresponding to the amount of chars in that string."
    returns: "The number of chars in source string."
    args:
        name: "string"
        info: "Source string."
        type: "series string"
    syntax: "str.length(string) → const int"
            "str.length(string) → simple int"
            "str.length(string) → series int"

"ta.percentile_nearest_rank"
    kind: "Built-in function"
    desc: "Ccalculates percentile using method of Nearest Rank."
    returns: "P-th percentile of `source` series for `length` bars back."
    args:
        name: "source"
        info: "Series of values to process (source)."
        type: "series int/float"

        name: "length"
        info: "Number of bars back (length)."
        type: "series int"

        name: "percentage"
        info: "Percentage a number from range 0..100."
        type: "simple int/float"
    remarks: "Using the Nearest Rank method on lengths less than 100 bars back can result in the same number being used for more than one percentile."
            "A percentile calculated using the Nearest Rank method will always be a member of the input data set."
            "The 100th percentile is defined to be the largest value in the input data set."
    syntax: "ta.percentile_nearest_rank(source length percentage) → series float"

"ta.percentile_linear_interpolation"
    kind: "Built-in function"
    desc: "Ccalculates percentile using method of linear interpolation between the two nearest ranks."
    returns: "P-th percentile of `source` series for `length` bars back."
    args:
        name: "source"
        info: "Series of values to process (source)."
        type: "series int/float"

        name: "length"
        info: "Number of bars back (length)."
        type: "series int"

        name: "percentage"
        info: "Percentage a number from range 0..100."
        type: "simple int/float"
    remarks: "Note that a percentile calculated using this method will NOT always be a member of the input data set."
    syntax: "ta.percentile_linear_interpolation(source length percentage) → series float"

"ta.crossover"
    kind: "Built-in function"
    returns: "true if `source1` crossed over `source2` otherwise false."
    desc: "The `source1`-series is defined as having crossed over `source2`-series if on the current bar the value of `source1` is greater than the value of `source2` and on the previous bar the value of `source1` was less than or equal to the value of `source2`."
    args:
        name: "source1"
        info: "First data series."
        type: "series int/float"

        name: "source2"
        info: "Second data series."
        type: "series int/float"
    syntax: "ta.crossover(source1 source2) → series bool"

"ta.crossunder"
    kind: "Built-in function"
    returns: "true if `source1` crossed under `source2` otherwise false."
    desc: "The `source1`-series is defined as having crossed under `source2`-series if on the current bar the value of `source1` is less than the value of `source2` and on the previous bar the value of `source1` was greater than or equal to the value of `source2`."
    args:
        name: "source1"
        info: "First data series."
        type: "series int/float"

        name: "source2"
        info: "Second data series."
        type: "series int/float"
    syntax: "ta.crossunder(source1 source2) → series bool"

"strategy"
    kind: "Built-in annotation function"
    desc: "This declaration statement designates the script as a strategy and sets a number of strategy-related properties."
    args:
        name: "title"
        info: "The title of the script. It is displayed on the chart when no `shorttitle` argument is used and becomes the publication's default title when publishing the script."
        type: "const string"

        name: "shorttitle"
        info: "The script's display name on charts. If specified it will replace the `title` argument in most chart-related windows. Optional. The default is the argument used for `title`."
        type: "const string"

        name: "overlay"
        info: "If @op true the strategy will be displayed over the chart. If @op false it will be added in a separate pane. Strategy-specific labels that display entries and exits will be displayed over the main chart regardless of this setting. Optional. The default is @op false."
        type: "const bool"

        name: "format"
        info: "Specifies the formatting of the script's displayed values. Possible values: @var format.inherit @var format.price @var format.volume. Optional. The default is @var format.inherit."
        type: "const string"

        name: "precision"
        info: "Specifies the number of digits after the floating point of the script's displayed values. Must be a non-negative integer no greater than 16. If `format` is set to @var format.inherit and `precision` is specified the format will instead be set to @var format.price. Optional. The default is inherited from the precision of the chart's symbol."
        type: "const int"

        name: "scale"
        info: "The price scale used. Possible values: @var scale.right @var scale.left @var scale.none. The @var scale.none value can only be applied in combination with `overlay = true`. Optional. By default the script uses the same scale as the chart."
        type: "scale_type"

        name: "pyramiding"
        info: 'The maximum number of entries allowed in the same direction. If the value is 0 only one entry order in the same direction can be opened and additional entry orders are rejected. This setting can also be changed in the strategy\'s "Settings/Properties" tab. Optional. The default is 0.'
        type: "const int"

        name: "calc_on_order_fills"
        info: 'Specifies whether the strategy should be recalculated after an order is filled. If @op true the strategy reccalculates after an order is filled as opposed to recalculating only when the bar closes. This setting can also be changed in the strategy\'s "Settings/Properties" tab. Optional. The default is @op false.'
        type: "const bool"

        name: "calc_on_every_tick"
        info: 'Specifies whether the strategy should be recalculated on each realtime tick. If @op true when the strategy is running on a realtime bar it will recalculate on each chart update. If @op false the strategy only ccalculates when the realtime bar closes. The argument used does not affect strategy calculation on historical data. This setting can also be changed in the strategy\'s "Settings/Properties" tab. Optional. The default is @op false.'
        type: "const bool"

        name: "max_bars_back"
        info: "The length of the historical buffer the script keeps for every variable and function which determines how many past values can be referenced using the `` history-referencing operator. The required buffer size is automatically detected by the Pine Script™ runtime. Using this parameter is only necessary when a runtime error occurs because automatic detection fails. More information on the underlying mechanics of the historical buffer can be found in our Help Center. Optional. The default is 0."
        type: "const int"

        name: "backtest_fill_limits_assumption"
        info: "Limit order execution threshold in ticks. When it is used limit orders are only filled if the market price exceeds the order's limit level by the specified number of ticks. Optional. The default is 0."
        type: "const int"

        name: "default_qty_type"
        info: 'Specifies the units used for `default_qty_value`. Possible values are: @var strategy.fixed for contracts/shares/lots @var strategy.cash for currency amounts or @var strategy.percent_of_equity for a percentage of available equity. This setting can also be changed in the strategy\'s "Settings/Properties" tab. Optional. The default is @var strategy.fixed.'
        type: "const string"

        name: "default_qty_value"
        info: 'The default quantity to trade in units determined by the argument used with the `default_qty_type` parameter. This setting can also be changed in the strategy\'s "Settings/Properties" tab. Optional. The default is 1.'
        type: "const int/float"

        name: "initial_capital"
        info: "The amount of funds initially available for the strategy to trade in units of `currency`. Optional. The default is 1000000."
        type: "const int/float"

        name: "currency"
        info: "Currency used by the strategy in currency-related calculations. Market positions are still opened by converting `currency` into the chart symbol's currency. The conversion rates used are based on the FX_IDC pairs' daily rates of the previous day (relative to the bar where the calculation is done). This setting can also be changed in the strategy's \"Settings/Properties\" tab. Optional. The default is @var currency.NONE in which case the chart's currency is used. Possible values: one of the constants in the `currency.*` namespace e.g. @var currency.USD."
        type: "const string"

        name: "slippage"
        info: 'Slippage expressed in ticks. This value is added to or subtracted from the fill price of market/stop orders to make the fill price less favorable for the strategy. E.g. if @var syminfo.mintick is 0.01 and `slippage` is set to 5 a long market order will enter at 5 * 0.01 = 0.05 points above the actual price. This setting can also be changed in the strategy\'s "Settings/Properties" tab. Optional. The default is 0.'
        type: "const int"

        name: "commission_type"
        info: 'Determines what the number passed to the `commission_value` expresses: @var strategy.commission.percent for a percentage of the cash volume of the order @var strategy.commission.cash_per_contract for currency per contract @var strategy.commission.cash_per_order for currency per order. This setting can also be changed in the strategy\'s "Settings/Properties" tab. Optional. The default is @var strategy.commission.percent.'
        type: "const string"

        name: "commission_value"
        info: "Commission applied to the strategy's orders in units determined by the argument passed to the `commission_type` parameter. This setting can also be changed in the strategy's \"Settings/Properties\" tab. Optional. The default is 0."
        type: "const int/float"

        name: "process_orders_on_close"
        info: "When set to @op true generates an additional attempt to execute orders after a bar closes and strategy calculations are completed. If the orders are market orders the broker emulator executes them before the next bar's open. If the orders are price-dependent they will only be filled if the price conditions are met. This option is useful if you wish to close positions on the current bar. The default is @op false."
        type: "const bool"

        name: "close_entries_rule"
        info: 'Determines the order in which trades are closed. Possible values are: "FIFO" (First-In First-Out) if the earliest exit order must close the earliest entry order or "ANY" if the orders are closed based on the `from_entry` parameter of the @fun strategy.exit function. "FIFO" can only be used with stocks futures and US forex (NFA Compliance Rule 2-43b) while "ANY" is allowed in non-US forex. Optional. The default is "FIFO".'
        type: "const string"

        name: "max_lines_count"
        info: "The number of last @op line drawings displayed. Possible values: 1-500. Optional. The default is 50."
        type: "const int"

        name: "max_labels_count"
        info: "The number of last @op label drawings displayed. Possible values: 1-500. Optional. The default is 50."
        type: "const int"

        name: "max_boxes_count"
        info: "The number of last @op box drawings displayed. Possible values: 1-500. Optional. The default is 50."
        type: "const int"

        name: "margin_long"
        info: 'Margin long is the percentage of the purchase price of a security that must be covered by cash or collateral for long positions. Must be a non-negative number. The logic used to simulate margin calls is explained in the Help Center. This setting can also be changed in the strategy\'s "Settings/Properties" tab. Optional. The default is 0 in which case the strategy does not enforce any limits on position size.'
        type: "const int/float"

        name: "margin_short"
        info: 'Margin short is the percentage of the purchase price of a security that must be covered by cash or collateral for short positions. Must be a non-negative number. The logic used to simulate margin calls is explained in the Help Center. This setting can also be changed in the strategy\'s "Settings/Properties" tab. Optional. The default is 0 in which case the strategy does not enforce any limits on position size.'
        type: "const int/float"

        name: "explicit_plot_zorder"
        info: "Specifies the order in which the script's plots fills and hlines are rendered. If @op true plots are drawn in the order in which they appear in the script's code each newer plot being drawn above the previous ones. This only applies to `plot*()` functions @fun fill and @fun hline. Optional. The default is @op false."
        type: "const bool"

        name: "risk_free_rate"
        info: "The risk-free rate of return is the annual percentage change in the value of an investment with minimal or zero risk. It is used to calculate the Sharpe and Sortino ratios. Optional. The default is 2."
        type: "const int/float"

        name: "use_bar_magnifier"
        info: "When true the Broker Emulator uses lower timeframe data during history backtesting to achieve more realistic results. Optional. The default is @op false. Only Premium accounts have access to this feature."
        type: "const bool"
    remarks: "You can learn more about strategies in our User Manual."
            "Every strategy script must have one @fun strategy call."
            "Strategies using `calc_on_every_tick = true` parameter may calculate differently on historical and realtime bars which causes repainting."
            "Strategies always use the chart's prices to enter and exit positions. Using them on non-standard chart types (Heikin Ashi Renko etc.) will produce misleading results as their prices are synthetic. Backtesting on non-standard charts is thus not recommended."
    syntax: "strategy(title shorttitle overlay format precision scale pyramiding calc_on_order_fills calc_on_every_tick max_bars_back backtest_fill_limits_assumption default_qty_type default_qty_value initial_capital currency slippage commission_type commission_value process_orders_on_close close_entries_rule margin_long margin_short explicit_plot_zorder max_lines_count max_labels_count max_boxes_count risk_free_rate use_bar_magnifier) → void"

"strategy.entry"
    kind: "Built-in function"
    desc: "It is a command to enter market position. If an order with the same ID is already pending it is possible to modify the order. If there is no order with the specified ID a new order is placed. To deactivate an entry order the command @fun strategy.cancel or @fun strategy.cancel_all should be used. In comparison to the function @fun strategy.order the function @fun strategy.entry is affected by pyramiding and it can reverse market position correctly. If both 'limit' and 'stop' parameters are 'NaN' the order type is market order."
    args:
        name: "id"
        info: "A required parameter. The order identifier. It is possible to cancel or modify an order by referencing its identifier."
        type: "series string"

        name: "direction"
        info: "A required parameter. Market position direction: 'strategy.long' is for long 'strategy.short' is for short."
        type: "strategy_direction"

        name: "qty"
        info: "An optional parameter. Number of contracts/shares/lots/units to trade. The default value is 'NaN'."
        type: "series int/float"

        name: "limit"
        info: "An optional parameter. Limit price of the order. If it is specified the order type is either 'limit' or 'stop-limit'. 'NaN' should be specified for any other order type."
        type: "series int/float"

        name: "stop"
        info: "An optional parameter. Stop price of the order. If it is specified the order type is either 'stop' or 'stop-limit'. 'NaN' should be specified for any other order type."
        type: "series int/float"

        name: "oca_name"
        info: "An optional parameter. Name of the OCA group the order belongs to. If the order should not belong to any particular OCA group there should be an empty string."
        type: "series string"

        name: "oca_type"
        info: "An optional parameter. Type of the OCA group. The allowed values are: @var strategy.oca.none - the order should not belong to any particular OCA group; @var strategy.oca.cancel - the order should belong to an OCA group where as soon as an order is filled all other orders of the same group are cancelled; @var strategy.oca.reduce - the order should belong to an OCA group where if X number of contracts of an order is filled number of contracts for each other order of the same OCA group is decreased by X."
        type: "input string"

        name: "comment"
        info: "An optional parameter. Additional notes on the order."
        type: "series string"

        name: "alert_message"
        info: 'An optional parameter which replaces the strategy.order.alert_message placeholder when it is used in the "Create Alert" dialog box\'s "Message" field.'
        type: "series string"
    syntax: "strategy.entry(id direction qty limit stop oca_name oca_type comment alert_message) → void"

"strategy.order"
    kind: "Built-in function"
    desc: "It is a command to place order. If an order with the same ID is already pending it is possible to modify the order. If there is no order with the specified ID a new order is placed. To deactivate order the command @fun strategy.cancel or @fun strategy.cancel_all should be used. In comparison to the function @fun strategy.entry the function @fun strategy.order is not affected by pyramiding. If both 'limit' and 'stop' parameters are 'NaN' the order type is market order."
    args:
        name: "id"
        info: "A required parameter. The order identifier. It is possible to cancel or modify an order by referencing its identifier."
        type: "series string"

        name: "direction"
        info: "A required parameter. Order direction: 'strategy.long' is for buy 'strategy.short' is for sell."
        type: "strategy_direction"

        name: "qty"
        info: "An optional parameter. Number of contracts/shares/lots/units to trade. The default value is 'NaN'."
        type: "series int/float"

        name: "limit"
        info: "An optional parameter. Limit price of the order. If it is specified the order type is either 'limit' or 'stop-limit'. 'NaN' should be specified for any other order type."
        type: "series int/float"

        name: "stop"
        info: "An optional parameter. Stop price of the order. If it is specified the order type is either 'stop' or 'stop-limit'. 'NaN' should be specified for any other order type."
        type: "series int/float"

        name: "oca_name"
        info: "An optional parameter. Name of the OCA group the order belongs to. If the order should not belong to any particular OCA group there should be an empty string."
        type: "series string"

        name: "oca_type"
        info: "An optional parameter. Type of the OCA group. The allowed values are: @var strategy.oca.none - the order should not belong to any particular OCA group; @var strategy.oca.cancel - the order should belong to an OCA group where as soon as an order is filled all other orders of the same group are cancelled; @var strategy.oca.reduce - the order should belong to an OCA group where if X number of contracts of an order is filled number of contracts for each other order of the same OCA group is decreased by X."
        type: "input string"

        name: "comment"
        info: "An optional parameter. Additional notes on the order."
        type: "series string"

        name: "alert_message"
        info: 'An optional parameter which replaces the strategy.order.alert_message placeholder when it is used in the "Create Alert" dialog box\'s "Message" field.'
        type: "series string"
    syntax: "strategy.order(id direction qty limit stop oca_name oca_type comment alert_message) → void"

"strategy.exit"
    kind: "Built-in function"
    desc: "It is a command to exit either a specific entry or whole market position. If an order with the same ID is already pending it is possible to modify the order. If an entry order was not filled but an exit order is generated the exit order will wait till entry order is filled and then the exit order is placed. To deactivate an exit order the command @fun strategy.cancel or @fun strategy.cancel_all should be used. If the function @fun strategy.exit is called once it exits a position only once. If you want to exit multiple times the command @fun strategy.exit should be called multiple times. If you use a stop loss and a trailing stop their order type is 'stop' so only one of them is placed (the one that is supposed to be filled first). If all the following parameters 'profit' 'limit' 'loss' 'stop' 'trail_points' 'trail_offset' are 'NaN' the command will fail. To use market order to exit the command @fun strategy.close or @fun strategy.close_all should be used."
    args:
        name: "id"
        info: "A required parameter. The order identifier. It is possible to cancel or modify an order by referencing its identifier."
        type: "series string"

        name: "from_entry"
        info: "An optional parameter. The identifier of a specific entry order to exit from it. To exit all entries an empty string should be used. The default values is empty string."
        type: "series string"

        name: "qty"
        info: "An optional parameter. Number of contracts/shares/lots/units to exit a trade with. The default value is 'NaN'."
        type: "series int/float"

        name: "qty_percent"
        info: "Defines the percentage of (0-100) the position to close. Its priority is lower than that of the 'qty' parameter. Optional. The default is 100."
        type: "series int/float"

        name: "profit"
        info: "An optional parameter. Profit target (specified in ticks). If it is specified a limit order is placed to exit market position when the specified amount of profit (in ticks) is reached. The default value is 'NaN'."
        type: "series int/float"

        name: "limit"
        info: "An optional parameter. Profit target (requires a specific price). If it is specified a limit order is placed to exit market position at the specified price (or better). Priority of the parameter 'limit' is higher than priority of the parameter 'profit' ('limit' is used instead of 'profit' if its value is not 'NaN'). The default value is 'NaN'."
        type: "series int/float"

        name: "loss"
        info: "An optional parameter. Stop loss (specified in ticks). If it is specified a stop order is placed to exit market position when the specified amount of loss (in ticks) is reached. The default value is 'NaN'."
        type: "series int/float"

        name: "stop"
        info: "An optional parameter. Stop loss (requires a specific price). If it is specified a stop order is placed to exit market position at the specified price (or worse). Priority of the parameter 'stop' is higher than priority of the parameter 'loss' ('stop' is used instead of 'loss' if its value is not 'NaN'). The default value is 'NaN'."
        type: "series int/float"

        name: "trail_price"
        info: "An optional parameter. Trailing stop activation level (requires a specific price). If it is specified a trailing stop order will be placed when the specified price level is reached. The offset (in ticks) to determine initial price of the trailing stop order is specified in the 'trail_offset' parameter: X ticks lower than activation level to exit long position; X ticks higher than activation level to exit short position. The default value is 'NaN'."
        type: "series int/float"

        name: "trail_points"
        info: "An optional parameter. Trailing stop activation level (profit specified in ticks). If it is specified a trailing stop order will be placed when the calculated price level (specified amount of profit) is reached. The offset (in ticks) to determine initial price of the trailing stop order is specified in the 'trail_offset' parameter: X ticks lower than activation level to exit long position; X ticks higher than activation level to exit short position. The default value is 'NaN'."
        type: "series int/float"

        name: "trail_offset"
        info: "An optional parameter. Trailing stop price (specified in ticks). The offset in ticks to determine initial price of the trailing stop order: X ticks lower than 'trail_price' or 'trail_points' to exit long position; X ticks higher than 'trail_price' or 'trail_points' to exit short position. The default value is 'NaN'."
        type: "series int/float"

        name: "oca_name"
        info: "An optional parameter. Name of the OCA group (oca_type = @var strategy.oca.reduce) the profit target the stop loss / the trailing stop orders belong to. If the name is not specified it will be generated automatically."
        type: "series string"

        name: "comment"
        info: "Additional notes on the order. If specified displays near the order marker on the chart. Optional. The default is @var na."
        type: "series string"

        name: "comment_profit"
        info: "Additional notes on the order if the exit was triggered by crossing `profit` or `limit` specifically. If specified supercedes the `comment` parameter and displays near the order marker on the chart. Optional. The default is @var na."
        type: "series string"

        name: "comment_loss"
        info: "Additional notes on the order if the exit was triggered by crossing `stop` or `loss` specifically. If specified supercedes the `comment` parameter and displays near the order marker on the chart. Optional. The default is @var na."
        type: "series string"

        name: "comment_trailing"
        info: "Additional notes on the order if the exit was triggered by crossing `trail_offset` specifically. If specified supercedes the `comment` parameter and displays near the order marker on the chart. Optional. The default is @var na."
        type: "series string"

        name: "alert_message"
        info: 'Text that will replace the \'strategy.order.alert_message\' placeholder when one is used in the "Message" field of the "Create Alert" dialog. Optional. The default is @var na.'
        type: "series string"

        name: "alert_profit"
        info: 'Text that will replace the \'strategy.order.alert_message\' placeholder when one is used in the "Message" field of the "Create Alert" dialog. Only replaces the text if the exit was triggered by crossing `profit` or `limit` specifically. Optional. The default is @var na.'
        type: "series string"

        name: "alert_loss"
        info: 'Text that will replace the \'strategy.order.alert_message\' placeholder when one is used in the "Message" field of the "Create Alert" dialog. Only replaces the text if the exit was triggered by crossing `stop` or `loss` specifically. Optional. The default is @var na.'
        type: "series string"

        name: "alert_trailing"
        info: 'Text that will replace the \'strategy.order.alert_message\' placeholder when one is used in the "Message" field of the "Create Alert" dialog. Only replaces the text if the exit was triggered by crossing `trail_offset` specifically. Optional. The default is @var na.'
        type: "series string"
    syntax: "strategy.exit(id from_entry qty qty_percent profit limit loss stop trail_price trail_points trail_offset oca_name comment comment_profit comment_loss comment_trailing alert_message alert_profit alert_loss alert_trailing) → void"

"strategy.cancel"
    kind: "Built-in function"
    desc: "It is a command to cancel/deactivate pending orders by referencing their names which were generated by the functions: @fun strategy.order @fun strategy.entry and @fun strategy.exit."
    args:
        name: "id"
        info: "A required parameter. The order identifier. It is possible to cancel an order by referencing its identifier."
        type: "series string"
    syntax: "strategy.cancel(id) → void"

"strategy.cancel_all"
    kind: "Built-in function"
    desc: "It is a command to cancel/deactivate all pending orders which were generated by the functions: @fun strategy.order @fun strategy.entry and @fun strategy.exit."
    syntax: "strategy.cancel_all() → void"

"ta.pivothigh"
    kind: "Built-in function"
    desc: "This function returns price of the pivot high point. It returns 'NaN' if there was no pivot high point."
    returns: "Price of the point or 'NaN'."
    args:
        name: "source"
        info: "An optional parameter. Data series to calculate the value. 'High' by default."
        type: "series int/float"

        name: "leftbars"
        info: "Left strength."
        type: "series int/float"

        name: "rightbars"
        info: "Right strength."
        type: "series int/float"
    remarks: "If parameters 'leftbars' or 'rightbars' are series you should use @fun max_bars_back function for the 'source' variable."
    syntax: "ta.pivothigh(source leftbars rightbars) → series float"
            "ta.pivothigh(leftbars rightbars) → series float"

"ta.pivotlow"
    kind: "Built-in function"
    desc: "This function returns price of the pivot low point. It returns 'NaN' if there was no pivot low point."
    returns: "Price of the point or 'NaN'."
    args:
        name: "source"
        info: "An optional parameter. Data series to calculate the value. 'Low' by default."
        type: "series int/float"

        name: "leftbars"
        info: "Left strength."
        type: "series int/float"

        name: "rightbars"
        info: "Right strength."
        type: "series int/float"
    remarks: "If parameters 'leftbars' or 'rightbars' are series you should use @fun max_bars_back function for the 'source' variable."
    syntax: "ta.pivotlow(source leftbars rightbars) → series float"
            "ta.pivotlow(leftbars rightbars) → series float"

"strategy.close_all"
    kind: "Built-in function"
    desc: "Exits the current market position making it flat."
    args:
        name: "comment"
        info: "An optional parameter. Additional notes on the order."
        type: "series string"

        name: "alert_message"
        info: 'An optional parameter which replaces the strategy.order.alert_message placeholder when it is used in the "Create Alert" dialog box\'s "Message" field.'
        type: "series string"

        name: "immediately"
        info: "An optional parameter. If @op true the closing order will be executed on the tick where it has been placed ignoring the strategy parameters that restrict the order execution to the open of the next bar. The default is @op false."
        type: "series bool"
    syntax: "strategy.close_all(comment alert_message immediately) → void"

"strategy.close"
    kind: "Built-in function"
    desc: "It is a command to exit from the entry with the specified ID. If there were multiple entry orders with the same ID all of them are exited at once. If there are no open entries with the specified ID by the moment the command is triggered the command will not come into effect. The command uses market order. Every entry is closed by a separate market order."
    args:
        name: "id"
        info: "A required parameter. The order identifier. It is possible to close an order by referencing its identifier."
        type: "series string"

        name: "qty"
        info: "An optional parameter. Number of contracts/shares/lots/units to exit a trade with. The default value is 'NaN'."
        type: "series int/float"

        name: "qty_percent"
        info: "Defines the percentage (0-100) of the position to close. Its priority is lower than that of the 'qty' parameter. Optional. The default is 100."
        type: "series int/float"

        name: "comment"
        info: "An optional parameter. Additional notes on the order."
        type: "series string"

        name: "alert_message"
        info: 'An optional parameter which replaces the strategy.order.alert_message placeholder when it is used in the "Create Alert" dialog box\'s "Message" field.'
        type: "series string"

        name: "immediately"
        info: "An optional parameter. If @op true the closing order will be executed on the tick where it has been placed ignoring the strategy parameters that restrict the order execution to the open of the next bar. The default is @op false."
        type: "series bool"
    syntax: "strategy.close(id comment qty qty_percent alert_message immediately) → void"

"strategy.risk.max_position_size"
    kind: "Built-in function"
    desc: "The purpose of this rule is to determine maximum size of a market position. The rule affects the following function: @fun strategy.entry. The 'entry' quantity can be reduced (if needed) to such number of contracts/shares/lots/units so the total position size doesn't exceed the value specified in 'strategy.risk.max_position_size'. If minimum possible quantity still violates the rule the order will not be placed."
    args:
        name: "contracts"
        info: "A required parameter. Maximum number of contracts/shares/lots/units in a position."
        type: "simple int/float"
    syntax: "strategy.risk.max_position_size(contracts) → void"

"strategy.risk.max_intraday_loss"
    kind: "Built-in function"
    desc: "The maximum loss value allowed during a day. It is specified either in money (base currency) or in percentage of maximum intraday equity (0 -100)."
    args:
        name: "value"
        info: "A required parameter. The maximum loss value. It is specified either in money (base currency) or in percentage of maximum intraday equity. For % of equity the range of allowed values is from 0 to 100."
        type: "simple int/float"

        name: "type"
        info: "A required parameter. The type of the value. Please specify one of the following values: @var strategy.percent_of_equity or @var strategy.cash. Note: if equity drops down to zero or to a negative and the @var strategy.percent_of_equity is specified all pending orders are cancelled all open positions are closed and no new orders can be placed for good."
        type: "simple string"

        name: "alert_message"
        info: 'An optional parameter which replaces the strategy.order.alert_message placeholder when it is used in the "Create Alert" dialog box\'s "Message" field.'
        type: "simple string"
    syntax: "strategy.risk.max_intraday_loss(value type alert_message) → void"

"strategy.risk.max_intraday_filled_orders"
    kind: "Built-in function"
    desc: "The purpose of this rule is to determine maximum number of filled orders per 1 day (per 1 bar if chart resolution is higher than 1 day). The rule affects the whole strategy. Once the maximum number of filled orders is reached all pending orders are cancelled all open positions are closed and no new orders can be placed till the end of the current trading session."
    args:
        name: "count"
        info: "A required parameter. The maximum number of filled orders per 1 day."
        type: "simple int"

        name: "alert_message"
        info: 'An optional parameter which replaces the strategy.order.alert_message placeholder when it is used in the "Create Alert" dialog box\'s "Message" field.'
        type: "simple string"
    syntax: "strategy.risk.max_intraday_filled_orders(count alert_message) → void"

"strategy.risk.allow_entry_in"
    kind: "Built-in function"
    desc: "This function can be used to specify in which market direction the @fun strategy.entry function is allowed to open positions."
    args:
        name: "value"
        info: "The allowed direction. Possible values: @var strategy.direction.all @var strategy.direction.long @var strategy.direction.short"
        type: "simple string"
    syntax: "strategy.risk.allow_entry_in(value) → void"

"strategy.risk.max_cons_loss_days"
    kind: "Built-in function"
    desc: "The purpose of this rule is to cancel all pending orders close all open positions and stop placing orders after a specified number of consecutive days with losses. The rule affects the whole strategy."
    args:
        name: "count"
        info: "A required parameter. The allowed number of consecutive days with losses."
        type: "simple int"

        name: "alert_message"
        info: 'An optional parameter which replaces the strategy.order.alert_message placeholder when it is used in the "Create Alert" dialog box\'s "Message" field.'
        type: "simple string"
    syntax: "strategy.risk.max_cons_loss_days(count alert_message) → void"

"strategy.risk.max_drawdown"
    kind: "Built-in function"
    desc: "The purpose of this rule is to determine maximum drawdown. The rule affects the whole strategy. Once the maximum drawdown value is reached all pending orders are cancelled all open positions are closed and no new orders can be placed."
    args:
        name: "value"
        info: "A required parameter. The maximum drawdown value. It is specified either in money (base currency) or in percentage of maximum equity. For % of equity the range of allowed values is from 0 to 100."
        type: "simple int/float"

        name: "type"
        info: "A required parameter. The type of the value. Please specify one of the following values: @var strategy.percent_of_equity or @var strategy.cash. Note: if equity drops down to zero or to a negative and the 'strategy.percent_of_equity' is specified all pending orders are cancelled all open positions are closed and no new orders can be placed for good."
        type: "simple string"

        name: "alert_message"
        info: 'An optional parameter which replaces the strategy.order.alert_message placeholder when it is used in the "Create Alert" dialog box\'s "Message" field.'
        type: "simple string"
    syntax: "strategy.risk.max_drawdown(value type alert_message) → void"

"box.copy"
    kind: "Built-in function"
    desc: "Clones the box object."
    args:
        name: "id"
        info: "Box object."
        type: "series box"
    syntax: "box.copy(id)→ series box "

"box.new"
    kind: "Built-in function"
    desc: "Creates a new box object."
    returns: "The ID of a box object which may be used in box.set_*() and box.get_*() functions."
    args:
        name: "left"
        info: "Bar index (if xloc = @var xloc.bar_index) or UNIX time (if xloc = @var xloc.bar_time) of the left border of the box. Note that objects positioned using @var xloc.bar_index cannot be drawn further than 500 bars into the future."
        type: "series int"

        name: "top"
        info: "Price of the top border of the box."
        type: "series int/float"

        name: "right"
        info: "Bar index (if xloc = @var xloc.bar_index) or UNIX time (if xloc = @var xloc.bar_time) of the right border of the box. Note that objects positioned using @var xloc.bar_index cannot be drawn further than 500 bars into the future."
        type: "series int"

        name: "bottom"
        info: "Price of the bottom border of the box."
        type: "series int/float"

        name: "border_color"
        info: "Color of the four borders. Optional. The default is @var color.blue."
        type: "series color"

        name: "border_width"
        info: "Width of the four borders in pixels. Optional. The default is 1 pixel."
        type: "series int"

        name: "border_style"
        info: "Style of the four borders. Possible values: @var line.style_solid @var line.style_dotted @var line.style_dashed. Optional. The default value is @var line.style_solid."
        type: "series string"

        name: "extend"
        info: "When @var extend.none is used the horizontal borders start at the left border and end at the right border. With @var extend.left or @var extend.right the horizontal borders are extended indefinitely to the left or right of the box respectively. With @var extend.both the horizontal borders are extended on both sides. Optional. The default value is @var extend.none."
        type: "series string"

        name: "xloc"
        info: "Determines whether the arguments to 'left' and 'right' are a bar index or a time value. If xloc = @var xloc.bar_index the arguments must be a bar index. If xloc = @var xloc.bar_time the arguments must be a UNIX time. Possible values: @var xloc.bar_index and @var xloc.bar_time. Optional. The default is @var xloc.bar_index."
        type: "series string"

        name: "bgcolor"
        info: "Background color of the box. Optional. The default is @var color.blue."
        type: "series color"

        name: "text"
        info: "The text to be displayed inside the box. Optional. The default is empty string."
        type: "series string"

        name: "text_size"
        info: "The size of the text. An optional parameter the default value is @var size.auto. Possible values: @var size.auto @var size.tiny @var size.small @var size.normal @var size.large @var size.huge."
        type: "series string"

        name: "text_color"
        info: "The color of the text. Optional. The default is @var color.black."
        type: "series color"

        name: "text_halign"
        info: "The horizontal alignment of the box's text. Optional. The default value is @var text.align_center. Possible values: @var text.align_left @var text.align_center @var text.align_right."
        type: "series string"

        name: "text_valign"
        info: "The vertical alignment of the box's text. Optional. The default value is @var text.align_center. Possible values: @var text.align_top @var text.align_center @var text.align_bottom."
        type: "series string"

        name: "text_wrap"
        info: "Defines whether the text is presented in a single line extending past the width of the box if necessary or wrapped so every line is no wider than the box itself (and clipped by the bottom border of the box if the height of the resulting wrapped text is higher than the height of the box). Optional. The default value is @var text.wrap_none. Possible values: @var text.wrap_none @var text.wrap_auto."
        type: "series string"
    syntax: "box.new(left top right bottom border_color border_width border_style extend xloc bgcolor text text_size text_color text_halign text_valign text_wrap) → series box"

"box.delete"
    kind: "Built-in function"
    desc: "Deletes the specified box object. If it has already been deleted does nothing."
    args:
        name: "id"
        info: "A box object to delete."
        type: "series box"
    syntax: "box.delete(id) → void"

"box.get_left"
    kind: "Built-in function"
    desc: "Returns the bar index or the UNIX time (depending on the last value used for 'xloc') of the left border of the box."
    returns: "A bar index or a UNIX timestamp (in milliseconds)."
    args:
        name: "id"
        info: "A box object."
        type: "series box"
    syntax: "box.get_left(id) → series int"

"box.get_right"
    kind: "Built-in function"
    desc: "Returns the bar index or the UNIX time (depending on the last value used for 'xloc') of the right border of the box."
    returns: "A bar index or a UNIX timestamp (in milliseconds)."
    args:
        name: "id"
        info: "A box object."
        type: "series box"
    syntax: "box.get_right(id) → series int"

"box.get_top"
    kind: "Built-in function"
    desc: "Returns the price value of the top border of the box."
    returns: "The price value."
    args:
        name: "id"
        info: "A box object."
        type: "series box"
    syntax: "box.get_top(id) → series float"

"box.get_bottom"
    kind: "Built-in function"
    desc: "Returns the price value of the bottom border of the box."
    returns: "The price value."
    args:
        name: "id"
        info: "A box object."
        type: "series box"
    syntax: "box.get_bottom(id) → series float"

"box.set_left"
    kind: "Built-in function"
    desc: "Sets the left coordinate of the box."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "left"
        info: "Bar index or bar time of the left border. Note that objects positioned using @var xloc.bar_index cannot be drawn further than 500 bars into the future."
        type: "series int"
    syntax: "box.set_left(id left) → void"

"box.set_lefttop"
    kind: "Built-in function"
    desc: "Sets the left and top coordinates of the box."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "left"
        info: "Bar index or bar time of the left border."
        type: "series int"

        name: "top"
        info: "Price value of the top border."
        type: "series int/float"
    syntax: "box.set_lefttop(id left top) → void"

"box.set_right"
    kind: "Built-in function"
    desc: "Sets the right coordinate of the box."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "right"
        info: "Bar index or bar time of the right border. Note that objects positioned using @var xloc.bar_index cannot be drawn further than 500 bars into the future."
        type: "series int"
    syntax: "box.set_right(id right) → void"

"box.set_rightbottom"
    kind: "Built-in function"
    desc: "Sets the right and bottom coordinates of the box."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "right"
        info: "Bar index or bar time of the right border."
        type: "series int"

        name: "bottom"
        info: "Price value of the bottom border."
        type: "series int/float"
    syntax: "box.set_rightbottom(id right bottom) → void"

"box.set_top"
    kind: "Built-in function"
    desc: "Sets the top coordinate of the box."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "top"
        info: "Price value of the top border."
        type: "series int/float"
    syntax: "box.set_top(id top) → void"

"box.set_bottom"
    kind: "Built-in function"
    desc: "Sets the bottom coordinate of the box."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "bottom"
        info: "Price value of the bottom border."
        type: "series int/float"
    syntax: "box.set_bottom(id bottom) → void"

"box.set_border_color"
    kind: "Built-in function"
    desc: "Sets the border color of the box."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "color"
        info: "New border color."
        type: "series color"
    syntax: "box.set_border_color(id color) → void"

"box.set_bgcolor"
    kind: "Built-in function"
    desc: "Sets the background color of the box."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "color"
        info: "New background color."
        type: "series color"
    syntax: "box.set_bgcolor(id color) → void"

"box.set_border_width"
    kind: "Built-in function"
    desc: "Sets the border width of the box."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "width"
        info: "Width of the four borders in pixels."
        type: "series int"
    syntax: "box.set_border_width(id width) → void"

"box.set_border_style"
    kind: "Built-in function"
    desc: "Sets the border style of the box."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "style"
        info: "New border style."
        type: "series string"
    syntax: "box.set_border_style(id style) → void"

"box.set_extend"
    kind: "Built-in function"
    desc: "Sets extending type of the border of this box object. When @var extend.none is used the horizontal borders start at the left border and end at the right border. With @var extend.left or @var extend.right the horizontal borders are extended indefinitely to the left or right of the box respectively. With @var extend.both the horizontal borders are extended on both sides."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "extend"
        info: "New extending type."
        type: "series string"
    syntax: "box.set_extend(id extend) → void"

"box.set_text_halign"
    kind: "Built-in function"
    desc: "The function sets the horizontal alignment of the box's text."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "text_halign"
        info: "The horizontal alignment of a box's text. Possible values: @var text.align_left @var text.align_center @var text.align_right."
        type: "series string"
    syntax: "box.set_text_halign(id text_halign) → void"

"box.set_text_valign"
    kind: "Built-in function"
    desc: "The function sets the vertical alignment of a box's text."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "text_valign"
        info: "The vertical alignment of the box's text. Possible values: @var text.align_top @var text.align_center @var text.align_bottom."
        type: "series string"
    syntax: "box.set_text_valign(id text_valign) → void"

"box.set_text_size"
    kind: "Built-in function"
    desc: "The function sets the size of the box's text."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "text_size"
        info: "The size of the text. Possible values: @var size.auto @var size.tiny @var size.small @var size.normal @var size.large @var size.huge."
        type: "series string"
    syntax: "box.set_text_size(id text_size) → void"

"box.set_text"
    kind: "Built-in function"
    desc: "The function sets the text in the box."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "text"
        info: "The text to be displayed inside the box."
        type: "series string"
    syntax: "box.set_text(id text) → void"

"box.set_text_color"
    kind: "Built-in function"
    desc: "The function sets the color of the text inside the box."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "text_color"
        info: "The color of the text."
        type: "series color"
    syntax: "box.set_text_color(id text_color) → void"

"box.set_text_wrap"
    kind: "Built-in function"
    desc: "The function sets the mode of wrapping of the text inside the box."
    args:
        name: "id"
        info: "A box object."
        type: "series box"

        name: "text_wrap"
        info: "The mode of the wrapping. Possible values: @var text.wrap_auto @var text.wrap_none."
        type: "series string"
    syntax: "box.set_text_wrap(id text_wrap) → void"

"line.copy"
    desc: "Clones the line object."
    returns: "New line ID object which may be passed to line.setXXX and line.getXXX functions."
    args:
        name: "id"
        info: "Line object."
        type: "series line"
    syntax: "line.copy(id)→ series line "

"line.new"
    kind: "Built-in function"
    desc: "Creates new line object."
    returns: "Line ID object which may be passed to line.setXXX and line.getXXX functions."
    args:
        name: "x1"
        info: "Bar index (if xloc = @var xloc.bar_index) or bar UNIX time (if xloc = @var xloc.bar_time) of the first point of the line. Note that objects positioned using @var xloc.bar_index cannot be drawn further than 500 bars into the future."
        type: "series int"

        name: "y1"
        info: "Price of the first point of the line."
        type: "series int/float"

        name: "x2"
        info: "Bar index (if xloc = @var xloc.bar_index) or bar UNIX time (if xloc = @var xloc.bar_time) of the second point of the line. Note that objects positioned using @var xloc.bar_index cannot be drawn further than 500 bars into the future."
        type: "series int"

        name: "y2"
        info: "Price of the second point of the line."
        type: "series int/float"

        name: "xloc"
        info: "See description of b_onx1b_off argument. Possible values: @var xloc.bar_index and @var xloc.bar_time. Default is @var xloc.bar_index."
        type: "series string"

        name: "extend"
        info: "If extend=@var extend.none draws segment starting at point (x1 y1) and ending at point (x2 y2). If extend is equal to @var extend.right or @var extend.left draws a ray starting at point (x1 y1) or (x2 y2) respectively. If extend=@var extend.both draws a straight line that goes through these points. Default value is @var extend.none."
        type: "series string"

        name: "color"
        info: "Line color."
        type: "series color"

        name: "style"
        info: "Line style. Possible values: @var line.style_solid @var line.style_dotted @var line.style_dashed @var line.style_arrow_left @var line.style_arrow_right @var line.style_arrow_both."
        type: "series string"

        name: "width"
        info: "Line width in pixels."
        type: "series int"
    syntax: "line.new(x1 y1 x2 y2 xloc extend color style width) → series line"

"line.set_x1"
    kind: "Built-in function"
    desc: "Sets bar index or bar time (depending on the xloc) of the first point."
    args:
        name: "id"
        info: "Line object."
        type: "series line"

        name: "x"
        info: "Bar index or bar time. Note that objects positioned using @var xloc.bar_index cannot be drawn further than 500 bars into the future."
        type: "series int"
    syntax: "line.set_x1(id x) → void"

"line.set_y1"
    kind: "Built-in function"
    desc: "Sets price of the first point"
    args:
        name: "id"
        info: "Line object."
        type: "series line"

        name: "y"
        info: "Price."
        type: "series int/float"
    syntax: "line.set_y1(id y) → void"

"line.set_xy1"
    kind: "Built-in function"
    desc: "Sets bar index/time and price of the first point."
    args:
        name: "id"
        info: "Line object."
        type: "series line"

        name: "x"
        info: "Bar index or bar time. Note that objects positioned using @var xloc.bar_index cannot be drawn further than 500 bars into the future."
        type: "series int"

        name: "y"
        info: "Price."
        type: "series int/float"
    syntax: "line.set_xy1(id x y) → void"

"line.set_x2"
    kind: "Built-in function"
    desc: "Sets bar index or bar time (depending on the xloc) of the second point."
    args:
        name: "id"
        info: "Line object."
        type: "series line"

        name: "x"
        info: "Bar index or bar time. Note that objects positioned using @var xloc.bar_index cannot be drawn further than 500 bars into the future."
        type: "series int"
    syntax: "line.set_x2(id x) → void"

"line.set_y2"
    kind: "Built-in function"
    desc: "Sets price of the second point."
    args:
        name: "id"
        info: "Line object."
        type: "series line"

        name: "y"
        info: "Price."
        type: "series int/float"
    syntax: "line.set_y2(id y) → void"

"line.set_xy2"
    kind: "Built-in function"
    desc: "Sets bar index/time and price of the second point"
    args:
        name: "id"
        info: "Line object."
        type: "series line"

        name: "x"
        info: "Bar index or bar time."
        type: "series int"

        name: "y"
        info: "Price."
        type: "series int/float"
    syntax: "line.set_xy2(id x y) → void"

"line.set_xloc"
    kind: "Built-in function"
    desc: "Sets x-location and new bar index/time values."
    args:
        name: "id"
        info: "Line object."
        type: "series line"

        name: "x1"
        info: "Bar index or bar time of the first point."
        type: "series int"

        name: "x2"
        info: "Bar index or bar time of the second point."
        type: "series int"

        name: "xloc"
        info: "New x-location value."
        type: "series string"
    syntax: "line.set_xloc(id x1 x2 xloc) → void"

"line.set_extend"
    kind: "Built-in function"
    desc: "Sets extending type of this line object. If extend=@var extend.none draws segment starting at point (x1 y1) and ending at point (x2 y2). If extend is equal to @var extend.right or @var extend.left draws a ray starting at point (x1 y1) or (x2 y2) respectively. If extend=@var extend.both draws a straight line that goes through these points."
    args:
        name: "id"
        info: "Line object."
        type: "series line"

        name: "extend"
        info: "New extending type."
        type: "series string"
    syntax: "line.set_extend(id extend) → void"

"line.set_color"
    kind: "Built-in function"
    desc: "Sets the line color"
    args:
        name: "id"
        info: "Line object."
        type: "series line"

        name: "color"
        info: "New line color"
        type: "series color"
    syntax: "line.set_color(id color) → void"

"line.set_style"
    kind: "Built-in function"
    desc: "Sets the line style"
    args:
        name: "id"
        info: "Line object."
        type: "series line"

        name: "style"
        info: "New line style."
        type: "series string"
    syntax: "line.set_style(id style) → void"

"line.set_width"
    kind: "Built-in function"
    desc: "Sets the line width."
    args:
        name: "id"
        info: "Line object."
        type: "series line"

        name: "width"
        info: "New line width in pixels."
        type: "series int"
    syntax: "line.set_width(id width) → void"

"line.delete"
    kind: "Built-in function"
    desc: "Deletes the specified line object. If it has already been deleted does nothing."
    args:
        name: "id"
        info: "Line object to delete."
        type: "series line"
    syntax: "line.delete(id) → void"

"line.get_x1"
    kind: "Built-in function"
    desc: "Returns UNIX time or bar index (depending on the last xloc value set) of the first point of the line."
    returns: "UNIX timestamp (in milliseconds) or bar index."
    args:
        name: "id"
        info: "Line object."
        type: "series line"
    syntax: "line.get_x1(id)→ series int "

"line.get_y1"
    kind: "Built-in function"
    desc: "Returns price of the first point of the line."
    returns: "Price value."
    args:
        name: "id"
        info: "Line object."
        type: "series line"
    syntax: "line.get_y1(id) → series float"

"line.get_x2"
    kind: "Built-in function"
    desc: "Returns UNIX time or bar index (depending on the last xloc value set) of the second point of the line."
    returns: "UNIX timestamp (in milliseconds) or bar index."
    args:
        name: "id"
        info: "Line object."
        type: "series line"
    syntax: "line.get_x2(id) → series int"

"line.get_y2"
    kind: "Built-in function"
    desc: "Returns price of the second point of the line."
    returns: "Price value."
    args:
        name: "id"
        info: "Line object."
        type: "series line"
    syntax: "line.get_y2(id) → series float"

"line.get_price"
    kind: "Built-in function"
    desc: "Returns the price level of a line at a given bar index."
    returns: "Price value of line 'id' at bar index 'x'."
    args:
        name: "id"
        info: "Line object."
        type: "series line"

        name: "x"
        info: "Bar index for which price is required."
        type: "series int"
    remarks: "The line is considered to have been created using 'extend=extend.both'."
            "This function can only be called for lines created using 'xloc.bar_index'. If you try to call it for a line created with 'xloc.bar_time' it will generate an error."
    syntax: "line.get_price(id x)→ series float "

"label.copy"
    kind: "Built-in function"
    desc: "Clones the label object."
    returns: "New label ID object which may be passed to label.setXXX and label.getXXX functions."
    args:
        name: "id"
        info: "Label object."
        type: "series label"
    syntax: "label.copy(id)→ series label "

"linefill.new"
    kind: "Built-in function"
    desc: "Creates a new linefill object and displays it on the chart filling the space between `line1` and `line2` with the color specified in `color`."
    returns: "The ID of a linefill object that can be passed to other linefill.*() functions."
    args:
        name: "line1"
        info: "First line object."
        type: "series line"

        name: "line2"
        info: "Second line object."
        type: "series line"

        name: "color"
        info: "The color used to fill the space between the lines."
        type: "series color"
    remarks: "If any line of the two is deleted the linefill object is also deleted. If the lines are moved (e.g. via @fun line.set_xy functions) the linefill object is also moved."
            "If both lines are extended in the same direction relative to the lines themselves (e.g. both have @var extend.right as the value of their `extend=` parameter) the space between line extensions will also be filled."
    syntax: "linefill.new(line1 line2 color) → series linefill"

"linefill.delete"
    kind: "Built-in function"
    desc: "Deletes the specified linefill object. If it has already been deleted does nothing."
    args:
        name: "id"
        info: "A linefill object."
        type: "series linefill"
    syntax: "linefill.delete(id) → void"

"linefill.set_color"
    kind: "Built-in function"
    desc: "The function sets the color of the linefill object passed to it."
    args:
        name: "id"
        info: "A linefill object."
        type: "series linefill"

        name: "color"
        info: "The color of the linefill object."
        type: "series color"
    syntax: "linefill.set_color(id color) → void"

"linefill.get_line1"
    kind: "Built-in function"
    desc: "Returns the ID of the first line used in the `id` linefill."
    args:
        name: "id"
        info: "A linefill object."
        type: "series linefill"
    syntax: "linefill.get_line1(id) → series line"

"linefill.get_line2"
    kind: "Built-in function"
    desc: "Returns the ID of the second line used in the `id` linefill."
    args:
        name: "id"
        info: "A linefill object."
        type: "series linefill"
    syntax: "linefill.get_line2(id) → series line"

"array.new_linefill"
    kind: "Built-in function"
    desc: "The function creates a new array object of linefill type elements."
    returns: "The ID of an array object which may be used in other array.*() functions."
    args:
        name: "size"
        info: "Initial size of an array."
        type: "series int"

        name: "initial_value"
        info: "Initial value of all array elements."
        type: "series linefill"
    remarks: "An array index starts from 0."
    syntax: "array.new_linefill(size initial_value) → linefill"

"label.new"
    kind: "Built-in function"
    desc: "Creates new label object."
    returns: "Label ID object which may be passed to label.setXXX and label.getXXX functions."
    args:
        name: "x"
        info: "Bar index (if xloc = @var xloc.bar_index) or bar UNIX time (if xloc = @var xloc.bar_time) of the label position. Note that objects positioned using @var xloc.bar_index cannot be drawn further than 500 bars into the future."
        type: "series int"

        name: "y"
        info: "Price of the label position. It is taken into account only if yloc=@var yloc.price."
        type: "series int/float"

        name: "text"
        info: "Label text. Default is empty string."
        type: "series string"

        name: "xloc"
        info: "See description of b_onxb_off argument. Possible values: @var xloc.bar_index and @var xloc.bar_time. Default is @var xloc.bar_index."
        type: "series string"

        name: "yloc"
        info: "Possible values are @var yloc.price @var yloc.abovebar @var yloc.belowbar. If yloc=@var yloc.price b_onyb_off argument specifies the price of the label position. If yloc=@var yloc.abovebar label is located above bar. If yloc=@var yloc.belowbar label is located below bar. Default is @var yloc.price."
        type: "series string"

        name: "color"
        info: "Color of the label border and arrow"
        type: "series color"

        name: "style"
        info: "Label style. Possible values: @var label.style_none @var label.style_xcross @var label.style_cross @var label.style_triangleup @var label.style_triangledown @var label.style_flag @var label.style_circle @var label.style_arrowup @var label.style_arrowdown @var label.style_label_up @var label.style_label_down @var label.style_label_left @var label.style_label_right @var label.style_label_lower_left @var label.style_label_lower_right @var label.style_label_upper_left @var label.style_label_upper_right @var label.style_label_center @var label.style_square @var label.style_diamond. Default is @var label.style_label_down."
        type: "series string"

        name: "textcolor"
        info: "Text color."
        type: "series color"

        name: "size"
        info: "Label size. Possible values: @var size.auto @var size.tiny @var size.small @var size.normal @var size.large @var size.huge. Default value is @var size.normal."
        type: "series string"

        name: "textalign"
        info: "Label text alignment. Possible values: @var text.align_left @var text.align_center @var text.align_right. Default value is @var text.align_center."
        type: "series string"

        name: "tooltip"
        info: "Hover to see tooltip label."
        type: "series string"
    syntax: "label.new(x y text xloc yloc color style textcolor size textalign tooltip) → series label"

"label.set_x"
    kind: "Built-in function"
    desc: "Sets bar index or bar time (depending on the xloc) of the label position."
    args:
        name: "id"
        info: "Label object."
        type: "series label"

        name: "x"
        info: "New bar index or bar time of the label position. Note that objects positioned using @var xloc.bar_index cannot be drawn further than 500 bars into the future."
        type: "series int"
    syntax: "label.set_x(id x) → void"

"label.set_y"
    kind: "Built-in function"
    desc: "Sets price of the label position"
    args:
        name: "id"
        info: "Label object."
        type: "series label"

        name: "y"
        info: "New price of the label position."
        type: "series int/float"
    syntax: "label.set_y(id y) → void"

"label.set_xy"
    kind: "Built-in function"
    desc: "Sets bar index/time and price of the label position."
    args:
        name: "id"
        info: "Label object."
        type: "series label"

        name: "x"
        info: "New bar index or bar time of the label position. Note that objects positioned using @var xloc.bar_index cannot be drawn further than 500 bars into the future."
        type: "series int"

        name: "y"
        info: "New price of the label position."
        type: "series int/float"
    syntax: "label.set_xy(id x y) → void"

"label.set_xloc"
    kind: "Built-in function"
    desc: "Sets x-location and new bar index/time value."
    args:
        name: "id"
        info: "Label object."
        type: "series label"

        name: "x"
        info: "New bar index or bar time of the label position."
        type: "series int"

        name: "xloc"
        info: "New x-location value."
        type: "series string"
    syntax: "label.set_xloc(id x xloc) → void"

"label.set_yloc"
    kind: "Built-in function"
    desc: "Sets new y-location calculation algorithm."
    args:
        name: "id"
        info: "Label object."
        type: "series label"

        name: "yloc"
        info: "New y-location value."
        type: "series string"
    syntax: "label.set_yloc(id yloc) → void"

"label.set_text"
    kind: "Built-in function"
    desc: "Sets label text"
    args:
        name: "id"
        info: "Label object."
        type: "series label"

        name: "text"
        info: "New label text."
        type: "series string"
    syntax: "label.set_text(id text) → void"

"label.set_color"
    kind: "Built-in function"
    desc: "Sets label border and arrow color."
    args:
        name: "id"
        info: "Label object."
        type: "series label"

        name: "color"
        info: "New label border and arrow color."
        type: "series color"
    syntax: "label.set_color(id color) → void"

"label.set_style"
    kind: "Built-in function"
    desc: "Sets label style."
    args:
        name: "id"
        info: "Label object."
        type: "series label"

        name: "style"
        info: "New label style. Possible values: @var label.style_none @var label.style_xcross @var label.style_cross @var label.style_triangleup @var label.style_triangledown @var label.style_flag @var label.style_circle @var label.style_arrowup @var label.style_arrowdown @var label.style_label_up @var label.style_label_down @var label.style_label_left @var label.style_label_right @var label.style_label_lower_left @var label.style_label_lower_right @var label.style_label_upper_left @var label.style_label_upper_right @var label.style_label_center @var label.style_square @var label.style_diamond."
        type: "series string"
    syntax: "label.set_style(id style) → void"

"label.set_textcolor"
    kind: "Built-in function"
    desc: "Sets color of the label text."
    args:
        name: "id"
        info: "Label object."
        type: "series label"

        name: "textcolor"
        info: "New text color."
        type: "series color"
    syntax: "label.set_textcolor(id textcolor) → void"

"label.set_size"
    kind: "Built-in function"
    desc: "Sets arrow and text size of the specified label object."
    args:
        name: "id"
        info: "Label object."
        type: "series label"

        name: "size"
        info: "Possible values: @var size.auto @var size.tiny @var size.small @var size.normal @var size.large @var size.huge. Default value is @var size.auto."
        type: "series string"
    syntax: "label.set_size(id size) → void"

"label.set_textalign"
    kind: "Built-in function"
    desc: "Sets the alignment for the label text."
    args:
        name: "id"
        info: "Label object."
        type: "series label"

        name: "textalign"
        info: "Label text alignment. Possible values: @var text.align_left @var text.align_center @var text.align_right."
        type: "series string"
    syntax: "label.set_textalign(id textalign) → void"

"label.set_tooltip"
    kind: "Built-in function"
    desc: "Sets the tooltip text."
    args:
        name: "id"
        info: "Label object."
        type: "series label"

        name: "tooltip"
        info: "Tooltip text."
        type: "series string"
    syntax: "label.set_tooltip(id tooltip) → void"

"label.delete"
    kind: "Built-in function"
    desc: "Deletes the specified label object. If it has already been deleted does nothing."
    args:
        name: "id"
        info: "Label object to delete."
        type: "series label"
    syntax: "label.delete(id) → void"

"label.get_x"
    kind: "Built-in function"
    desc: "Returns UNIX time or bar index (depending on the last xloc value set) of this label's position."
    returns: "UNIX timestamp (in milliseconds) or bar index."
    args:
        name: "id"
        info: "Label object."
        type: "series label"
    syntax: "label.get_x(id)→ series int"

"label.get_y"
    kind: "Built-in function"
    desc: "Returns price of this label's position."
    returns: "Floating point value representing price."
    args:
        name: "id"
        info: "Label object."
        type: "series label"
    syntax: "label.get_y(id) → series float"

"label.get_text"
    kind: "Built-in function"
    desc: "Returns the text of this label object."
    returns: "String object containing the text of this label."
    args:
        name: "id"
        info: "Label object."
        type: "series label"
    syntax: "label.get_text(id)→ series string "

"max_bars_back"
    kind: "Built-in function"
    desc: "Function sets the maximum number of bars that is available for historical reference of a given built-in or user variable. When operator '' is applied to a variable - it is a reference to a historical value of that variable."
            "If an argument of an operator '' is a compile time constant value (e.g. 'v10' 'close500') then there is no need to use 'max_bars_back' function for that variable. Pine Script™ compiler will use that constant value as history buffer size."
            "If an argument of an operator '' is a value calculated at runtime (e.g. 'vi' where 'i' - is a series variable) then Pine Script™ attempts to autodetect the history buffer size at runtime. Sometimes it fails and the script crashes at runtime because it eventually refers to historical values that are out of the buffer. In that case you should use 'max_bars_back' to fix that problem manually."
    returns: "void"
    args:
        name: "var"
        info: "Series variable identifier for which history buffer should be resized. Possible values are: 'open' 'high' 'low' 'close' 'volume' 'time' or any user defined variable id."
        type: "series int/float/bool/color/label/line"

        name: "num"
        info: "History buffer size which is the number of bars that could be referenced for variable 'var'."
        type: "const int"
    remarks: "At the moment 'max_bars_back' cannot be applied to built-ins like 'hl2' 'hlc3' 'ohlc4'. Please use multiple 'max_bars_back' calls as workaround here (e.g. instead of a single ‘max_bars_back(hl2 100)’ call you should call the function twice: ‘max_bars_back(high 100) max_bars_back(low 100)’)."
            "If the @fun indicator or @fun strategy 'max_bars_back' parameter is used all variables in the indicator are affected. This may result in excessive memory usage and cause runtime problems. When possible (i.e. when the cause is a variable rather than a function) please use the @fun max_bars_back function instead."
    syntax: "max_bars_back(var num) → void"

"array.new<type>"
    kind: "Built-in function"
    desc: "The function creates a new array object of <type> elements."
    returns: "The ID of an array object which may be used in other array.*() functions."
    args:
        name: "size"
        info: "Initial size of an array. Optional. The default is 0."
        type: "series int"

        name: "initial_value"
        type: "series <type>"
        info: "Initial value of all array elements. Optional. The default is 'na'."
    remarks: "An array index starts from 0."
            "If you want to initialize an array and specify all its elements at the same time then use the function array.from."
    syntax: "array.new<int>(size initial_value) → int"
            "array.new<float>(size initial_value) → float"
            "array.new<bool>(size initial_value) → bool"
            "array.new<string>(size initial_value) → string"
            "array.new<color>(size initial_value) → color"
            "array.new<line>(size initial_value) → line"
            "array.new<label>(size initial_value) → label"
            "array.new<box>(size initial_value) → box"
            "array.new<table>(size initial_value) → table"
            "array.new<linefill>(size initial_value) → linefill"

"array.new_float"
    kind: "Built-in function"
    desc: "The function creates a new array object of float type elements."
    returns: "The ID of an array object which may be used in other array.*() functions."
    args:
        name: "size"
        info: "Initial size of an array. Optional. The default is 0."
        type: "series int"

        name: "initial_value"
        info: "Initial value of all array elements. Optional. The default is 'na'."
        type: "series int/float"
    remarks: "An array index starts from 0."
    syntax: "array.new_float(size initial_value) → float"

"array.new_int"
    kind: "Built-in function"
    desc: "The function creates a new array object of int type elements."
    returns: "The ID of an array object which may be used in other array.*() functions."
    args:
        name: "size"
        info: "Initial size of an array. Optional. The default is 0."
        type: "series int"

        name: "initial_value"
        info: "Initial value of all array elements. Optional. The default is 'na'."
        type: "series int"
    remarks: "An array index starts from 0."
    syntax: "array.new_int(size initial_value) → int"

"array.new_color"
    kind: "Built-in function"
    desc: "The function creates a new array object of color type elements."
    returns: "The ID of an array object which may be used in other array.*() functions."
    args:
        name: "size"
        info: "Initial size of an array. Optional. The default is 0."
        type: "series int"

        name: "initial_value"
        info: "Initial value of all array elements. Optional. The default is 'na'."
        type: "series color"
    remarks: "An array index starts from 0."
    syntax: "array.new_color(size initial_value) → color"

"array.new_bool"
    kind: "Built-in function"
    desc: "The function creates a new array object of bool type elements."
    returns: "The ID of an array object which may be used in other array.*() functions."
    args:
        name: "size"
        info: "Initial size of an array. Optional. The default is 0."
        type: "series int"

        name: "initial_value"
        info: "Initial value of all array elements. Optional. The default is 'na'."
        type: "series bool"
    remarks: "An array index starts from 0."
    syntax: "array.new_bool(size initial_value) → bool"

"array.new_string"
    kind: "Built-in function"
    desc: "The function creates a new array object of string type elements."
    returns: "The ID of an array object which may be used in other array.*() functions."
    args:
        name: "size"
        info: "Initial size of an array. Optional. The default is 0."
        type: "series int"

        name: "initial_value"
        info: "Initial value of all array elements. Optional. The default is 'na'."
        type: "series string"
    remarks: "An array index starts from 0."
    syntax: "array.new_string(size initial_value) → string"

"array.new_line"
    kind: "Built-in function"
    desc: "The function creates a new array object of line type elements."
    returns: "The ID of an array object which may be used in other array.*() functions."
    args:
        name: "size"
        info: "Initial size of an array. Optional. The default is 0."
        type: "series int"

        name: "initial_value"
        info: "Initial value of all array elements. Optional. The default is 'na'."
        type: "series line"
    remarks: "An array index starts from 0."
    syntax: "array.new_line(size initial_value) → line"

"array.new_box"
    kind: "Built-in function"
    desc: "The function creates a new array object of box type elements."
    returns: "The ID of an array object which may be used in other array.*() functions."
    args:
        name: "size"
        info: "Initial size of an array. Optional. The default is 0."
        type: "series int"

        name: "initial_value"
        info: "Initial value of all array elements. Optional. The default is 'na'."
        type: "series box"
    remarks: "An array index starts from 0."
    syntax: "array.new_box(size initial_value) → box"

"array.new_table"
    kind: "Built-in function"
    desc: "The function creates a new array object of table type elements."
    returns: "The ID of an array object which may be used in other array.*() functions."
    args:
        name: "size"
        info: "Initial size of an array. Optional. The default is 0."
        type: "series int"

        name: "initial_value"
        info: "Initial value of all array elements. Optional. The default is 'na'."
        type: "series table"
    remarks: "An array index starts from 0."
    syntax: "array.new_table(size initial_value) → table"

"array.new_label"
    kind: "Built-in function"
    desc: "The function creates a new array object of label type elements."
    returns: "The ID of an array object which may be used in other array.*() functions."
    args:
        name: "size"
        info: "Initial size of an array. Optional. The default is 0."
        type: "series int"

        name: "initial_value"
        info: "Initial value of all array elements. Optional. The default is 'na'."
        type: "series label"
    remarks: "An array index starts from 0."
    syntax: "array.new_label(size initial_value) → label"

"array.copy"
    kind: "Built-in function"
    desc: "The function creates a copy of an existing array."
    returns: "A copy of an array."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"
    syntax: "array.copy(id) → array"

"array.slice"
    kind: "Built-in function"
    desc: "The function creates a slice from an existing array. If an object from the slice changes the changes are applied to both the new and the original arrays."
    returns: "A shallow copy of an array's slice."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"

        name: "index_from"
        info: "Zero-based index at which to begin extraction."
        type: "series int"

        name: "index_to"
        info: "Zero-based index before which to end extraction. The function extracts up to but not including the element with this index."
        type: "series int"
    syntax: "array.slice(id index_from index_to) → array"

"array.size"
    kind: "Built-in function"
    desc: "The function returns the number of elements in an array."
    returns: "The number of elements in the array."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"
    syntax: "array.size(id) → series int"

"array.get"
    kind: "Built-in function"
    desc: "The function returns the value of the element at the specified index."
    returns: "The array element's value."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"

        name: "index"
        info: "The index of the element whose value is to be returned."
        type: "series int"

    syntax: "array.get(id index) → series <type of the array's elements>"

"array.min"
    kind: "Built-in function"
    desc: "The function returns the smallest value or the nth smallest value in a given array."
    returns: "The smallest or the nth smallest value in the array."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"

        name: "nth"
        info: "The nth smallest value to return where zero is the smallest. Optional. The default is zero."
        type: "series int"
    syntax: "array.min(id) → series float"
            "array.min(id) → series int"
            "array.min(id nth) → series float"
            "array.min(id nth) → series int"

"array.max"
    kind: "Built-in function"
    desc: "The function returns the greatest value or the nth greatest value in a given array."
    returns: "The greatest or the nth greatest value in the array."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"

        name: "nth"
        info: "The nth greatest value to return where zero is the greatest. Optional. The default is zero."
        type: "series int"
    syntax: "array.max(id) → series float"
            "array.max(id) → series int"
            "array.max(id nth) → series float"
            "array.max(id nth) → series int"

"array.range"
    kind: "Built-in function"
    desc: "The function returns the difference between the min and max values from a given array."
    returns: "The difference between the min and max values in the array."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"
    syntax: "array.range(id) → series float"
            "array.range(id) → series int"

"array.sum"
    kind: "Built-in function"
    desc: "The function returns the sum of an array's elements."
    returns: "The sum of the array's elements."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"
    syntax: "array.sum(id) → series float"
            "array.sum(id) → series int"

"array.set"
    kind: "Built-in function"
    desc: "The function sets the value of the element at the specified index."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"

        name: "index"
        info: "The index of the element to be modified."
        type: "series int"

        name: "value"
        info: "The new value to be set."
        type: "series <type of the array's elements>"
    syntax: "array.set(id index value) → void"

"array.from"
    kind: "Built-in function"
    desc: "The function takes a variable number of arguments with one of the types: int float bool string label line color box table linefill and returns an array of the corresponding type."
    args:
        name: "arg0 arg1 ..."
        info: "Array arguments."
        type: "series int/float/bool/color/string/label/line/box/table/linefill"
    returns: "The array element's value."
    syntax: "array.from(arg0 arg1 ...) → type"
            "array.from(arg0 arg1 ...) → int"
            "array.from(arg0 arg1 ...) → float"
            "array.from(arg0 arg1 ...) → bool"
            "array.from(arg0 arg1 ...) → string"
            "array.from(arg0 arg1 ...) → label"
            "array.from(arg0 arg1 ...) → line"
            "array.from(arg0 arg1 ...) → color"
            "array.from(arg0 arg1 ...) → box"
            "array.from(arg0 arg1 ...) → table"
            "array.from(arg0 arg1 ...) → linefill"

"array.fill"
    kind: "Built-in function"
    desc: "The function sets elements of an array to a single value. If no index is specified all elements are set. If only a start index (default 0) is supplied the elements starting at that index are set. If both index parameters are used the elements from the starting index up to but not including the end index (default na) are set."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"

        name: "value"
        info: "Value to fill the array with."
        type: "series <type of the array's elements>"

        name: "index_from"
        info: "Start index default is 0."
        type: "series int"

        name: "index_to"
        info: "End index default is na. Must be one greater than the index of the last element to set."
        type: "series int"
    syntax: "array.fill(id value index_from index_to) → void"

"array.insert"
    kind: "Built-in function"
    desc: "The function changes the contents of an array by adding new elements in place."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"

        name: "index"
        info: "The index at which to insert the value."
        type: "series int"

        name: "value"
        info: "The value to add to the array."
        type: "series <type of the array's elements>"
    syntax: "array.insert(id index value) → void"

"array.join"
    kind: "Built-in function"
    desc: "The function creates and returns a new string by concatenating all the elements of an array separated by the specified separator string."
    args:
        name: "id"
        info: "An array object."
        type: "int/float/string"

        name: "separator"
        info: "The string used to separate each array element."
        type: "series string"
    syntax: "array.join(id separator) → series string"

"array.push"
    kind: "Built-in function"
    desc: "The function appends a value to an array."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"

        name: "value"
        info: "The value of the element added to the end of the array."
        type: "series <type of the array's elements>"
    syntax: "array.push(id value) → void"

"array.remove"
    kind: "Built-in function"
    desc: "The function changes the contents of an array by removing the element with the specified index."
    returns: "The value of the removed element."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"

        name: "index"
        info: "The index of the element to remove."
        type: "series int"
    syntax: "array.remove(id index) → series <type of the array's elements>"

"array.pop"
    kind: "Built-in function"
    desc: "The function removes the last element from an array and returns its value."
    returns: "The value of the removed element."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"
    syntax: "array.pop(id) → series <type of the array's elements>"

"array.clear"
    kind: "Built-in function"
    desc: "The function removes all elements from an array."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"
    syntax: "array.clear(id) → void"

"array.sort"
    kind: "Built-in function"
    desc: "The function sorts the elements of an array."
    args:
        name: "id"
        info: "An array object."
        type: "int/float/string"

        name: "order"
        info: "The sort order: order.ascending (default) or order.descending."
        type: "sort_order"
    syntax: "array.sort(id order) → void"

"array.sort_indices"
    kind: "Built-in function"
    desc: "Returns an array of indices which when used to index the original array will access its elements in their sorted order. It does not modify the original array."
    args:
        name: "id"
        info: "An array object."
        type: "int/float/string"

        name: "order"
        info: "The sort order: order.ascending or order.descending. Optional. The default is order.ascending."
        type: "sort_order"
    syntax: "array.sort_indices(id order) → int"

"array.percentrank"
    kind: "Built-in function"
    desc: "Returns the percentile rank of a value in the array."
    remarks: "Percentile rank is the percentage of how many elements in the array are less than or equal to the reference value."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"

        name: "index"
        info: "The value for which to calculate its percentile rank."
        type: "series int"
    syntax: "array.percentrank(id index) → series float"
            "array.percentrank(id index) → series int"

"array.percentile_nearest_rank"
    kind: "Built-in function"
    desc: "Returns the value for which the specified percentage of array values (percentile) are less than or equal to it using the nearest-rank method."
    remarks: "In statistics the percentile is the percent of ranking items that appear at or below a certain score. This measurement shows the percentage of scores within a standard frequency distribution that is lower than the percentile rank you're measuring."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"

        name: "percentage"
        info: "The percentage of values that must be equal or less than the returned value."
        type: "series int/float"
    syntax: "array.percentile_nearest_rank(id percentage) → series float"
            "array.percentile_nearest_rank(id percentage) → series int"

"array.percentile_linear_interpolation"
    kind: "Built-in function"
    desc: "Returns the value for which the specified percentage of array values (percentile) are less than or equal to it using linear interpolation."
    remarks: "In statistics the percentile is the percent of ranking items that appear at or below a certain score. This measurement shows the percentage of scores within a standard frequency distribution that is lower than the percentile rank you're measuring. Linear interpolation estimates the value between two ranks."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"

        name: "percentage"
        info: "The percentage of values that must be equal or less than the returned value."
        type: "series int/float"
    syntax: "array.percentile_linear_interpolation(id percentage) → series float"
            "array.percentile_linear_interpolation(id percentage) → series int"

"array.abs"
    kind: "Built-in function"
    desc: "Returns an array containing the absolute value of each element in the original array."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"
    syntax: "array.abs(id) → float"
            "array.abs(id) → int"

"array.binary_search"
    kind: "Built-in function"
    desc: "The function returns the index of the value or -1 if the value is not found. The array to search must be sorted in ascending order."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"

        name: "val"
        info: "The value to search for in the array."
        type: "series int/float"
    remarks: "A binary search works on arrays pre-sorted in ascending order. It begins by comparing an element in the middle of the array with the target value. If the element matches the target value its position in the array is returned. If the element's value is greater than the target value the search continues in the lower half of the array. If the element's value is less than the target value the search continues in the upper half of the array. By doing this recursively the algorithm progressively eliminates smaller and smaller portions of the array in which the target value cannot lie."
    syntax: "array.binary_search(id val) → series int"

"array.binary_search_leftmost"
    kind: "Built-in function"
    desc: "The function returns the index of the value if it is found. When the value is not found the function returns the index of the next smallest element to the left of where the value would lie if it was in the array. The array to search must be sorted in ascending order."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"

        name: "val"
        info: "The value to search for in the array."
        type: "series int/float"
    remarks: "A binary search works on arrays pre-sorted in ascending order. It begins by comparing an element in the middle of the array with the target value. If the element matches the target value its position in the array is returned. If the element's value is greater than the target value the search continues in the lower half of the array. If the element's value is less than the target value the search continues in the upper half of the array. By doing this recursively the algorithm progressively eliminates smaller and smaller portions of the array in which the target value cannot lie."
    syntax: "array.binary_search_leftmost(id val) → series int"

"array.binary_search_rightmost"
    kind: "Built-in function"
    desc: "The function returns the index of the value if it is found. When the value is not found the function returns the index of the element to the right of where the value would lie if it was in the array. The array must be sorted in ascending order."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"

        name: "val"
        info: "The value to search for in the array."
        type: "series int/float"
    remarks: "A binary search works on sorted arrays in ascending order. It begins by comparing an element in the middle of the array with the target value. If the element matches the target value its position in the array is returned. If the element's value is greater than the target value the search continues in the lower half of the array. If the element's value is less than the target value the search continues in the upper half of the array. By doing this recursively the algorithm progressively eliminates smaller and smaller portions of the array in which the target value cannot lie."
    syntax: "array.binary_search_rightmost(id val) → series int"

"array.concat"
    kind: "Built-in function"
    desc: "The function is used to merge two arrays. It pushes all elements from the second array to the first array and returns the first array."
    returns: "The first array with merged elements from the second array."
    args:
        name: "id1"
        info: "The first array object."
        type: "any array type"

        name: "id2"
        info: "The second array object."
        type: "any array type"
    syntax: "array.concat(id1 id2) → id1"

"array.avg"
    kind: "Built-in function"
    desc: "The function returns the mean of an array's elements."
    returns: "Mean of array's elements."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"
    syntax: "array.avg(id) → series float"
            "array.avg(id) → series int"

"array.stdev"
    kind: "Built-in function"
    desc: "The function returns the standard deviation of an array's elements."
    returns: "The standard deviation of the array's elements."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"

        name: "biased"
        info: "Determines which estimate should be used. Optional. The default is true."
        type: "series bool"
    remarks: "If `biased` is true function will calculate using a biased estimate of the entire population if false - unbiased estimate of a sample."
    syntax: "array.stdev(id biased) → series float"
            "array.stdev(id biased) → series int"

"array.variance"
    kind: "Built-in function"
    desc: "The function returns the variance of an array's elements."
    returns: "The variance of the array's elements."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"

        name: "biased"
        info: "Determines which estimate should be used. Optional. The default is true."
        type: "series bool"
    remarks: "If `biased` is true function will calculate using a biased estimate of the entire population if false - unbiased estimate of a sample."
    syntax: "array.variance(id biased) → series float"
            "array.variance(id biased) → series int"

"array.covariance"
    kind: "Built-in function"
    desc: "The function returns the covariance of two arrays."
    returns: "The covariance of two arrays."
    args:
        name: "id1"
        info: "An array object."
        type: "int/float"

        name: "id2"
        info: "An array object."
        type: "int/float"

        name: "biased"
        info: "Determines which estimate should be used. Optional. The default is true."
        type: "series bool"
    remarks: "If `biased` is true function will calculate using a biased estimate of the entire population if false - unbiased estimate of a sample."
    syntax: "array.covariance(id1 id2 biased) → series float"

"array.mode"
    kind: "Built-in function"
    desc: "The function returns the mode of an array's elements. If there are several values with the same frequency it returns the smallest value."
    returns: "The mode of the array's elements."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"
    syntax: "array.mode(id) → series float"
            "array.mode(id) → series int"

"array.median"
    kind: "Built-in function"
    desc: "The function returns the median of an array's elements."
    returns: "The median of the array's elements."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"
    syntax: "array.median(id) → series float"
            "array.median(id) → series int"

"array.standardize"
    kind: "Built-in function"
    desc: "The function returns the array of standardized elements."
    returns: "The array of standardized elements."
    args:
        name: "id"
        info: "An array object."
        type: "int/float"
    syntax: "array.standardize(id) → float"
            "array.standardize(id) → int"

"array.indexof"
    kind: "Built-in function"
    desc: "The function returns the index of the first occurrence of the value or -1 if the value is not found."
    returns: "The index of an element."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"

        name: "value"
        info: "The value to search in the array."
        type: "series <type of the array's elements>"
    syntax: "array.indexof(id value) → series int"

"array.lastindexof"
    kind: "Built-in function"
    desc: "The function returns the index of the last occurrence of the value or -1 if the value is not found."
    returns: "The index of an element."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"

        name: "value"
        info: "The value to search in the array."
        type: "series <type of the array's elements>"
    syntax: "array.lastindexof(id value) → series int"

"array.includes"
    kind: "Built-in function"
    desc: "The function returns true if the value was found in an array false otherwise."
    returns: "True if the value was found in the array false otherwise."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"

        name: "value"
        info: "The value to search in the array."
        type: "series <type of the array's elements>"
    syntax: "array.includes(id value) → series bool"

"array.shift"
    kind: "Built-in function"
    desc: "The function removes an array's first element and returns its value."
    returns: "The value of the removed element."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"
    syntax: "array.shift(id) → series <type of the array's elements>"

"array.unshift"
    kind: "Built-in function"
    desc: "The function inserts the value at the beginning of the array."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"

        name: "value"
        info: "The value to add to the start of the array."
        type: "series <type of the array's elements>"
    syntax: "array.unshift(id value) → void"

"array.reverse"
    kind: "Built-in function"
    desc: "The function reverses an array. The first array element becomes the last and the last array element becomes the first."
    args:
        name: "id"
        info: "An array object."
        type: "any array type"
    syntax: "array.reverse(id) → void"

"alert"
    kind: "Built-in function"
    desc: 'Creates an alert event when called during the real-time bar which will trigger a script alert based on "alert function events" if one was previously created for the indicator or strategy through the "Create Alert" dialog box.'
    args:
        name: "message"
        info: "Message sent when the alert triggers. Required argument."
        type: "series string"

        name: "freq"
        info: "The triggering frequency. Possible values are: @var alert.freq_all (all function calls trigger the alert) @var alert.freq_once_per_bar (the first function call during the bar triggers the alert) @var alert.freq_once_per_bar_close (the function call triggers the alert only when it occurs during the last script iteration of the real-time bar when it closes). The default is @var alert.freq_once_per_bar."
        type: "input string"
    remarks: "The Help Center explains how to create such alerts."
            "Contrary to @fun alertcondition @fun alert calls do NOT count as an additional plot."
            "Function calls can be located in both global and local scopes."
            "Function calls do not display anything on the chart."
            "The 'freq' argument only affects the triggering frequency of the function call where it is used."
    syntax: "alert(message freq) → void"

"request.earnings"
    kind: "Built-in function"
    desc: "Requests earnings data for the specified symbol."
    args:
        name: "ticker"
        info: 'Symbol. Note that the symbol should be passed with a prefix. For example: "NASDAQ:AAPL" instead of "AAPL". Using @var syminfo.ticker will cause an error. Use @var syminfo.tickerid instead.'
        type: "simple string"

        name: "field"
        info: "Input string. Possible values include: @var earnings.actual @var earnings.estimate @var earnings.standardized. Default value is @var earnings.actual."
        type: "simple string"

        name: "gaps"
        info: "Merge strategy for the requested data (requested data automatically merges with the main series OHLC data). Possible values: @var barmerge.gaps_on @var barmerge.gaps_off. @var barmerge.gaps_on - requested data is merged with possible gaps (@var na values). @var barmerge.gaps_off - requested data is merged continuously without gaps all the gaps are filled with the previous nearest existing values. Default value is @var barmerge.gaps_off."
        type: "barmerge_gaps"

        name: "lookahead"
        info: "Merge strategy for the requested data position. Possible values: @var barmerge.lookahead_on @var barmerge.lookahead_off. Default value is @var barmerge.lookahead_off starting from version 3. Note that behavour is the same on real-time and differs only on history."
        type: "barmerge_lookahead"

        name: "ignore_invalid_symbol"
        info: "An optional parameter. Determines the behavior of the function if the specified symbol is not found: if false the script will halt and return a runtime error; if true the function will return na and execution will continue. The default value is false."
        type: "input bool"

        name: "currency"
        info: "Currency into which the symbol's currency-related earnings values (e.g. @var earnings.actual) are to be converted. The conversion rates used are based on the FX_IDC pairs' daily rates of the previous day (relative to the bar where the calculation is done). Optional. The default is @var syminfo.currency. Possible values: a three-letter string with the currency code in the ISO 4217 format (e.g. \"USD\") or one of the constants in the currency.* namespace e.g. @var currency.USD."
        type: "simple string"
    returns: "Requested series or n/a if there is no earnings data for the specified symbol."
    syntax: "request.earnings(ticker field gaps lookahead ignore_invalid_symbol currency) → series float"

"request.dividends"
    kind: "Built-in function"
    desc: "Requests dividends data for the specified symbol."
    args:
        name: "ticker"
        info: 'Symbol. Note that the symbol should be passed with a prefix. For example: "NASDAQ:AAPL" instead of "AAPL". Using @var syminfo.ticker will cause an error. Use @var syminfo.tickerid instead.'
        type: "simple string"

        name: "field"
        info: "Input string. Possible values include: @var dividends.net @var dividends.gross. Default value is @var dividends.gross."
        type: "simple string"

        name: "gaps"
        info: "Merge strategy for the requested data (requested data automatically merges with the main series OHLC data). Possible values: @var barmerge.gaps_on @var barmerge.gaps_off. @var barmerge.gaps_on - requested data is merged with possible gaps (@var na values). @var barmerge.gaps_off - requested data is merged continuously without gaps all the gaps are filled with the previous nearest existing values. Default value is @var barmerge.gaps_off."
        type: "barmerge_gaps"

        name: "lookahead"
        info: "Merge strategy for the requested data position. Possible values: @var barmerge.lookahead_on @var barmerge.lookahead_off. Default value is @var barmerge.lookahead_off starting from version 3. Note that behavour is the same on real-time and differs only on history."
        type: "barmerge_lookahead"

        name: "ignore_invalid_symbol"
        info: "An optional parameter. Determines the behavior of the function if the specified symbol is not found: if false the script will halt and return a runtime error; if true the function will return na and execution will continue. The default value is false."
        type: "input bool"

        name: "currency"
        info: "Currency into which the symbol's currency-related dividends values (e.g. @var dividends.gross) are to be converted. The conversion rates used are based on the FX_IDC pairs' daily rates of the previous day (relative to the bar where the calculation is done). Optional. The default is @var syminfo.currency. Possible values: a three-letter string with the currency code in the ISO 4217 format (e.g. \"USD\") or one of the constants in the currency.* namespace e.g. @var currency.USD."
        type: "simple string"
    returns: "Requested series or n/a if there is no dividends data for the specified symbol."
    syntax: "request.dividends(ticker field gaps lookahead ignore_invalid_symbol currency) → series float"

"request.splits"
    kind: "Built-in function"
    desc: "Requests splits data for the specified symbol."
    args:
        name: "ticker"
        info: 'Symbol. Note that the symbol should be passed with a prefix. For example: "NASDAQ:AAPL" instead of "AAPL". Using @var syminfo.ticker will cause an error. Use @var syminfo.tickerid instead.'
        type: "simple string"

        name: "field"
        info: "Input string. Possible values include: @var splits.denominator @var splits.numerator."
        type: "simple string"

        name: "gaps"
        info: "Merge strategy for the requested data (requested data automatically merges with the main series OHLC data). Possible values: @var barmerge.gaps_on @var barmerge.gaps_off. @var barmerge.gaps_on - requested data is merged with possible gaps (@var na values). @var barmerge.gaps_off - requested data is merged continuously without gaps all the gaps are filled with the previous nearest existing values. Default value is @var barmerge.gaps_off."
        type: "barmerge_gaps"

        name: "lookahead"
        info: "Merge strategy for the requested data position. Possible values: @var barmerge.lookahead_on @var barmerge.lookahead_off. Default value is @var barmerge.lookahead_off starting from version 3. Note that behavour is the same on real-time and differs only on history."
        type: "barmerge_lookahead"

        name: "ignore_invalid_symbol"
        info: "An optional parameter. Determines the behavior of the function if the specified symbol is not found: if false the script will halt and return a runtime error; if true the function will return na and execution will continue. The default value is false."
        type: "input bool"
    returns: "Requested series or n/a if there is no splits data for the specified symbol."
    syntax: "request.splits(ticker field gaps lookahead ignore_invalid_symbol) → series float"

"request.economic"
    kind: "Built-in function"
    desc: "Requests economic data for a symbol. Economic data includes information such as the state of a country's economy (GDP inflation rate etc.) or of a particular industry (steel production ICU beds etc.)."
    args:
        name: "country_code"
        info: 'The code of the country (e.g. "US") or the region (e.g. "EU") for which the economic data is requested. The Help Center article lists the countries and their codes. The countries for which information is available vary with metrics. The Help Center article for each metric lists the countries for which the metric is available.'
        type: "simple string"

        name: "field"
        info: 'The code of the requested economic metric (e.g. "GDP"). The Help Center article lists the metrics and their codes.'
        type: "simple string"

        name: "gaps"
        info: 'Specifies how the returned values are merged on chart bars. Possible values: @var barmerge.gaps_off @var barmerge.gaps_on. With @var barmerge.gaps_on a value only appears on the current chart bar when it first becomes available from the function\'s context otherwise @var na is returned (thus a "gap" occurs). With @var barmerge.gaps_off what would otherwise be gaps are filled with the latest known value returned avoiding @var na values. Optional. The default is @var barmerge.gaps_off.'
        type: "barmerge_gaps"

        name: "ignore_invalid_symbol"
        info: "Determines the behavior of the function if the specified symbol is not found: if @op false the script will halt and return a runtime error; if @op true the function will return @var na and execution will continue. Optional. The default is @op false."
        type: "input bool"
    returns: "Requested series."
    remarks: 'Economic data can also be accessed from charts just like a regular symbol. Use "ECONOMIC" as the exchange name and `country_codefield` as the ticker. The name of US GDP data is thus "ECONOMIC:USGDP".'
    syntax: "request.economic(country_code field gaps ignore_invalid_symbol) → series float"

"table.new"
    kind: "Built-in function"
    desc: "The function creates a new table."
    args:
        name: "position"
        info: "Position of the table. Possible values are: @var position.top_left @var position.top_center @var position.top_right @var position.middle_left @var position.middle_center @var position.middle_right @var position.bottom_left @var position.bottom_center @var position.bottom_right."
        type: "series string"

        name: "columns"
        info: "The number of columns in the table."
        type: "series int"

        name: "rows"
        info: "The number of rows in the table."
        type: "series int"

        name: "bgcolor"
        info: "The background color of the table. Optional. The default is no color."
        type: "series color"

        name: "frame_color"
        info: "The color of the outer frame of the table. Optional. The default is no color."
        type: "series color"

        name: "frame_width"
        info: "The width of the outer frame of the table. Optional. The default is 0."
        type: "series int"

        name: "border_color"
        info: "The color of the borders of the cells (excluding the outer frame). Optional. The default is no color."
        type: "series color"

        name: "border_width"
        info: "The width of the borders of the cells (excluding the outer frame). Optional. The default is 0."
        type: "series int"
    returns: "The ID of a table object that can be passed to other table.*() functions."
    remarks: "This function creates the table object itself but the table will not be displayed until its cells are populated. To define a cell and change its contents or attributes use @fun table.cell and other table.cell_*() functions."
            "One @fun table.new call can only display one table (the last one drawn) but the function itself will be recalculated on each bar it is used on. For performance reasons it is wise to use @fun table.new in conjunction with either the @op var keyword (so the table object is only created on the first bar) or in an @op if @var barstate.islast block (so the table object is only created on the last bar)."
    syntax: "table.new(position columns rows bgcolor frame_color frame_width border_color border_width) → series table"

"table.delete"
    kind: "Built-in function"
    desc: "The function deletes a table."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"
    syntax: "table.delete(table_id)→ void "

"table.set_position"
    kind: "Built-in function"
    desc: "The function sets the position of a table."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "position"
        info: "Position of the table. Possible values are: @var position.top_left @var position.top_center @var position.top_right @var position.middle_left @var position.middle_center @var position.middle_right @var position.bottom_left @var position.bottom_center @var position.bottom_right."
        type: "series string"
    syntax: "table.set_position(table_id position) → void"

"table.set_bgcolor"
    kind: "Built-in function"
    desc: "The function sets the background color of a table."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "bgcolor"
        info: "The background color of the table. Optional. The default is no color."
        type: "series color"
    syntax: "table.set_bgcolor(table_id bgcolor) → void"

"table.set_frame_color"
    kind: "Built-in function"
    desc: "The function sets the color of the outer frame of a table."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "frame_color"
        info: "The color of the frame of the table. Optional. The default is no color."
        type: "series color"
    syntax: "table.set_frame_color(table_id frame_color) → void"

"table.set_border_color"
    kind: "Built-in function"
    desc: "The function sets the color of the borders (excluding the outer frame) of the table's cells."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "border_color"
        info: "The color of the borders. Optional. The default is no color."
        type: "series color"
    syntax: "table.set_border_color(table_id border_color) → void"

"table.set_frame_width"
    kind: "Built-in function"
    desc: "The function set the width of the outer frame of a table."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "frame_width"
        info: "The width of the outer frame of the table. Optional. The default is 0."
        type: "series int"
    syntax: "table.set_frame_width(table_id frame_width) → void"

"table.set_border_width"
    kind: "Built-in function"
    desc: "The function sets the width of the borders (excluding the outer frame) of the table's cells."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "border_width"
        info: "The width of the borders. Optional. The default is 0."
        type: "series int"
    syntax: "table.set_border_width(table_id border_width) → void"

"table.cell"
    kind: "Built-in function"
    desc: "The function defines a cell in the table and sets its attributes."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "column"
        info: "The index of the cell's column. Numbering starts at 0."
        type: "series int"

        name: "row"
        info: "The index of the cell's row. Numbering starts at 0."
        type: "series int"

        name: "text"
        info: "The text to be displayed inside the cell. Optional. The default is empty string."
        type: "series string"

        name: "width"
        info: "The width of the cell as a % of the indicator's visual space. Optional. By default auto-adjusts the width based on the text inside the cell. Value 0 has the same effect."
        type: "series int/float"

        name: "height"
        info: "The height of the cell as a % of the indicator's visual space. Optional. By default auto-adjusts the height based on the text inside of the cell. Value 0 has the same effect."
        type: "series int/float"

        name: "text_color"
        info: "The color of the text. Optional. The default is @var color.black."
        type: "series color"

        name: "text_halign"
        info: "The horizontal alignment of the cell's text. Optional. The default value is @var text.align_center. Possible values: @var text.align_left @var text.align_center @var text.align_right."
        type: "series string"

        name: "text_valign"
        info: "The vertical alignment of the cell's text. Optional. The default value is @var text.align_center. Possible values: @var text.align_top @var text.align_center @var text.align_bottom."
        type: "series string"

        name: "text_size"
        info: "The size of the text. An optional parameter the default value is @var size.normal. Possible values: @var size.auto @var size.tiny @var size.small @var size.normal @var size.large @var size.huge."
        type: "series string"

        name: "bgcolor"
        info: "The background color of the text. Optional. The default is no color."
        type: "series color"

        name: "tooltip"
        info: "The tooltip to be displayed inside the cell. Optional."
        type: "series string"
    remarks: "This function does not create the table itself but defines the table’s cells. To use it you first need to create a table object with @fun table.new."
            "Each @fun table.cell call overwrites all previously defined properties of a cell. If you call @fun table.cell twice in a row e.g. the first time with text='Test Text' and the second time with text_color=@var color.red but without a new text argument the default value of the 'text' being an empty string it will overwrite 'Test Text' and your cell will display an empty string. If you want instead to modify any of the cell's properties use the table.cell_set_*() functions."
            "A single script can only display one table in each of the possible locations. If @fun table.cell is used on several bars to change the same attribute of a cell (e.g. change the background color of the cell to red on the first bar then to yellow on the second bar) only the last change will be reflected in the table i.e. the cell’s background will be yellow. Avoid unnecessary setting of cell properties by enclosing function calls in an @op if @var barstate.islast block whenever possible to restrict their execution to the last bar of the series."
    syntax: "table.cell(table_id column row text width height text_color text_halign text_valign text_size bgcolor tooltip) → void"

"table.cell_set_text"
    kind: "Built-in function"
    desc: "The function sets the text in the specified cell."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "column"
        info: "The index of the cell's column. Numbering starts at 0."
        type: "series int"

        name: "row"
        info: "The index of the cell's row. Numbering starts at 0."
        type: "series int"

        name: "text"
        info: "The text to be displayed inside the cell."
        type: "series string"
    syntax: "table.cell_set_text(table_id column row text) → void"

"table.cell_set_tooltip"
    kind: "Built-in function"
    desc: "The function sets the tooltip in the specified cell."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "column"
        info: "The index of the cell's column. Numbering starts at 0."
        type: "series int"

        name: "row"
        info: "The index of the cell's row. Numbering starts at 0."
        type: "series int"

        name: "tooltip"
        info: "The tooltip to be displayed inside the cell."
        type: "series string"
    syntax: "table.cell_set_tooltip(table_id column row tooltip) → void"

"table.cell_set_width"
    kind: "Built-in function"
    desc: "The function sets the width of the cell."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "column"
        info: "The index of the cell's column. Numbering starts at 0."
        type: "series int"

        name: "row"
        info: "The index of the cell's row. Numbering starts at 0."
        type: "series int"

        name: "width"
        info: "The width of the cell as a % of the chart window. Passing 0 auto-adjusts the width based on the text inside of the cell."
        type: "series int/float"
    syntax: "table.cell_set_width(table_id column row width) → void"

"table.cell_set_height"
    kind: "Built-in function"
    desc: "The function sets the height of cell."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "column"
        info: "The index of the cell's column. Numbering starts at 0."
        type: "series int"

        name: "row"
        info: "The index of the cell's row. Numbering starts at 0."
        type: "series int"

        name: "height"
        info: "The height of the cell as a % of the chart window. Passing 0 auto-adjusts the height based on the text inside of the cell."
        type: "series int/float"
    syntax: "table.cell_set_height(table_id column row height) → void"

"table.cell_set_text_color"
    kind: "Built-in function"
    desc: "The function sets the color of the text inside the cell."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "column"
        info: "The index of the cell's column. Numbering starts at 0."
        type: "series int"

        name: "row"
        info: "The index of the cell's row. Numbering starts at 0."
        type: "series int"

        name: "text_color"
        info: "The color of the text."
        type: "series color"
    syntax: "table.cell_set_text_color(table_id column row text_color) → void"

"table.cell_set_text_halign"
    kind: "Built-in function"
    desc: "The function sets the horizontal alignment of the cell's text."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "column"
        info: "The index of the cell's column. Numbering starts at 0."
        type: "series int"

        name: "row"
        info: "The index of the cell's row. Numbering starts at 0."
        type: "series int"

        name: "text_halign"
        info: "The horizontal alignment of a cell's text. Possible values: @var text.align_left @var text.align_center @var text.align_right."
        type: "series string"
    syntax: "table.cell_set_text_halign(table_id column row text_halign) → void"

"table.cell_set_text_valign"
    kind: "Built-in function"
    desc: "The function sets the vertical alignment of a cell's text."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "column"
        info: "The index of the cell's column. Numbering starts at 0."
        type: "series int"

        name: "row"
        info: "The index of the cell's row. Numbering starts at 0."
        type: "series int"

        name: "text_valign"
        info: "The vertical alignment of the cell's text. Possible values: @var text.align_top @var text.align_center @var text.align_bottom."
        type: "series string"
    syntax: "table.cell_set_text_valign(table_id column row text_valign) → void"

"table.cell_set_text_size"
    kind: "Built-in function"
    desc: "The function sets the size of the cell's text."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "column"
        info: "The index of the cell's column. Numbering starts at 0."
        type: "series int"

        name: "row"
        info: "The index of the cell's row. Numbering starts at 0."
        type: "series int"

        name: "text_size"
        info: "The size of the text. Possible values: @var size.auto @var size.tiny @var size.small @var size.normal @var size.large @var size.huge."
        type: "series string"
    syntax: "table.cell_set_text_size(table_id column row text_size) → void"

"table.cell_set_bgcolor"
    kind: "Built-in function"
    desc: "The function sets the background color of the cell."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "column"
        info: "The index of the cell's column. Numbering starts at 0."
        type: "series int"

        name: "row"
        info: "The index of the cell's row. Numbering starts at 0."
        type: "series int"

        name: "bgcolor"
        info: "The background color of the cell."
        type: "series color"
    syntax: "table.cell_set_bgcolor(table_id column row bgcolor) → void"

"table.clear"
    kind: "Built-in function"
    desc: "The function removes a cell or a sequence of cells from the table. The cells are removed in a rectangle shape where the start_column and start_row specify the top-left corner and end_column and end_row specify the bottom-right corner."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "start_column"
        info: "The index of the column of the first cell to delete. Numbering starts at 0."
        type: "series int"

        name: "start_row"
        info: "The index of the row of the first cell to delete. Numbering starts at 0."
        type: "series int"

        name: "end_column"
        info: "The index of the column of the last cell to delete. Optional. The default is the argument used for start_column. Numbering starts at 0."
        type: "series int"

        name: "end_row"
        info: "The index of the row of the last cell to delete. Optional. The default is the argument used for start_row. Numbering starts at 0."
        type: "series int"
    syntax: "table.clear(table_id start_column start_row end_column end_row) → void"

"matrix.new<type>"
    kind: "Built-in function"
    desc: 'The function creates a new matrix object. A matrix is a two-dimensional data structure containing rows and columns. All elements in the matrix must be of the type specified in the type template ("<type>").'
    returns: "The ID of the new matrix object."
    args:
        name: "rows"
        info: "Initial row count of the matrix. Optional. The default value is 0."
        type: "series int"

        name: "columns"
        info: "Initial column count of the matrix. Optional. The default value is 0."
        type: "series int"

        name: "initial_value"
        info: "Initial value of all matrix elements. Optional. The default is 'na'."
        type: "<matrix_type>"
    syntax: "matrix.new<int>(rows columns initial_value) → matrix<int>"
            "matrix.new<float>(rows columns initial_value) → matrix<float>"
            "matrix.new<bool>(rows columns initial_value) → matrix<bool>"
            "matrix.new<string>(rows columns initial_value) → matrix<string>"
            "matrix.new<color>(rows columns initial_value) → matrix<color>"
            "matrix.new<line>(rows columns initial_value) → matrix<line>"
            "matrix.new<label>(rows columns initial_value) → matrix<label>"
            "matrix.new<box>(rows columns initial_value) → matrix<box>"
            "matrix.new<table>(rows columns initial_value) → matrix<table>"
            "matrix.new<linefill>(rows columns initial_value) → matrix<linefill>"

"matrix.row"
    kind: "Built-in function"
    desc: "The function creates a one-dimensional array from the elements of a matrix row."
    returns: "An array ID containing the `row` values of the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"

        name: "row"
        info: "Index of the required row."
        type: "series int"
    remarks: "Indexing of rows starts at 0."
    syntax: "matrix.row(id row) → type"

"matrix.col"
    kind: "Built-in function"
    desc: "The function creates a one-dimensional array from the elements of a matrix column."
    returns: "An array ID containing the `column` values of the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"

        name: "column"
        info: "Index of the required column."
        type: "series int"
    remarks: "Indexing of rows starts at 0."
    syntax: "matrix.col(id column) → type"

"matrix.reshape"
    kind: "Built-in function"
    desc: "The function rebuilds the `id` matrix to `rows` x `cols` dimensions."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"

        name: "rows"
        info: "The number of rows of the reshaped matrix."
        type: "series int"

        name: "columns"
        info: "The number of columns of the reshaped matrix."
        type: "series int"
    syntax: "matrix.reshape(id rows columns) → void"

"matrix.get"
    kind: "Built-in function"
    desc: "The function returns the element with the specified index of the matrix."
    returns: "The value of the element at the `column` and `row` index of the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"

        name: "row"
        info: "Index of the required row."
        type: "series int"

        name: "column"
        info: "Index of the required column."
        type: "series int"
    remarks: "Indexing of the rows and columns starts at zero."
    syntax: "matrix.get(id row column) → <matrix_type>"

"matrix.set"
    kind: "Built-in function"
    desc: "The function assigns `value` to the element at the `column` and `row` of the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"

        name: "row"
        info: "The row index of the element to be modified."
        type: "series int"

        name: "column"
        info: "The column index of the element to be modified."
        type: "series int"

        name: "value"
        info: "The new value to be set."
        type: "series <type of the matrix's elements>"
    syntax: "matrix.set(id row column value) → void"

"matrix.add_row"
    kind: "Built-in function"
    desc: "The function adds a row at the `row` index of the `id` matrix. The row can consist of `na` values or an array can be used to provide values."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"

        name: "row"
        info: "The index of the row after which the new row will be inserted. Optional. The default value is @fun matrix.rows."
        type: "series int"

        name: "array_id"
        info: "An array to be inserted. Optional."
        type: "any array type"
    remarks: "Indexing of rows and columns starts at zero. Rather than add rows to an empty matrix it is far more efficient to declare a matrix with explicit dimensions and fill it with values."
    syntax: "matrix.add_row(id row) → void"
            "matrix.add_row(id row array_id) → void"

"matrix.add_col"
    kind: "Built-in function"
    desc: "The function adds a column at the `column` index of the `id` matrix. The column can consist of `na` values or an array can be used to provide values."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"

        name: "column"
        info: "The index of the column after which the new column will be inserted. Optional. The default value is @fun matrix.columns."
        type: "series int"

        name: "array_id"
        info: "An array to be inserted. Optional."
        type: "any array type"
    remarks: "Rather than add columns to an empty matrix it is far more efficient to declare a matrix with explicit dimensions and fill it with values. Adding a column is also much slower than adding a row with the @fun matrix.add_row function."
    syntax: "matrix.add_col(id column) → void"
            "matrix.add_col(id column array_id) → void"

"matrix.remove_row"
    kind: "Built-in function"
    desc: "The function removes the row at `row` index of the `id` matrix and returns an array containing the removed row's values."
    returns: "An array containing the elements of the row removed from the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"

        name: "row"
        info: "The index of the row to be deleted. Optional. The default value is @fun matrix.rows."
        type: "series int"
    remarks: "Indexing of rows and columns starts at zero. It is far more efficient to declare matrices with explicit dimensions than to build them by adding or removing rows."
    syntax: "matrix.remove_row(id row) → type"

"matrix.remove_col"
    kind: "Built-in function"
    desc: "The function removes the column at `column` index of the `id` matrix and returns an array containing the removed column's values."
    returns: "An array containing the elements of the column removed from the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"

        name: "column"
        info: "The index of the column to be removed. Optional. The default value is @fun matrix.columns."
        type: "series int"
    remarks: "Indexing of rows and columns starts at zero. It is far more efficient to declare matrices with explicit dimensions than to build them by adding or removing columns. Deleting a column is also much slower than deleting a row with the @fun matrix.remove_row function."
    syntax: "matrix.remove_col(id column) → type"

"matrix.fill"
    kind: "Built-in function"
    desc: "The function fills a rectangular area of the `id` matrix defined by the indices `from_column` to `to_column` (not including it) and `from_row` to `to_row`(not including it) with the `value`."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"

        name: "value"
        info: "The value to fill with."
        type: "series <type of the matrix's elements>"

        name: "from_column"
        info: "Column index from which the fill will begin (inclusive). Optional. The default value is 0."
        type: "series int"

        name: "to_column"
        info: "Column index where the fill will end (non inclusive). Optional. The default value is @fun matrix.columns."
        type: "series int"

        name: "from_row"
        info: "Row index from which the fill will begin (inclusive). Optional. The default value is 0."
        type: "series int"

        name: "to_row"
        info: "Row index where the fill will end (not inclusive). Optional. The default value is @fun matrix.rows."
        type: "series int"
    syntax: "matrix.fill(id value from_row to_row from_column to_column) → void"

"matrix.submatrix"
    kind: "Built-in function"
    desc: "The function extracts a submatrix of the `id` matrix within the specified indices."
    returns: "A new matrix object containing the submatrix of the `id` matrix defined by the `from_row` `to_row` `from_column` and `to_column` indices."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"

        name: "from_column"
        info: "Index of the column from which the extraction will begin (inclusive). Optional. The default value is 0."
        type: "series int"

        name: "to_column"
        info: "Index of the column where the extraction will end (non inclusive). Optional. The default value is @fun matrix.columns."
        type: "series int"

        name: "from_row"
        info: "Index of the row from which the extraction will begin (inclusive). Optional. The default value is 0."
        type: "series int"

        name: "to_row"
        info: "Index of the row where the extraction will end (non inclusive). Optional. The default value is @fun matrix.rows."
        type: "series int"
    remarks: "Indexing of the rows and columns starts at zero."
    syntax: "matrix.submatrix(id from_row to_row from_column to_column) → matrix<type>"

"matrix.copy"
    kind: "Built-in function"
    desc: "The function creates a new matrix which is a copy of the original."
    returns: "A new matrix object of the copied `id` matrix."
    args:
        name: "id"
        info: "A matrix object to copy."
        type: "any matrix type"
    syntax: "matrix.copy(id) → matrix<type>"

"matrix.columns"
    kind: "Built-in function"
    desc: "The function returns the number of columns in the matrix."
    returns: "The number of columns in the matrix `id`."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"
    syntax: "matrix.columns(id) → series int"

"matrix.rows"
    kind: "Built-in function"
    desc: "The function returns the number of rows in the matrix."
    returns: "The number of rows in the matrix `id`."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"
    syntax: "matrix.rows(id) → series int"

"matrix.elements_count"
    kind: "Built-in function"
    desc: "The function returns the total number of all matrix elements."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"
    syntax: "matrix.elements_count(id) → series int"

"matrix.concat"
    kind: "Built-in function"
    desc: "The function appends the `m2` matrix to the `m1` matrix."
    returns: "Returns the `id1` matrix concatenated with the `id2` matrix."
    args:
        name: "id1"
        info: "Matrix object to concatenate into."
        type: "any matrix type"

        name: "id2"
        info: "Matrix object whose elements will be appended to `id1`."
        type: "any matrix type"
    remarks: "The number of columns in both matrices must be identical."
    syntax: "matrix.concat(id1 id2) → matrix<type>"

"matrix.swap_rows"
    kind: "Built-in function"
    desc: "The function swaps the rows at the index `row1` and `row2` in the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"

        name: "row1"
        info: "Index of the first row to be swapped."
        type: "series int"

        name: "row2"
        info: "Index of the second row to be swapped."
        type: "series int"
    remarks: "Indexing of the rows and columns starts at zero."
    syntax: "matrix.swap_rows(id row1 row2) → void"

"matrix.swap_columns"
    kind: "Built-in function"
    desc: "The function swaps the columns at the index `column1` and `column2` in the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"

        name: "column1"
        info: "Index of the first column to be swapped."
        type: "series int"

        name: "column2"
        info: "Index of the second column to be swapped."
        type: "series int"
    remarks: "Indexing of the rows and columns starts at zero."
    syntax: "matrix.swap_columns(id column1 column2) → void"

"matrix.reverse"
    kind: "Built-in function"
    desc: "The function reverses the order of rows and columns in the matrix `id`. The first row and first column become the last and the last become the first."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"
    syntax: "matrix.reverse(id) → void"

"matrix.sort"
    kind: "Built-in function"
    desc: "The function rearranges the rows in the `id` matrix following the sorted order of the values in the `column`."
    args:
        name: "id"
        info: "A matrix object to be sorted."
        type: "matrix<int>/matrix<float>/matrix<string>"

        name: "column"
        info: "Index of the column whose sorted values determine the new order of rows. Optional. The default value is 0."
        type: "series int"

        name: "order"
        info: "The sort order. Possible values: @var order.ascending (default) @var order.descending."
        type: "sort_order"
    syntax: "matrix.sort(id column order) → void"

"matrix.det"
    kind: "Built-in function"
    desc: "The function returns the determinant of a square matrix."
    returns: "The determinant value of the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "matrix<float>/matrix<int>"
    remarks: "Function calculation based on the LU decomposition algorithm."
    syntax: "matrix.det(id) → series float"
            "matrix.det(id) → series int"

"matrix.min"
    kind: "Built-in function"
    desc: "The function returns the smallest value from the matrix elements."
    returns: "The smallest value from the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "matrix<float>/matrix<int>"
    syntax: "matrix.min(id) → series float"
            "matrix.min(id) → series int"

"matrix.max"
    kind: "Built-in function"
    desc: "The function returns the largest value from the matrix elements."
    returns: "The maximum value from the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "matrix<float>/matrix<int>"
    syntax: "matrix.max(id) → series float"
            "matrix.max(id) → series int"

"matrix.avg"
    kind: "Built-in function"
    desc: "The function ccalculates the average of all elements in the matrix."
    returns: "The average value from the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "matrix<float>/matrix<int>"
    syntax: "matrix.avg(id) → series float"
            "matrix.avg(id) → series int"

"matrix.median"
    kind: "Built-in function"
    desc: 'The function ccalculates the median ("the middle" value) of matrix elements.'
    args:
        name: "id"
        info: "A matrix object."
        type: "matrix<float>/matrix<int>"
    remarks: "Note that @var na elements of the matrix are not considered when calculating the median."
    syntax: "matrix.median(id) → series float"
            "matrix.median(id) → series int"

"matrix.mode"
    kind: "Built-in function"
    desc: "The function ccalculates the mode of the matrix which is the most frequently occurring value from the matrix elements. When there are multiple values occurring equally frequently the function returns the smallest of those values."
    returns: "The most frequently occurring value from the `id` matrix. Returns ‘na’ if none exists."
    args:
        name: "id"
        info: "A matrix object."
        type: "matrix<float>/matrix<int>"
    remarks: "Note that @var na elements of the matrix are not considered when calculating the mode."
    syntax: "matrix.mode(id) → series float"
            "matrix.mode(id) → series int"

"matrix.transpose"
    kind: "Built-in function"
    desc: "The function creates a new transposed version of the `id`. This interchanges the row and column index of each element."
    returns: "A new matrix containing the transposed version of the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"
    syntax: "matrix.transpose(id) → matrix<type>"

"matrix.sum"
    kind: "Built-in function"
    desc: "The function returns a new matrix resulting from the sum of two matrices `id1` and `id2` or of an `id1` matrix and an `id2` scalar (a numerical value)."
    returns: "A new matrix object containing the sum of `id2` and `id1`."
    args:
        name: "id1"
        info: "First matrix object."
        type: "matrix<int>/matrix<float>"

        name: "id2"
        info: "Second matrix object or scalar value."
        type: "series int/float/matrix<int>/matrix<float>"
    syntax: "matrix.sum(id1 id2) → matrix<int>"
            "matrix.sum(id1 id2) → matrix<float>"
            "matrix.sum(id1 id2) → matrix<int>"
            "matrix.sum(id1 id2) → matrix<float>"

"matrix.diff"
    kind: "Built-in function"
    desc: "The function returns a new matrix resulting from the subtraction between matrices `id1` and `id2` or of matrix `id1` and an `id2` scalar (a numerical value)."
    returns: "A new matrix object containing the difference between `id2` and `id1`."
    args:
        name: "id1"
        info: "Matrix to subtract from."
        type: "matrix<int>/matrix<float>"

        name: "id2"
        info: "Matrix object or a scalar value to be subtracted."
        type: "series int/float/matrix<int>/matrix<float>"
    syntax: "matrix.diff(id1 id2) → matrix<int>"
            "matrix.diff(id1 id2) → matrix<float>"
            "matrix.diff(id1 id2) → matrix<int>"
            "matrix.diff(id1 id2) → matrix<float>"

"matrix.mult"
    kind: "Built-in function"
    desc: "The function returns a new matrix resulting from the product between the matrices `id1` and `id2` or between an `id1` matrix and an `id2` scalar (a numerical value) or between an `id1` matrix and an `id2` vector (an array of values)."
    returns: "A new matrix object containing the product of `id2` and `id1`."
    args:
        name: "id1"
        info: "First matrix object."
        type: "matrix<int>/matrix<float>"

        name: "id2"
        info: "Second matrix object value or array."
        type: "series int/float/matrix<int>/matrix<float>/int/float"
    syntax: "matrix.mult(id1 id2) → matrix<int>"
            "matrix.mult(id1 id2) → matrix<float>"
            "matrix.mult(id1 id2) → matrix<int>"
            "matrix.mult(id1 id2) → matrix<float>"
            "matrix.mult(id1 id2) → int"
            "matrix.mult(id1 id2) → float"

"matrix.pinv"
    kind: "Built-in function"
    desc: "The function returns the pseudoinverse of a matrix."
    returns: "A new matrix containing the pseudoinverse of the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "matrix<float>/matrix<int>"
    remarks: "The function is calculated using a Moore–Penrose inverse formula based on singular-value decomposition of a matrix. For non-singular square matrices this function returns the result of @fun matrix.inv."
    syntax: "matrix.pinv(id) → matrix<float>"
            "matrix.pinv(id) → matrix<int>"

"matrix.inv"
    kind: "Built-in function"
    desc: "The function returns the inverse of a square matrix."
    returns: "A new matrix which is the inverse of the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "matrix<float>/matrix<int>"
    remarks: "The function is calculated using the LU decomposition algorithm."
    syntax: "matrix.inv(id) → matrix<float>"
            "matrix.inv(id) → matrix<int>"

"matrix.rank"
    kind: "Built-in function"
    desc: "The function ccalculates the rank of the matrix."
    returns: "The rank of the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "any matrix type"
    syntax: "matrix.rank(id) → series int"

"matrix.trace"
    kind: "Built-in function"
    desc: "The function ccalculates the trace of a matrix (the sum of the main diagonal's elements)."
    returns: "The trace of the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "matrix<float>/matrix<int>"
    syntax: "matrix.trace(id) → series float"
            "matrix.trace(id) → series int"

"matrix.eigenvalues"
    kind: "Built-in function"
    desc: "The function returns an array containing the eigenvalues of a square matrix."
    returns: "An array containing the eigenvalues of the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "matrix<float>/matrix<int>"
    remarks: 'The function is calculated using "The Implicit QL Algorithm".'
    syntax: "matrix.eigenvalues(id) → float"
            "matrix.eigenvalues(id) → int"

"matrix.eigenvectors"
    kind: "Built-in function"
    desc: "Returns a matrix of eigenvectors in which each column is an eigenvector of the `id` matrix."
    returns: "A new matrix containing the eigenvectors of the `id` matrix."
    args:
        name: "id"
        info: "A matrix object."
        type: "matrix<float>/matrix<int>"
    remarks: 'The function is calculated using "The Implicit QL Algorithm".'
    syntax: "matrix.eigenvectors(id) → matrix<float>"
            "matrix.eigenvectors(id) → matrix<int>"

"matrix.kron"
    kind: "Built-in function"
    desc: "The function returns the Kronecker product for the `id1` and `id2` matrices."
    returns: "A new matrix containing the Kronecker product of `id1` and `id2`."
    args:
        name: "id1"
        info: "First matrix object."
        type: "matrix<float>/matrix<int>"

        name: "id2"
        info: "Second matrix object."
        type: "matrix<float>/matrix<int>"
    syntax: "matrix.kron(id1 id2) → matrix<float>"
            "matrix.kron(id1 id2) → matrix<int>"

"matrix.pow"
    kind: "Built-in function"
    desc: "The function ccalculates the product of the matrix by itself `power` times."
    returns: "The product of the `id` matrix by itself `power` times."
    args:
        name: "id"
        info: "A matrix object."
        type: "matrix<float>/matrix<int>"

        name: "power"
        info: "The number of times the matrix will be multiplied by itself."
        type: "series int"
    syntax: "matrix.pow(id power) → matrix<float>"
            "matrix.pow(id power) → matrix<int>"

"matrix.is_zero"
    kind: "Built-in function"
    desc: "The function determines if all elements of the matrix are zero."
    returns: "Returns true if all elements of the `id` matrix are zero false otherwise."
    args:
        name: "id"
        info: "Matrix object to check."
        type: "matrix<float>/matrix<int>"
    syntax: "matrix.is_zero(id) → series bool"

"matrix.is_identity"
    kind: "Built-in function"
    desc: "The function determines if a matrix is an identity matrix (elements with ones on the main diagonal and zeros elsewhere)."
    returns: "Returns true if `id` is an identity matrix false otherwise."
    args:
        name: "id"
        info: "Matrix object to test."
        type: "matrix<float>/matrix<int>"
    remarks: "Returns false with non-square matrices."
    syntax: "matrix.is_identity(id) → series bool"

"matrix.is_binary"
    kind: "Built-in function"
    desc: "The function determines if the matrix is binary (when all elements of the matrix are 0 or 1)."
    returns: "Returns true if the `id` matrix is binary false otherwise."
    args:
        name: "id"
        info: "Matrix object to test."
        type: "matrix<float>/matrix<int>"
    syntax: "matrix.is_binary(id) → series bool"

"matrix.is_symmetric"
    kind: "Built-in function"
    desc: "The function determines if a square matrix is symmetric (elements are symmetric with respect to the main diagonal)."
    returns: "Returns true if the `id` matrix is symmetric false otherwise."
    args:
        name: "id"
        info: "Matrix object to test."
        type: "matrix<float>/matrix<int>"
    remarks: "Returns false with non-square matrices."
    syntax: "matrix.is_symmetric(id) → series bool"

"matrix.is_antisymmetric"
    kind: "Built-in function"
    desc: "The function determines if a matrix is antisymmetric (its transpose equals its negative)."
    returns: "Returns true if the `id` matrix is antisymmetric false otherwise."
    args:
        name: "id"
        info: "Matrix object to test."
        type: "matrix<float>/matrix<int>"
    remarks: "Returns false with non-square matrices."
    syntax: "matrix.is_antisymmetric(id) → series bool"

"matrix.is_diagonal"
    kind: "Built-in function"
    desc: "The function determines if the matrix is diagonal (all elements outside the main diagonal are zero)."
    returns: "Returns true if the `id` matrix is diagonal false otherwise."
    args:
        name: "id"
        info: "Matrix object to test."
        type: "matrix<float>/matrix<int>"
    remarks: "Returns false with non-square matrices."
    syntax: "matrix.is_diagonal(id) → series bool"

"matrix.is_antidiagonal"
    kind: "Built-in function"
    desc: "The function determines if the matrix is anti-​​diagonal (all elements outside the secondary diagonal are zero)."
    returns: "Returns true if the `id` matrix is ​​anti-diagonal false otherwise."
    args:
        name: "id"
        info: "Matrix object to test."
        type: "matrix<float>/matrix<int>"
    remarks: "Returns false with non-square matrices."
    syntax: "matrix.is_antidiagonal(id) → series bool"

"matrix.is_triangular"
    kind: "Built-in function"
    desc: "The function determines if the matrix is triangular (if all elements above or below the main diagonal are zero)."
    returns: "Returns true if the `id` matrix is triangular false otherwise."
    args:
        name: "id"
        info: "Matrix object to test."
        type: "matrix<float>/matrix<int>"
    remarks: "Returns false with non-square matrices."
    syntax: "matrix.is_triangular(id) → series bool"

"matrix.is_stochastic"
    kind: "Built-in function"
    desc: "The function determines if the matrix is stochastic."
    returns: "Returns true if the `id` matrix is stochastic false otherwise."
    args:
        name: "id"
        info: "Matrix object to test."
        type: "matrix<float>/matrix<int>"
    syntax: "matrix.is_stochastic(id) → series bool"

"matrix.is_square"
    kind: "Built-in function"
    desc: "The function determines if the matrix is square (it has the same number of rows and columns)."
    returns: "Returns true if the `id` matrix is square false otherwise."
    args:
        name: "id"
        info: "Matrix object to test."
        type: "any matrix type"
    syntax: "matrix.is_square(id) → series bool"

"table.merge_cells"
    kind: "Built-in function"
    desc: "The function merges a sequence of cells in the table into one cell. The cells are merged in a rectangle shape where the start_column and start_row specify the top-left corner and end_column and end_row specify the bottom-right corner."
    args:
        name: "table_id"
        info: "A table object."
        type: "series table"

        name: "start_column"
        info: "The index of the column of the first cell to merge. Numbering starts at 0."
        type: "series int"

        name: "start_row"
        info: "The index of the row of the first cell to merge. Numbering starts at 0."
        type: "series int"

        name: "end_column"
        info: "The index of the column of the last cell to merge. Numbering starts at 0."
        type: "series int"

        name: "end_row"
        info: "The index of the row of the last cell to merge. Numbering starts at 0."
        type: "series int"
    remarks:"This function will merge cells even if their properties are not yet defined with @fun table.cell."
            "The resulting merged cell inherits all of its values from the cell located at `start_column`:`start_row` except width and height. The width and height of the resulting merged cell are based on the width/height of other cells in the neighboring columns/rows and cannot be set manually."
            "To modify the merged cell with any of the `table.cell_set_*` functions target the cell at the `start_column`:`start_row` coordinates."
            "An attempt to merge a cell that has already been merged will result in an error."
    syntax: "table.merge_cells(table_id start_column start_row end_column end_row) → void"

"strategy.closedtrades.entry_price"
    kind: "Built-in function"
    desc: "Returns the price of the closed trade's entry."
    args:
        name: "trade_num"
        info: "The trade number of the closed trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.closedtrades.entry_price(trade_num) → series float"

"strategy.closedtrades.entry_bar_index"
    kind: "Built-in function"
    desc: "Returns the bar_index of the closed trade's entry."
    args:
        name: "trade_num"
        info: "The trade number of the closed trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.closedtrades.entry_bar_index(trade_num) → series int"

"strategy.closedtrades.entry_time"
    kind: "Built-in function"
    desc: "Returns the UNIX time of the closed trade's entry."
    args:
        name: "trade_num"
        info: "The trade number of the closed trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.closedtrades.entry_time(trade_num) → series int"

"strategy.closedtrades.exit_price"
    kind: "Built-in function"
    desc: "Returns the price of the closed trade's exit."
    args:
        name: "trade_num"
        info: "The trade number of the closed trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.closedtrades.exit_price(trade_num) → series float"

"strategy.closedtrades.exit_bar_index"
    kind: "Built-in function"
    desc: "Returns the bar_index of the closed trade's exit."
    args:
        name: "trade_num"
        info: "The trade number of the closed trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.closedtrades.exit_bar_index(trade_num) → series int"

"strategy.closedtrades.exit_time"
    kind: "Built-in function"
    desc: "Returns the UNIX time of the closed trade's exit."
    args:
        name: "trade_num"
        info: "The trade number of the closed trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.closedtrades.exit_time(trade_num) → series int"

"strategy.closedtrades.size"
    kind: "Built-in function"
    desc: "Returns the direction and the number of contracts traded in the closed trade. If the value is > 0 the market position was long. If the value is < 0 the market position was short."
    args:
        name: "trade_num"
        info: "The trade number of the closed trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.closedtrades.size(trade_num) → series float"

"strategy.closedtrades.profit"
    kind: "Built-in function"
    desc: "Returns the profit/loss of the closed trade. Losses are expressed as negative values."
    args:
        name: "trade_num"
        info: "The trade number of the closed trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.closedtrades.profit(trade_num) → series float"

"strategy.closedtrades.commission"
    kind: "Built-in function"
    desc: "Returns the sum of entry and exit fees paid in the closed trade."
    args:
        name: "trade_num"
        info: "The trade number of the closed trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.closedtrades.commission(trade_num) → series float"

"strategy.closedtrades.max_runup"
    kind: "Built-in function"
    desc: "Returns the maximum run up of the closed trade i.e. the maximum possible profit during the trade."
    args:
        name: "trade_num"
        info: "The trade number of the closed trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.closedtrades.max_runup(trade_num) → series float"

"strategy.closedtrades.max_drawdown"
    kind: "Built-in function"
    desc: "Returns the maximum drawdown of the closed trade i.e. the maximum possible loss during the trade."
    args:
        name: "trade_num"
        info: "The trade number of the closed trade. The number of the first trade is zero."
        type: "series int"
    remarks: "The function returns na if trade_num is not in the range: 0 to strategy.closedtrades - 1."
    syntax: "strategy.closedtrades.max_drawdown(trade_num) → series float"

"strategy.closedtrades.entry_id"
    kind: "Built-in function"
    desc: "Returns the id of the closed trade's entry."
    args:
        name: "trade_num"
        info: "The trade number of the closed trade. The number of the first trade is zero."
        type: "series int"
    returns: "Returns the id of the closed trade's entry."
    remarks: "The function returns na if trade_num is not in the range: 0 to strategy.closedtrades-1."
    syntax: "strategy.closedtrades.entry_id(trade_num) → series string"

"strategy.closedtrades.exit_id"
    kind: "Built-in function"
    desc: "Returns the id of the closed trade's exit."
    args:
        name: "trade_num"
        info: "The trade number of the closed trade. The number of the first trade is zero."
        type: "series int"
    returns: "Returns the id of the closed trade's exit."
    remarks: "The function returns na if trade_num is not in the range: 0 to strategy.closedtrades-1."
    syntax: "strategy.closedtrades.exit_id(trade_num) → series string"

"strategy.opentrades.entry_price"
    kind: "Built-in function"
    desc: "Returns the price of the open trade's entry."
    args:
        name: "trade_num"
        info: "The trade number of the open trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.opentrades.entry_price(trade_num) → series float"

"strategy.opentrades.entry_bar_index"
    kind: "Built-in function"
    desc: "Returns the bar_index of the open trade's entry."
    args:
        name: "trade_num"
        info: "The trade number of the open trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.opentrades.entry_bar_index(trade_num) → series int"

"strategy.opentrades.entry_time"
    kind: "Built-in function"
    desc: "Returns the UNIX time of the open trade's entry."
    args:
        name: "trade_num"
        info: "The trade number of the open trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.opentrades.entry_time(trade_num) → series int"

"strategy.opentrades.size"
    kind: "Built-in function"
    desc: "Returns the direction and the number of contracts traded in the open trade. If the value is > 0 the market position was long. If the value is < 0 the market position was short."
    args:
        name: "trade_num"
        info: "The trade number of the open trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.opentrades.size(trade_num) → series float"

"strategy.opentrades.profit"
    kind: "Built-in function"
    desc: "Returns the profit/loss of the open trade. Losses are expressed as negative values."
    args:
        name: "trade_num"
        info: "The trade number of the open trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.opentrades.profit(trade_num) → series float"

"strategy.opentrades.commission"
    kind: "Built-in function"
    desc: "Returns the sum of entry and exit fees paid in the open trade."
    args:
        name: "trade_num"
        info: "The trade number of the open trade. The number of the first trade is zero."
        type: "series int"

    syntax: "strategy.opentrades.commission(trade_num) → series float"

"strategy.opentrades.max_runup"
    kind: "Built-in function"
    desc: "Returns the maximum run up of the open trade i.e. the maximum possible profit during the trade."
    args:
        name: "trade_num"
        info: "The trade number of the open trade. The number of the first trade is zero."
        type: "series int"
    syntax: "strategy.opentrades.max_runup(trade_num) → series float"

"strategy.opentrades.max_drawdown"
    kind: "Built-in function"
    desc: "Returns the maximum drawdown of the open trade i.e. the maximum possible loss during the trade."
    args:
        name: "trade_num"
        info: "The trade number of the open trade. The number of the first trade is zero."
        type: "series int"
    remarks: "The function returns na if trade_num is not in the range: 0 to strategy.closedtrades - 1."
    syntax: "strategy.opentrades.max_drawdown(trade_num) → series float"

"strategy.opentrades.entry_id"
    kind: "Built-in function"
    desc: "Returns the id of the open trade's entry."
    args:
        name: "trade_num"
        info: "The trade number of the open trade. The number of the first trade is zero."
        type: "series int"
    returns: "Returns the id of the open trade's entry."
    remarks: "The function returns na if trade_num is not in the range: 0 to strategy.opentrades-1."
    syntax: "strategy.opentrades.entry_id(trade_num) → series string"

"strategy.convert_to_account"
    kind: "Built-in function"
    desc: "Converts the value from the currency that the symbol on the chart is traded in (@var syminfo.currency) to the currency used by the strategy (@var strategy.account_currency)."
    args:
        name: "value"
        info: "The value to be converted."
        type: "series int/float"
    syntax: "strategy.convert_to_account(value) → series float"

"strategy.convert_to_symbol"
    kind: "Built-in function"
    desc: "Converts the value from the currency used by the strategy (@var strategy.account_currency) to the currency that the symbol on the chart is traded in (@var syminfo.currency)."
    args:
        name: "value"
        info: "The value to be converted."
        type: "series int/float"
    syntax: "strategy.convert_to_symbol(value) → series float"

"library"
    kind: "Built-in annotation function"
    desc: "Declaration statement identifying a script as a library."
    args:
        name: "title"
        info: "The title of the library and its identifier. It cannot contain spaces special characters or begin with a digit. It is used as the publication's default title and to uniquely identify the library in the @op import statement when another script uses it. It is also used as the script's name on the chart."
        type: "const string"

        name: "overlay"
        info: "If true the library will be added over the chart. If false it will be added in a separate pane. Optional. The default is false."
        type: "const bool"

"runtime.error"
    kind: "Built-in function"
    desc: "When called causes a runtime error with the error message specified in the `message` argument."
    args:
        name: "message"
        info: "Error message."
        type: "series string"
    syntax: "runtime.error(message) → void"



