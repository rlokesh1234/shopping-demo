(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{2264:function(e,a,n){"use strict";n.r(a);var t=n(11),l=n(12),i=n(15),r=n(13),m=n(14),o=n(0),s=n.n(o),c=n(1),u=n(4),d=n(65),v=n.n(d),b=function(e){function a(){var e,n;Object(t.a)(this,a);for(var l=arguments.length,m=new Array(l),o=0;o<l;o++)m[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(m)))).state={canSubmit:!1},n.disableButton=function(){n.setState({canSubmit:!1})},n.enableButton=function(){n.setState({canSubmit:!0})},n.onSubmit=function(e){console.info("submit",e)},n}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.state.canSubmit;return s.a.createElement("div",{className:"max-w-sm"},s.a.createElement(c.vb,{className:"h2 mb-24"},"Example Formsy Form"),s.a.createElement(v.a,{onValidSubmit:this.onSubmit,onValid:this.enableButton,onInvalid:this.disableButton,ref:function(a){return e.form=a},className:"flex flex-col justify-center"},s.a.createElement(u.D,{className:"mb-16",type:"text",name:"name",label:"Name",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0}),s.a.createElement(u.D,{className:"my-16",type:"text",name:"email",label:"Email",validations:"isEmail",validationError:"This is not a valid email",required:!0}),s.a.createElement(u.D,{className:"my-16",type:"text",name:"name",label:"Name (Outlined)",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,variant:"outlined"}),s.a.createElement(u.D,{className:"my-16",type:"text",name:"email",label:"Email (Outlined)",validations:"isEmail",validationError:"This is not a valid email",required:!0,variant:"outlined"}),s.a.createElement(u.D,{className:"my-16",type:"text",name:"name",label:"Name (Filled)",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,variant:"filled"}),s.a.createElement(u.D,{className:"my-16",type:"text",name:"email",label:"Email (Filled)",validations:"isEmail",validationError:"This is not a valid email",required:!0,variant:"filled"}),s.a.createElement(u.B,{className:"my-16",name:"gender",label:"Gender",validations:"equals:female",validationError:"Only ladies are accepted",required:!0},s.a.createElement(c.y,{value:"male",control:s.a.createElement(c.Z,{color:"primary"}),label:"Male"}),s.a.createElement(c.y,{value:"female",control:s.a.createElement(c.Z,{color:"primary"}),label:"Female"}),s.a.createElement(c.y,{value:"other",control:s.a.createElement(c.Z,{color:"primary"}),label:"Other"}),s.a.createElement(c.y,{value:"disabled",disabled:!0,control:s.a.createElement(c.Z,null),label:"(Disabled option)"})),s.a.createElement(u.C,{className:"my-16",name:"related",label:"Related with",value:"none",validations:"equals:none",validationError:"Must be None"},s.a.createElement(c.T,{value:"none"},s.a.createElement("em",null,"None")),s.a.createElement(c.T,{value:"hai"},"Hai"),s.a.createElement(c.T,{value:"olivier"},"Olivier"),s.a.createElement(c.T,{value:"kevin"},"Kevin")),s.a.createElement(u.C,{className:"my-16",name:"related",label:"Related with (Outlined)",value:"none",validations:"equals:none",validationError:"Must be None",variant:"outlined"},s.a.createElement(c.T,{value:"none"},s.a.createElement("em",null,"None")),s.a.createElement(c.T,{value:"hai"},"Hai"),s.a.createElement(c.T,{value:"olivier"},"Olivier"),s.a.createElement(c.T,{value:"kevin"},"Kevin")),s.a.createElement(u.C,{className:"my-16",name:"related",label:"Related with (Filled)",value:"none",validations:"equals:none",validationError:"Must be None",variant:"filled"},s.a.createElement(c.T,{value:"none"},s.a.createElement("em",null,"None")),s.a.createElement(c.T,{value:"hai"},"Hai"),s.a.createElement(c.T,{value:"olivier"},"Olivier"),s.a.createElement(c.T,{value:"kevin"},"Kevin")),s.a.createElement(u.a,{className:"my-16",name:"accept",label:"Accept",validations:"equals:true",validationError:"You need to accept"}),s.a.createElement(c.c,{type:"submit",variant:"contained",color:"primary",className:"mx-auto my-16","aria-label":"LOG IN",disabled:!a},"Can submit")))}}]),a}(o.Component);a.default=b},2265:function(e,a){e.exports='import React, {Component} from \'react\';\nimport {Button, FormControlLabel, MenuItem, Radio, Typography} from \'@material-ui/core\';\nimport {TextFieldFormsy, CheckboxFormsy, RadioGroupFormsy, SelectFormsy} from \'@fuse\';\nimport Formsy from \'formsy-react\';\n\nclass SimpleFormExample extends Component {\n\n    state = {\n        canSubmit: false\n    };\n\n    disableButton = () => {\n        this.setState({canSubmit: false});\n    };\n\n    enableButton = () => {\n        this.setState({canSubmit: true});\n    };\n\n    onSubmit = (model) => {\n        console.info(\'submit\', model);\n    };\n\n    render()\n    {\n        const {canSubmit} = this.state;\n\n        return (\n            <div className="max-w-sm">\n                <Typography className="h2 mb-24">Example Formsy Form</Typography>\n                <Formsy\n                    onValidSubmit={this.onSubmit}\n                    onValid={this.enableButton}\n                    onInvalid={this.disableButton}\n                    ref={(form) => this.form = form}\n                    className="flex flex-col justify-center"\n                >\n\n                    <TextFieldFormsy\n                        className="mb-16"\n                        type="text"\n                        name="name"\n                        label="Name"\n                        validations={{\n                            minLength: 4\n                        }}\n                        validationErrors={{\n                            minLength: \'Min character length is 4\'\n                        }}\n                        required\n                    />\n\n                    <TextFieldFormsy\n                        className="my-16"\n                        type="text"\n                        name="email"\n                        label="Email"\n                        validations="isEmail"\n                        validationError="This is not a valid email"\n                        required\n                    />\n\n                    <TextFieldFormsy\n                        className="my-16"\n                        type="text"\n                        name="name"\n                        label="Name (Outlined)"\n                        validations={{\n                            minLength: 4\n                        }}\n                        validationErrors={{\n                            minLength: \'Min character length is 4\'\n                        }}\n                        required\n                        variant="outlined"\n                    />\n\n                    <TextFieldFormsy\n                        className="my-16"\n                        type="text"\n                        name="email"\n                        label="Email (Outlined)"\n                        validations="isEmail"\n                        validationError="This is not a valid email"\n                        required\n                        variant="outlined"\n                    />\n\n                    <TextFieldFormsy\n                        className="my-16"\n                        type="text"\n                        name="name"\n                        label="Name (Filled)"\n                        validations={{\n                            minLength: 4\n                        }}\n                        validationErrors={{\n                            minLength: \'Min character length is 4\'\n                        }}\n                        required\n                        variant="filled"\n                    />\n\n                    <TextFieldFormsy\n                        className="my-16"\n                        type="text"\n                        name="email"\n                        label="Email (Filled)"\n                        validations="isEmail"\n                        validationError="This is not a valid email"\n                        required\n                        variant="filled"\n                    />\n\n                    <RadioGroupFormsy\n                        className="my-16"\n                        name="gender"\n                        label="Gender"\n                        validations="equals:female"\n                        validationError="Only ladies are accepted"\n                        required\n                    >\n                        <FormControlLabel value="male" control={<Radio color="primary"/>} label="Male"/>\n                        <FormControlLabel value="female" control={<Radio color="primary"/>} label="Female"/>\n                        <FormControlLabel value="other" control={<Radio color="primary"/>} label="Other"/>\n                        <FormControlLabel\n                            value="disabled"\n                            disabled\n                            control={<Radio/>}\n                            label="(Disabled option)"\n                        />\n                    </RadioGroupFormsy>\n\n                    <SelectFormsy\n                        className="my-16"\n                        name="related"\n                        label="Related with"\n                        value="none"\n                        validations="equals:none"\n                        validationError="Must be None"\n                    >\n                        <MenuItem value="none">\n                            <em>None</em>\n                        </MenuItem>\n                        <MenuItem value="hai">Hai</MenuItem>\n                        <MenuItem value="olivier">Olivier</MenuItem>\n                        <MenuItem value="kevin">Kevin</MenuItem>\n                    </SelectFormsy>\n\n                    <SelectFormsy\n                        className="my-16"\n                        name="related"\n                        label="Related with (Outlined)"\n                        value="none"\n                        validations="equals:none"\n                        validationError="Must be None"\n                        variant="outlined"\n                    >\n                        <MenuItem value="none">\n                            <em>None</em>\n                        </MenuItem>\n                        <MenuItem value="hai">Hai</MenuItem>\n                        <MenuItem value="olivier">Olivier</MenuItem>\n                        <MenuItem value="kevin">Kevin</MenuItem>\n                    </SelectFormsy>\n\n                    <SelectFormsy\n                        className="my-16"\n                        name="related"\n                        label="Related with (Filled)"\n                        value="none"\n                        validations="equals:none"\n                        validationError="Must be None"\n                        variant="filled"\n                    >\n                        <MenuItem value="none">\n                            <em>None</em>\n                        </MenuItem>\n                        <MenuItem value="hai">Hai</MenuItem>\n                        <MenuItem value="olivier">Olivier</MenuItem>\n                        <MenuItem value="kevin">Kevin</MenuItem>\n                    </SelectFormsy>\n\n                    <CheckboxFormsy\n                        className="my-16"\n                        name="accept"\n                        label="Accept"\n                        validations="equals:true"\n                        validationError="You need to accept"\n                    />\n\n                    <Button\n                        type="submit"\n                        variant="contained"\n                        color="primary"\n                        className="mx-auto my-16"\n                        aria-label="LOG IN"\n                        disabled={!canSubmit}\n                    >\n                        Can submit\n                    </Button>\n                </Formsy>\n            </div>\n        );\n    }\n}\n\nexport default SimpleFormExample;\n'},2398:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),i=n(1),r=n(4),m=n(24);a.default=function(){return l.a.createElement(r.s,{header:l.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},l.a.createElement("div",{className:"flex flex-col"},l.a.createElement("div",{className:"flex items-center mb-16"},l.a.createElement(i.G,{className:"text-18",color:"action"},"home"),l.a.createElement(i.G,{className:"text-16",color:"action"},"chevron_right"),l.a.createElement(i.vb,{color:"textSecondary"},"Components"),l.a.createElement(i.G,{className:"text-16",color:"action"},"chevron_right"),l.a.createElement(i.vb,{color:"textSecondary"},"3rd Party Components")),l.a.createElement(i.vb,{variant:"h6"},"Formsy")),l.a.createElement(i.c,{className:"normal-case",variant:"contained",component:"a",href:"https://github.com/formsy/formsy-react",target:"_blank"},l.a.createElement(i.G,{className:"mr-4"},"link"),"Reference")),content:l.a.createElement("div",{className:"p-24 max-w-2xl"},l.a.createElement(i.vb,{className:"mb-16",component:"p"},l.a.createElement("code",null,"formsy-react")," is a form input builder and validator for React."),l.a.createElement(i.vb,{className:"mb-16",component:"p"},"HOCs are needed for formsy to work. We created for TextField, Select, RadioGroup, Checkbox under @fuse."),l.a.createElement("hr",null),l.a.createElement(i.vb,{className:"text-32 mt-32 mb-8",component:"h2"},"Example Usages"),l.a.createElement(r.j,{className:"mb-64",component:n(2264).default,raw:n(2265)}),l.a.createElement(i.vb,{className:"text-32 mt-32 mb-8",component:"h2"},"Demos"),l.a.createElement("ul",null,l.a.createElement("li",{className:"mb-8"},l.a.createElement(m.a,{to:"/login"},"Login page"))))})}}}]);