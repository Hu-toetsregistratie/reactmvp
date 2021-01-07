import React, { Component } from 'react';
import { FormFieldGroup } from '@instructure/ui-form-field';
import { TextInput } from '@instructure/ui-text-input';


export function PostResult(props) {
    return(
        <FormFieldGroup
        description="Breakfast"
        rowSpacing="small"
        layout="inline"
        vAlign="middle"
    >
        <TextInput label="Voornaam"
                   messages={[
                       { text: 'Invalid name', type: 'error' }
                   ]}
        />
        <TextInput label="Achternaam"
                   messages={[
                       { text: 'Invalid name', type: 'error' }
                   ]}
        />
        <TextInput label="StudentenNummer"
                   messages={[
                       { text: 'Invalid name', type: 'error' }
                   ]}
        />
    </FormFieldGroup>)
}
