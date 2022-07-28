$(document).ready(function(){

    // ====================================
    //       Start Header Area
    // ====================================

    $('.header_color').click(function(){
        var color=$(this).css('background-color');           //reference by https://www.w3resource.com/jquery-exercises/jquery-css-exercise-1.php#:~:text=%24(%20%22div%22%20).,color%20%2B%20%22.%22%20)%3B%20%7D)%3B
        $('.header').css('background-color',color);
    });
    $('.header_text , .header_text_menu , .header_text_dropdown , .header_text_style , .header_text_background_color , .header_text_size , .header_text_color , .header_text_underline , .header_text_shadow').mouseover(function(){
        $('.header_text_menu').css('visibility','visible');
    });
    $('.header_text , .header_text_menu , .header_text_dropdown , .header_text_style , .header_text_background_color , .header_text_size , .header_text_color , .header_text_underline , .header_text_shadow').mouseleave(function(){
        $('.header_text_menu').css('visibility','hidden');
    });
    $('.header_text_menu').click(function(){
        $('.header_text_dropdown').css('visibility','visible');
    });
    $(document).on('click',function(event){
        if(!$(event.target).closest('.header_text_menu').length){
            $('.header_text_dropdown').css('visibility','hidden');         //reference by https://stackoverflow.com/questions/35328016/click-on-body-except-on-specific-div
        }
    });
    $('.header_text_style li').click(function(){
        var style=$(this).css('font-family');
        $('.header_text').css('font-family',style);
    }); 
    $('.header_text_background_color li').click(function(){
        var color=$(this).css('background-color');
        $('.header_text').css('background-color',color);
    }); 
    $('.header_text_size li').click(function(){
        var size=$(this).css('font-size');
        $('.header_text').css('font-size',size);
    });  
    $('.header_text_color li').click(function(){
        var color=$(this).css('color');
        $('.header_text').css('color',color);
    }); 
    $('.header_text_underline li').click(function(){
        var underline=$(this).css('text-decoration');
        $('.header_text').css('text-decoration',underline);
    }); 
    $('.header_text_shadow li').click(function(){
        var text_shadow=$(this).css('text-shadow');
        $('.header_text').css('text-shadow',text_shadow);
    });

    // ====================================
    //       End Header Area
    // ====================================

    // ====================================
    //       Start paragraph Area
    // ====================================

    $('.paragraph').click(function(){
        let x = Math.random();
        $('<br>').appendTo('.body');
        $('<p>',{
            id: x,
            class: 'paragraph_text',
            contenteditable: true,
            style: 'margin-bottom:2px; margin-top:2px; max-width:100%'
        }).appendTo('.body').html('Start writing in your new paragraph......');
        $('<button>',{
            onclick: 'edit('+x+')',
            id: x+'_button',
            class: 'button',
            type: 'button',
            contenteditable: 'false',
            style: 'margin-bottom:2px; margin-top:2px; visibility:hidden'
        }).appendTo('.body');
        $('.button').html('Edit');
        $(document.getElementById(x)).mouseover(function(){
            $(document.getElementById(x+'_button')).css('visibility','visible')
        });
        $(document).on('mouseover',function(event){
            if(!$(event.target).closest(document.getElementById(x)).length){
                if(!$(event.target).closest(document.getElementById(x+'_button')).length){
                    if(!$(event.target).closest(document.getElementById(x+'_body_dropdown')).length){
                     $(document.getElementById(x+'_button')).css('visibility','hidden');
            }}}
        });
        $('<ul>',{
            id: x+'_body_dropdown',
            class: 'body_dropdown list-group',
            contenteditable: false
        }).appendTo('.body');
        $('<div>',{
            id: x+'_body_text_style_0',
            class: 'body_text_style_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            class: "body_text_style_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_style dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_style_0'));
        $('.body_text_style_1').html('Text Style');
        $('<div>',{
            id: x+'_body_text_style_2',
            class: 'body_text_style_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_style_0'));
        $('<ul>',{
            id: x+'_body_text_style_3',
            class: 'body_text_style_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_style_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: serif,roman;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: sans-serif,arial;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: monospace,courier new;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "cursive,lucida handwriting;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: fantasy,papyrus;",
            click: function(){  
                document.getElementById(x).style.fontFamily=$(this).css('font-family');
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('.body_text_style_3 li').html('Aa');
        $('<div>',{
            id: x+"_body_text_background_color_0",
            class: 'body_text_background_color_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+"_body_text_background_color_1",
            class: "body_text_background_color_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_background_color dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_background_color_0'));
        $('.body_text_background_color_1').html('Text Background Color');
        $('<div>',{
            id: x+"_body_text_background_color_2",
            class: 'body_text_background_color_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_background_color_0'));
        $('<ul>',{
            id: x+"_body_text_background_color_3",
            class: 'body_text_background_color_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_background_color_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('secondary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-warning text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('warning');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-dark text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('dark');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-primary text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('primary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-danger text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('danger');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-info text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('info');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-success text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('success');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-white text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('white');
        $('<div>',{
            id: x+'_body_text_size_0',
            class: 'body_text_size_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_text_size_1',
            class: "body_text_size_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_size dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_size_0'));
        $('.body_text_size_1').html('Text Size');
        $('<div>',{
            id: x+'_body_text_size_2',
            class: 'body_text_size_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_size_0'));
        $('<ul>',{
            id: x+'_body_text_size_3',
            class: 'body_text_size_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_size_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 20px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 25px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 30px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 35px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 40px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 45px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('.body_text_size_3 li').html('Aa');
        $('<div>',{
            id: x+'_body_text_color_0',
            class: 'body_text_color_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_text_color_1',
            class: "body_text_color_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_color dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_color_0'));
        $('.body_text_color_1').html('Text Color');
        $('<div>',{
            id: x+'_body_text_color_2',
            class: 'body_text_color_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_color_0'));
        $('<ul>',{
            id: x+'_body_text_color_3',
            class: 'body_text_color_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_color_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('secondary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-warning text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('warning');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-dark text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('dark');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-primary text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('primary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-danger text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('danger');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-info text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('info');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-success text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('success');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-white text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('white');
        $('<div>',{
            id: x+'_body_text_underline_0',
            class: 'body_text_underline_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_text_underline_1',
            class: "body_text_underline_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_underline dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_underline_0'));
        $('.body_text_underline_1').html('Text Underline');
        $('<div>',{
            id: x+'_body_text_underline_2',
            class: 'body_text_underline_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_underline_0'));
        $('<ul>',{
            id: x+'_body_text_underline_3',
            class: 'body_text_underline_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_underline_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline dotted;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline double;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline 2px solid black;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline dashed;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline wavy;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('.body_text_underline_3 li').html('Aa');
        $('<div>',{
            id: x+'_body_text_shadow_0',
            class: 'body_text_shadow_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_text_shadow_1',
            class: "body_text_shadow_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_shadow dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_shadow_0'));
        $('.body_text_shadow_1').html('Text Shadow');
        $('<div>',{
            id: x+'_body_text_shadow_2',
            class: 'body_text_shadow_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_shadow_0'));
        $('<ul>',{
            id: x+'_body_text_shadow_3',
            class: 'body_text_shadow_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_shadow_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 0px 0px 3px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 1px 3px 4px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 1px 2px 3px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 2px 4px 3px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 3px 2px 2px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 0px 5px 7px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('.body_text_shadow_3 li').html('Aa');
    });

    // ====================================
    //       End Paragraph Area
    // ====================================

    // ====================================
    //       Start Checkbox Area
    // ====================================


    $('.check_box').click(function(){
        let x=Math.random();
        $('<br>').appendTo('.body');
        $('<input>',{
            type: 'checkbox',
            class: 'check_box_text',
            style: 'margin-bottom:2px; margin-top:2px;'
        }).appendTo('.body');
        $('<label>',{
            id: x,
            class: 'checkbox_label',
            for: '.check_box_text',
            contenteditable: true,
            style: 'margin-bottom:2px; margin-top:2px; margin-left:2px; max-width:100%'
        }).appendTo('.body').html('New checkbox...');
        $('<button>',{
            onclick: 'edit('+x+')',
            id: x+'_button',
            class: 'button',
            type: 'button',
            contenteditable: 'false',
            style: 'margin-bottom:2px; margin-top:2px; visibility:hidden'
        }).appendTo('.body');
        $('.button').html('Edit');
        $(document.getElementById(x)).mouseover(function(){
            $(document.getElementById(x+'_button')).css('visibility','visible')
        });
        $(document).on('mouseover',function(event){
            if(!$(event.target).closest(document.getElementById(x)).length){
                if(!$(event.target).closest(document.getElementById(x+'_button')).length){
                    if(!$(event.target).closest(document.getElementById(x+'_body_dropdown')).length){
                     $(document.getElementById(x+'_button')).css('visibility','hidden');
            }}}
        });
        $('<ul>',{
            id: x+'_body_dropdown',
            class: 'body_dropdown list-group',
            contenteditable: false
        }).appendTo('.body');
        $('<div>',{
            id: x+'_body_text_style_0',
            class: 'body_text_style_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            class: "body_text_style_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_style dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_style_0'));
        $('.body_text_style_1').html('Text Style');
        $('<div>',{
            id: x+'_body_text_style_2',
            class: 'body_text_style_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_style_0'));
        $('<ul>',{
            id: x+'_body_text_style_3',
            class: 'body_text_style_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_style_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: serif,roman;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: sans-serif,arial;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: monospace,courier new;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "cursive,lucida handwriting;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: fantasy,papyrus;",
            click: function(){  
                document.getElementById(x).style.fontFamily=$(this).css('font-family');
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('.body_text_style_3 li').html('Aa');
        $('<div>',{
            id: x+"_body_text_background_color_0",
            class: 'body_text_background_color_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+"_body_text_background_color_1",
            class: "body_text_background_color_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_background_color dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_background_color_0'));
        $('.body_text_background_color_1').html('Text Background Color');
        $('<div>',{
            id: x+"_body_text_background_color_2",
            class: 'body_text_background_color_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_background_color_0'));
        $('<ul>',{
            id: x+"_body_text_background_color_3",
            class: 'body_text_background_color_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_background_color_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('secondary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-warning text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('warning');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-dark text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('dark');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-primary text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('primary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-danger text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('danger');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-info text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('info');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-success text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('success');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-white text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('white');
        $('<div>',{
            id: x+'_body_text_size_0',
            class: 'body_text_size_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_text_size_1',
            class: "body_text_size_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_size dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_size_0'));
        $('.body_text_size_1').html('Text Size');
        $('<div>',{
            id: x+'_body_text_size_2',
            class: 'body_text_size_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_size_0'));
        $('<ul>',{
            id: x+'_body_text_size_3',
            class: 'body_text_size_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_size_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 20px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 25px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 30px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 35px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 40px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 45px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('.body_text_size_3 li').html('Aa');
        $('<div>',{
            id: x+'_body_text_color_0',
            class: 'body_text_color_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_text_color_1',
            class: "body_text_color_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_color dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_color_0'));
        $('.body_text_color_1').html('Text Color');
        $('<div>',{
            id: x+'_body_text_color_2',
            class: 'body_text_color_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_color_0'));
        $('<ul>',{
            id: x+'_body_text_color_3',
            class: 'body_text_color_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_color_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('secondary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-warning text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('warning');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-dark text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('dark');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-primary text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('primary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-danger text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('danger');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-info text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('info');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-success text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('success');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-white text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('white');
        $('<div>',{
            id: x+'_body_text_underline_0',
            class: 'body_text_underline_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_text_underline_1',
            class: "body_text_underline_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_underline dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_underline_0'));
        $('.body_text_underline_1').html('Text Underline');
        $('<div>',{
            id: x+'_body_text_underline_2',
            class: 'body_text_underline_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_underline_0'));
        $('<ul>',{
            id: x+'_body_text_underline_3',
            class: 'body_text_underline_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_underline_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline dotted;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline double;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline 2px solid black;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline dashed;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline wavy;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('.body_text_underline_3 li').html('Aa');
        $('<div>',{
            id: x+'_body_text_shadow_0',
            class: 'body_text_shadow_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_text_shadow_1',
            class: "body_text_shadow_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_shadow dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_shadow_0'));
        $('.body_text_shadow_1').html('Text Shadow');
        $('<div>',{
            id: x+'_body_text_shadow_2',
            class: 'body_text_shadow_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_shadow_0'));
        $('<ul>',{
            id: x+'_body_text_shadow_3',
            class: 'body_text_shadow_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_shadow_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 0px 0px 3px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 1px 3px 4px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 1px 2px 3px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 2px 4px 3px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 3px 2px 2px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 0px 5px 7px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('.body_text_shadow_3 li').html('Aa');
    });

    // ====================================
    //       End Checkbox Area
    // ====================================

    // ====================================
    //       Start Image Area
    // ====================================

    const input_image = document.querySelector('.image_src');
    let image = '';
    input_image.addEventListener('change', function(){
        let x= Math.random();
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            image = reader.result;
            $("<div>",{
                id: x,
                class: 'img_div',
                style: 'resize:both; overflow:auto; width:20%; max-width:100%; position:relative;'
            }).appendTo('.body');
            $('<img>',{
                height: '100%',
                src: image,
                class: 'user_image img-thumbnail',
                style: 'margin-top:2px;',
                contenteditable: false
            }).appendTo(document.getElementById(x));
            $('<button>',{
                onclick: 'edit('+x+')',
                id: x+'_button',
                class: 'button',
                type: 'button',
                contenteditable: 'false',
                style: 'margin-bottom:2px; visibility:hidden'
            }).appendTo('.body');
            $('.button').html('Edit');
            $('<ul>',{
                id: x+'_body_dropdown',
                class: 'body_dropdown body_checkbox_dropdown list-group',
                style: 'z-index: 1;',
                contenteditable: false
            }).appendTo('.body');
            $('<div>',{
                id: x+'_body_img_opacity_0',
                class: 'body_img_opacity_0 dropdown dropright',
            }).appendTo(document.getElementById(x+'_body_dropdown'));
            $('<li>',{
                class: "list-group-item list-group-item-primary text-muted list-group-item-action body_img_opacity_1 dropdown-toggle",
                'data-toggle': 'dropdown'
            }).appendTo(document.getElementById(x+'_body_img_opacity_0'));
            $('.body_img_opacity_1').html('opacity');
            $('<div>',{
                id: x+'_body_img_opacity_2',
                class: 'body_img_opacity_2 dropdown-menu'
            }).appendTo(document.getElementById(x+'_body_img_opacity_0'));
            $('<ul>',{
                id: x+'_body_img_opacity_3',
                class: 'body_img_opacity_3 list-group'
            }).appendTo(document.getElementById(x+'_body_img_opacity_2'));
            $('<li>',{
                class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
                style: "opacity: 0.2;",
                click: function(){
                    let opacity=$(this).css('opacity');
                    document.getElementById(x).style.opacity=opacity;
                }
            }).appendTo(document.getElementById(x+'_body_img_opacity_3'));
            $('<li>',{
                class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
                style: "opacity: 0.4;",
                click: function(){
                    let opacity=$(this).css('opacity');
                    document.getElementById(x).style.opacity=opacity;
                }
            }).appendTo(document.getElementById(x+'_body_img_opacity_3'));
            $('<li>',{
                class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
                style: "opacity: 0.6;",
                click: function(){
                    let opacity=$(this).css('opacity');
                    document.getElementById(x).style.opacity=opacity;
                }
            }).appendTo(document.getElementById(x+'_body_img_opacity_3'));
            $('<li>',{
                class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
                style: "opacity: 0.8;",
                click: function(){
                    let opacity=$(this).css('opacity');
                    document.getElementById(x).style.opacity=opacity;
                }
            }).appendTo(document.getElementById(x+'_body_img_opacity_3'));
            $('<li>',{
                class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
                style: "opacity: 1;",
                click: function(){
                    let opacity=$(this).css('opacity');
                    document.getElementById(x).style.opacity=opacity;
                }
            }).appendTo(document.getElementById(x+'_body_img_opacity_3'));
            $('.body_img_opacity_3 li').html('Image');
            $('<div>',{
                id: x+'_body_img_float_0',
                class: 'body_img_float_0 dropdown dropright',
            }).appendTo(document.getElementById(x+'_body_dropdown'));
            $('<li>',{
                class: "list-group-item list-group-item-primary text-muted list-group-item-action body_img_float_1 dropdown-toggle",
                'data-toggle': 'dropdown',
            }).appendTo(document.getElementById(x+'_body_img_float_0'));
            $('.body_img_float_1').html('float');
            $('<div>',{
                id: x+'_body_img_float_2',
                class: 'body_img_float_2 dropdown-menu'
            }).appendTo(document.getElementById(x+'_body_img_float_0'));
            $('<ul>',{
                id: x+'_body_img_float_3',
                class: 'body_img_float_3 list-group'
            }).appendTo(document.getElementById(x+'_body_img_float_2'));
            $('<li>',{
                class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
                style: "float: Left;",
                click: function(){
                    let float=$(this).css('float');
                    document.getElementById(x).style.float=float;
                }
            }).appendTo(document.getElementById(x+'_body_img_float_3')).html('Left');
            $('<li>',{
                class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
                style: "float: Right;",
                click: function(){
                    let float=$(this).css('float');
                    document.getElementById(x).style.float=float;
                }
            }).appendTo(document.getElementById(x+'_body_img_float_3')).html('Right');
            $('<div>',{
                id: x+'_body_img_float_0',
                class: 'body_img_float_0',
            }).appendTo(document.getElementById(x+'_body_dropdown'));
            $('<li>',{
                class: "list-group-item list-group-item-primary text-muted list-group-item-action body_img_float_1",
                click: function(){
                    $("<p>",{
                        class: 'caption',
                        contenteditable: true,
                        style: 'position:absolute; background-color:black; color:white; bottom:2%; text-align: center; width:100%;'
                    }).appendTo(document.getElementById(x)).html('Write Your Caption')
                }
            }).appendTo(document.getElementById(x+'_body_img_float_0')).html('Add Caption')
            $(document.getElementById(x)).mouseover(function(){
                $(document.getElementById(x+'_button')).css('visibility','visible')
            });
            $(document).on('mouseover',function(event){
                if(!$(event.target).closest(document.getElementById(x)).length){
                    if(!$(event.target).closest(document.getElementById(x+'_button')).length){
                        if(!$(event.target).closest(document.getElementById(x+'_body_dropdown')).length){
                         $(document.getElementById(x+'_button')).css('visibility','hidden');
                }}}
            });
        });
        reader.readAsDataURL(this.files[0]);
    });

    // ====================================
    //       End Image Area
    // ====================================  

    // ====================================
    //       Start List Area
    // ====================================

    $('.ul').click(function(){
        let x= Math.random();
        $('<br>').appendTo('.body');
        $('<p>',{
            id: x,
            class: 'un_order_list',
            style: 'max-width:100%'
        }).appendTo('.body').html('• Your list item....');
        $('<button>',{
            onclick: 'edit('+x+')',
            id: x+'_button',
            class: 'button',
            type: 'button',
            contenteditable: 'false',
            style: 'margin-bottom:2px; margin-top:2px; visibility:hidden'
        }).appendTo('.body');
        $('.button').html('Edit');
        $(document.getElementById(x)).mouseover(function(){
            $(document.getElementById(x+'_button')).css('visibility','visible')
        });
        $(document).on('mouseover',function(event){
            if(!$(event.target).closest(document.getElementById(x)).length){
                if(!$(event.target).closest(document.getElementById(x+'_button')).length){
                    if(!$(event.target).closest(document.getElementById(x+'_body_dropdown')).length){
                     $(document.getElementById(x+'_button')).css('visibility','hidden');
            }}}
        });
        $('<ul>',{
            id: x+'_body_dropdown',
            class: 'body_dropdown list-group',
            contenteditable: false
        }).appendTo('.body');
        $('<div>',{
            id: x+'_body_list_style_0',
            class: 'body_list_style_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            class: "body_list_style_1 list-group-item list-group-item-primary text-muted list-group-item-action body_list_style dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_list_style_0'));
        $('.body_list_style_1').html('Text Style');
        $('<div>',{
            id: x+'_body_list_style_2',
            class: 'body_list_style_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_list_style_0'));
        $('<ul>',{
            id: x+'_body_list_style_3',
            class: 'body_list_style_3 list-group'
        }).appendTo(document.getElementById(x+'_body_list_style_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: serif,roman;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_list_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: sans-serif,arial;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_list_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: monospace,courier new;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_list_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "cursive,lucida handwriting;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_list_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: fantasy,papyrus;",
            click: function(){  
                document.getElementById(x).style.fontFamily=$(this).css('font-family');
            }
        }).appendTo(document.getElementById(x+'_body_list_style_3'));
        $('.body_list_style_3 li').html('Aa');
        $('<div>',{
            id: x+"_body_list_background_color_0",
            class: 'body_list_background_color_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+"_body_list_background_color_1",
            class: "body_list_background_color_1 list-group-item list-group-item-primary text-muted list-group-item-action body_list_background_color dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_list_background_color_0'));
        $('.body_list_background_color_1').html('Text Background Color');
        $('<div>',{
            id: x+"_body_list_background_color_2",
            class: 'body_list_background_color_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_list_background_color_0'));
        $('<ul>',{
            id: x+"_body_list_background_color_3",
            class: 'body_list_background_color_3 list-group'
        }).appendTo(document.getElementById(x+'_body_list_background_color_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_list_background_color_3')).html('secondary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-warning text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_list_background_color_3')).html('warning');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-dark text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_list_background_color_3')).html('dark');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-primary text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_list_background_color_3')).html('primary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-danger text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_list_background_color_3')).html('danger');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-info text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_list_background_color_3')).html('info');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-success text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_list_background_color_3')).html('success');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-white text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_list_background_color_3')).html('white');
        $('<div>',{
            id: x+'_body_list_size_0',
            class: 'body_list_size_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_list_size_1',
            class: "body_list_size_1 list-group-item list-group-item-primary text-muted list-group-item-action body_list_size dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_list_size_0'));
        $('.body_list_size_1').html('Text Size');
        $('<div>',{
            id: x+'_body_list_size_2',
            class: 'body_list_size_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_list_size_0'));
        $('<ul>',{
            id: x+'_body_list_size_3',
            class: 'body_list_size_3 list-group'
        }).appendTo(document.getElementById(x+'_body_list_size_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 20px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_list_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 25px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_list_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 30px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_list_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 35px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_list_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 40px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_list_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 45px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_list_size_3'));
        $('.body_list_size_3 li').html('Aa');
        $('<div>',{
            id: x+'_body_list_color_0',
            class: 'body_list_color_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_list_color_1',
            class: "body_list_color_1 list-group-item list-group-item-primary text-muted list-group-item-action body_list_color dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_list_color_0'));
        $('.body_list_color_1').html('Text Color');
        $('<div>',{
            id: x+'_body_list_color_2',
            class: 'body_list_color_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_list_color_0'));
        $('<ul>',{
            id: x+'_body_list_color_3',
            class: 'body_list_color_3 list-group'
        }).appendTo(document.getElementById(x+'_body_list_color_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_list_color_3')).html('secondary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-warning text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_list_color_3')).html('warning');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-dark text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_list_color_3')).html('dark');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-primary text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_list_color_3')).html('primary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-danger text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_list_color_3')).html('danger');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-info text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_list_color_3')).html('info');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-success text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_list_color_3')).html('success');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-white text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_list_color_3')).html('white');
        $('<div>',{
            id: x+'_body_link_underline_0',
            class: 'body_link_underline_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_link_underline_1',
            class: "body_link_underline_1 list-group-item list-group-item-primary text-muted list-group-item-action body_link_underline dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_link_underline_0'));
        $('.body_link_underline_1').html('Text Underline');
        $('<div>',{
            id: x+'_body_link_underline_2',
            class: 'body_link_underline_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_link_underline_0'));
        $('<ul>',{
            id: x+'_body_link_underline_3',
            class: 'body_link_underline_3 list-group'
        }).appendTo(document.getElementById(x+'_body_link_underline_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline dotted;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_link_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline double;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_link_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline 2px solid black;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_link_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline dashed;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_link_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline wavy;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_link_underline_3'));
        $('.body_link_underline_3 li').html('Aa');
        $('<div>',{
            id: x+'_body_link_shadow_0',
            class: 'body_link_shadow_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_link_shadow_1',
            class: "body_link_shadow_1 list-group-item list-group-item-primary text-muted list-group-item-action body_link_shadow dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_link_shadow_0'));
        $('.body_link_shadow_1').html('Text Shadow');
        $('<div>',{
            id: x+'_body_link_shadow_2',
            class: 'body_link_shadow_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_link_shadow_0'));
        $('<ul>',{
            id: x+'_body_link_shadow_3',
            class: 'body_link_shadow_3 list-group'
        }).appendTo(document.getElementById(x+'_body_link_shadow_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 0px 0px 3px;",
            click: function(){
                let link_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=link_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_link_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 1px 3px 4px;",
            click: function(){
                let link_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=link_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_link_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 1px 2px 3px;",
            click: function(){
                let link_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=link_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_link_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 2px 4px 3px;",
            click: function(){
                let link_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=link_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_link_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 3px 2px 2px;",
            click: function(){
                let link_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=link_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_link_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 0px 5px 7px;",
            click: function(){
                let link_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=link_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_link_shadow_3'));
        $('.body_link_shadow_3 li').html('Aa');
    });

    // ====================================
    //       End List Area
    // ==================================== 

    // ====================================
    //       Start Link Area
    // ====================================

    $('.link').click(function(){
        $('<br>').appendTo('.body');
        let x= Math.random();
        $('<a>',{
            id: x,
            class: 'hyper_link',
            href: '#',
            style: 'margin-bottom:2px; margin-top:2px; cursor:pointer; max-width:100%',
            contenteditable: false
        }).appendTo('.body').html('created link')
        $('<button>',{
            onclick: 'edit('+x+')',
            id: x+'_button',
            class: 'button',
            type: 'button',
            contenteditable: 'false',
            style: 'margin-bottom:2px; margin-top:2px; visibility:hidden'
        }).appendTo('.body');
        $('.button').html('Edit');
        $(document.getElementById(x)).mouseover(function(){
            $(document.getElementById(x+'_button')).css('visibility','visible')
        });
        $('<ul>',{
            id: x+'_body_dropdown',
            class: 'body_dropdown list-group',
            contenteditable: false
        }).appendTo('.body');
        $('<div>',{
            id: x+'_body_link_style_0',
            class: 'body_link_style_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_link_style_name',
            class: "body_link_style_name list-group-item list-group-item-primary text-muted list-group-item-action body_link_style",
        }).appendTo(document.getElementById(x+'_body_link_style_0'));
        $('<input>',{
            id: x+'_link_name',
            type: 'text',
            placeholder: 'Name',
            class: 'link_name'
        }).appendTo(document.getElementById(x+'_body_link_style_name'));
        $('<li>',{
            id: x+'_body_link_style_1',
            class: "body_link_style_1 list-group-item list-group-item-primary text-muted list-group-item-action body_link_style",
        }).appendTo(document.getElementById(x+'_body_link_style_0'));
        $('<input>',{
            id: x+'_link_url',
            type: 'text',
            placeholder: 'URL',
            class: 'link_url'
        }).appendTo(document.getElementById(x+'_body_link_style_1'));
        $(document).on('mouseover',function(event){
            if(!$(event.target).closest(document.getElementById(x)).length){
                if(!$(event.target).closest(document.getElementById(x+'_button')).length){
                    if(!$(event.target).closest(document.getElementById(x+'_body_dropdown')).length){
                     $(document.getElementById(x+'_button')).css('visibility','hidden');
            }}}
        });
        $(document.getElementById(x+'_body_link_style_1')).on('change',function(){
            var value = document.getElementById(x+'_link_url').value;
            document.getElementById(x).href=value;
        });
        $(document.getElementById(x+'_body_link_style_name')).on('change',function(){
            var value = document.getElementById(x+'_link_name').value;
            document.getElementById(x).innerHTML=value;
        });
        $('<div>',{
            id: x+'_body_text_style_0',
            class: 'body_text_style_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            class: "body_text_style_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_style dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_style_0'));
        $('.body_text_style_1').html('Text Style');
        $('<div>',{
            id: x+'_body_text_style_2',
            class: 'body_text_style_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_style_0'));
        $('<ul>',{
            id: x+'_body_text_style_3',
            class: 'body_text_style_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_style_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: serif,roman;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: sans-serif,arial;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: monospace,courier new;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "cursive,lucida handwriting;",
            click: function(){
                let style=$(this).css('font-family');
                document.getElementById(x).style.fontFamily=style;
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-family: fantasy,papyrus;",
            click: function(){  
                document.getElementById(x).style.fontFamily=$(this).css('font-family');
            }
        }).appendTo(document.getElementById(x+'_body_text_style_3'));
        $('.body_text_style_3 li').html('Aa');
        $('<div>',{
            id: x+"_body_text_background_color_0",
            class: 'body_text_background_color_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+"_body_text_background_color_1",
            class: "body_text_background_color_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_background_color dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_background_color_0'));
        $('.body_text_background_color_1').html('Text Background Color');
        $('<div>',{
            id: x+"_body_text_background_color_2",
            class: 'body_text_background_color_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_background_color_0'));
        $('<ul>',{
            id: x+"_body_text_background_color_3",
            class: 'body_text_background_color_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_background_color_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('secondary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-warning text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('warning');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-dark text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('dark');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-primary text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('primary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-danger text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('danger');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-info text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('info');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-success text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('success');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-white text-black list-group-item-action",
            click: function(){
                let background_color=$(this).css('background-color');
                document.getElementById(x).style.backgroundColor=background_color;
            }
        }).appendTo(document.getElementById(x+'_body_text_background_color_3')).html('white');
        $('<div>',{
            id: x+'_body_text_size_0',
            class: 'body_text_size_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_text_size_1',
            class: "body_text_size_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_size dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_size_0'));
        $('.body_text_size_1').html('Text Size');
        $('<div>',{
            id: x+'_body_text_size_2',
            class: 'body_text_size_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_size_0'));
        $('<ul>',{
            id: x+'_body_text_size_3',
            class: 'body_text_size_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_size_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 20px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 25px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 30px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 35px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 40px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "font-size: 45px;",
            click: function(){
                let size=$(this).css('font-size');
                document.getElementById(x).style.fontSize=size;
            }
        }).appendTo(document.getElementById(x+'_body_text_size_3'));
        $('.body_text_size_3 li').html('Aa');
        $('<div>',{
            id: x+'_body_text_color_0',
            class: 'body_text_color_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_text_color_1',
            class: "body_text_color_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_color dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_color_0'));
        $('.body_text_color_1').html('Text Color');
        $('<div>',{
            id: x+'_body_text_color_2',
            class: 'body_text_color_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_color_0'));
        $('<ul>',{
            id: x+'_body_text_color_3',
            class: 'body_text_color_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_color_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('secondary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-warning text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('warning');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-dark text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('dark');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-primary text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('primary');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-danger text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('danger');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-info text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('info');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-success text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('success');
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-white text-black list-group-item-action",
            click: function(){
                let color=$(this).css('color');
                document.getElementById(x).style.color=color;
            }
        }).appendTo(document.getElementById(x+'_body_text_color_3')).html('white');
        $('<div>',{
            id: x+'_body_text_underline_0',
            class: 'body_text_underline_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_text_underline_1',
            class: "body_text_underline_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_underline dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_underline_0'));
        $('.body_text_underline_1').html('Text Underline');
        $('<div>',{
            id: x+'_body_text_underline_2',
            class: 'body_text_underline_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_underline_0'));
        $('<ul>',{
            id: x+'_body_text_underline_3',
            class: 'body_text_underline_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_underline_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline dotted;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline double;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline 2px solid black;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline dashed;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-decoration: underline wavy;",
            click: function(){
                let text_decoration=$(this).css('text-decoration');
                document.getElementById(x).style.textDecoration=text_decoration;
            }
        }).appendTo(document.getElementById(x+'_body_text_underline_3'));
        $('.body_text_underline_3 li').html('Aa');
        $('<div>',{
            id: x+'_body_text_shadow_0',
            class: 'body_text_shadow_0 dropdown dropright',
        }).appendTo(document.getElementById(x+'_body_dropdown'));
        $('<li>',{
            id: x+'_body_text_shadow_1',
            class: "body_text_shadow_1 list-group-item list-group-item-primary text-muted list-group-item-action body_text_shadow dropdown-toggle",
            'data-toggle': 'dropdown'
        }).appendTo(document.getElementById(x+'_body_text_shadow_0'));
        $('.body_text_shadow_1').html('Text Shadow');
        $('<div>',{
            id: x+'_body_text_shadow_2',
            class: 'body_text_shadow_2 dropdown-menu'
        }).appendTo(document.getElementById(x+'_body_text_shadow_0'));
        $('<ul>',{
            id: x+'_body_text_shadow_3',
            class: 'body_text_shadow_3 list-group'
        }).appendTo(document.getElementById(x+'_body_text_shadow_2'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 0px 0px 3px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 1px 3px 4px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 1px 2px 3px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 2px 4px 3px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 3px 2px 2px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('<li>',{
            class: "list-group-item dropdown-item list-group-item-secondary text-black list-group-item-action",
            style: "text-shadow: 0px 5px 7px;",
            click: function(){
                let text_shadow=$(this).css('text-shadow');
                document.getElementById(x).style.textShadow=text_shadow;
            }
        }).appendTo(document.getElementById(x+'_body_text_shadow_3'));
        $('.body_text_shadow_3 li').html('Aa');
    });

    // ====================================
    //       End Link Area
    // ====================================

    $(document).on('click',function(event){
        if(!$(event.target).closest('.button').length){
            if(!$(event.target).closest('.body_dropdown').length){
            $('.body_dropdown').css('visibility','hidden');
        }}
    });
});
function edit(x){
    document.getElementById(x+'_body_dropdown').style.visibility='visible';
};